import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
};

export function getBlogPosts(): BlogPost[] {
    const blogDir = path.join(process.cwd(), 'content', 'blog');

    // Check if directory exists
    if (!fs.existsSync(blogDir)) {
        return [];
    }

    const files = fs.readdirSync(blogDir);

    const posts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const slug = file.replace(/\.md$/, '');
            const filePath = path.join(blogDir, file);
            const fileContents = fs.readFileSync(filePath, 'utf8');

            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || 'Untitled',
                date: data.date || '',
                summary: data.summary || '',
                content,
            };
        })
        // Sort by date, newest first
        .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });

    return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const filePath = path.join(blogDir, `${slug}.md`);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || '',
        summary: data.summary || '',
        content,
    };
}

import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPost, getBlogPosts } from "../../_utils/getBlogPosts";

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
                <header className="mb-10 border-b border-slate-600/80 pb-6">
                    <Link
                        href="/blog"
                        className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Blog
                    </Link>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                        {post.title}
                    </h1>
                    <time
                        dateTime={post.date}
                        className="mt-3 block text-sm uppercase tracking-wide text-slate-400"
                    >
                        {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </time>
                </header>

                <main className="flex-1">
                    <article className="prose prose-invert prose-slate max-w-none">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h1: ({ children }) => (
                                    <h2 className="mb-4 mt-8 text-2xl font-semibold text-slate-100 sm:text-3xl">
                                        {children}
                                    </h2>
                                ),
                                h2: ({ children }) => (
                                    <h3 className="mb-3 mt-6 text-xl font-semibold text-slate-200 sm:text-2xl">
                                        {children}
                                    </h3>
                                ),
                                h3: ({ children }) => (
                                    <h4 className="mb-2 mt-4 text-lg font-semibold text-slate-200 sm:text-xl">
                                        {children}
                                    </h4>
                                ),
                                p: ({ children }) => (
                                    <p className="mb-4 leading-relaxed text-slate-300">
                                        {children}
                                    </p>
                                ),
                                ul: ({ children }) => (
                                    <ul className="mb-4 ml-6 list-disc space-y-2 text-slate-300">
                                        {children}
                                    </ul>
                                ),
                                ol: ({ children }) => (
                                    <ol className="mb-4 ml-6 list-decimal space-y-2 text-slate-300">
                                        {children}
                                    </ol>
                                ),
                                li: ({ children }) => (
                                    <li className="leading-relaxed">{children}</li>
                                ),
                                code: ({ className, children }) => {
                                    const isInline = !className;
                                    return isInline ? (
                                        <code className="rounded bg-slate-800 px-1.5 py-0.5 text-sm text-emerald-300">
                                            {children}
                                        </code>
                                    ) : (
                                        <code className={className}>{children}</code>
                                    );
                                },
                                pre: ({ children }) => (
                                    <pre className="mb-4 overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm">
                                        {children}
                                    </pre>
                                ),
                                blockquote: ({ children }) => (
                                    <blockquote className="mb-4 border-l-4 border-emerald-500/50 pl-4 italic text-slate-400">
                                        {children}
                                    </blockquote>
                                ),
                                table: ({ children }) => (
                                    <div className="mb-4 overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-600">
                                            {children}
                                        </table>
                                    </div>
                                ),
                                th: ({ children }) => (
                                    <th className="border border-slate-600 bg-slate-800 px-4 py-2 text-left font-semibold text-slate-200">
                                        {children}
                                    </th>
                                ),
                                td: ({ children }) => (
                                    <td className="border border-slate-600 px-4 py-2 text-slate-300">
                                        {children}
                                    </td>
                                ),
                                a: ({ href, children }) => (
                                    <a
                                        href={href}
                                        className="text-emerald-300 underline decoration-emerald-500/30 transition hover:text-emerald-200 hover:decoration-emerald-400"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {children}
                                    </a>
                                ),
                            }}
                        >
                            {post.content}
                        </Markdown>
                    </article>
                </main>
            </div>
        </div>
    );
}

import Link from "next/link";
import type { BlogPost } from "../_utils/getBlogPosts";

interface BlogProps {
    posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
    // Show only the 2 most recent posts on homepage
    const recentPosts = posts.slice(0, 3);

    return (
        <section
            id="blog"
            aria-labelledby="blog-heading"
            className="rounded-2xl border border-slate-600/60 bg-[var(--blog-primary)] px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
        >
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                        <span className="h-px w-6 bg-emerald-400/80" />
                        <span id="blog-heading">Blog</span>
                    </div>
                </div>
                {posts.length > 0 && (
                    <Link
                        href="/blog"
                        className="text-xs font-medium text-emerald-300 transition hover:text-emerald-200 sm:text-sm"
                    >
                        View all →
                    </Link>
                )}
            </div>

            {recentPosts.length === 0 ? (
                <p className="mt-5 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                    No posts... yet
                </p>
            ) : (
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:mt-6">
                    {recentPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article className="relative flex flex-col justify-between h-auto rounded-2xl border border-slate-600/30 bg-slate-800/40 p-4 shadow-sm transition hover:border-slate-500/40 hover:bg-slate-700/30 hover:shadow-md sm:h-64">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="line-clamp-2 text-sm font-semibold text-slate-100 sm:text-base">
                                        {post.title}
                                    </h3>
                                    <time
                                        dateTime={post.date}
                                        className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400"
                                    >
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                        })}
                                    </time>
                                </div>
                                <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-slate-300 sm:text-sm">
                                    {post.summary}
                                </p>
                                <div className="mt-3">
                                    <span className="inline-flex items-center text-xs font-medium text-emerald-300 transition group-hover:text-emerald-200 sm:text-sm">
                                        Read more
                                        <span aria-hidden="true" className="ml-1">
                                            →
                                        </span>
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}

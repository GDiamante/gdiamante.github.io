import Link from "next/link";
import { getBlogPosts } from "../_utils/getBlogPosts";

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <div className="min-h-screen">
            <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
                <header className="mb-8 flex flex-col items-center text-center gap-3 border-b border-slate-600/80 pb-6 sm:mb-10 sm:items-start sm:text-left">
                    <Link
                        href="/"
                        className="mb-0 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition hover:text-emerald-200"
                    >
                        <span aria-hidden="true">←</span>
                        Back to Home
                    </Link>
                    <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
                        Blog
                    </h1>
                    <p className="mt-1 text-sm text-slate-400 sm:text-base">
                        Occasional notes on engineering, design, and things I&apos;m learning.
                    </p>
                </header>

                <main className="flex flex-1 flex-col">
                    {posts.length === 0 ? (
                        <p className="text-sm text-slate-400 sm:text-base">
                            No posts... yet
                        </p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group"
                                >
                                    <article className="flex h-full flex-col rounded-2xl border border-slate-600/30 bg-slate-800/40 p-5 shadow-sm transition hover:border-slate-500/40 hover:bg-slate-700/30 hover:shadow-md">
                                        <div className="mb-3 flex items-start justify-between gap-3">
                                            <h2 className="text-lg font-semibold text-slate-100 group-hover:text-emerald-300 sm:text-xl">
                                                {post.title}
                                            </h2>
                                        </div>
                                        <time
                                            dateTime={post.date}
                                            className="mb-3 text-xs uppercase tracking-wide text-slate-400"
                                        >
                                            {new Date(post.date).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </time>
                                        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300">
                                            {post.summary}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-emerald-300 transition group-hover:text-emerald-200">
                                            Read more
                                            <span aria-hidden="true" className="ml-1">
                                                →
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

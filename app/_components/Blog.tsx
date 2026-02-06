// To add or edit blog posts, update this array.
// See the instructions in the README-style notes in the assistant message.
const blogPosts = [
    {
      title: "Building Reliable Systems at Scale",
      date: "2026-01-01",
      summary:
        "A walkthrough of patterns and trade-offs I use when designing reliable backend systems.",
      url: "#", // replace with actual blog URL or route
    },
    {
      title: "Practical TypeScript Patterns",
      date: "2025-10-15",
      summary:
        "How I structure types in real-world applications to keep codebases maintainable over time.",
      url: "#",
    },
  ];

export default function Blog() {
    return(
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
                <p className="text-xs text-slate-400 sm:text-sm">
                    Occasional notes on engineering, design, and things I&apos;m
                    learning.
                </p>
                </div>
            </div>

            {blogPosts.length === 0 ? (
                <p className="mt-5 text-xs text-slate-400 sm:mt-6 sm:text-sm">
                No posts yet. Add entries to the `blogPosts` array in
                `app/page.tsx` to have them show up here.
                </p>
            ) : (
                <div className="mt-5 overflow-x-auto pb-2 sm:mt-6">
                <div className="flex min-w-max gap-4 sm:gap-5">
                {blogPosts.map((post) => (
                    <article
                    key={post.title}
                    className="group relative flex h-56 min-w-[13rem] max-w-[13rem] flex-col justify-between rounded-2xl border border-slate-600/30 bg-slate-800/40 p-4 shadow-sm transition hover:border-slate-500/40 hover:bg-slate-700/30 hover:shadow-md sm:h-64 sm:min-w-[15rem] sm:max-w-[15rem]"
                    >
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
                    {post.url && post.url !== "#" && (
                        <div className="mt-3">
                        <a
                            href={post.url}
                            className="inline-flex items-center text-xs font-medium text-emerald-300 transition hover:text-emerald-200 sm:text-sm"
                        >
                            Read more
                            <span aria-hidden="true" className="ml-1">
                            ↗
                            </span>
                        </a>
                        </div>
                    )}
                    </article>
                ))}
                </div>
                </div>
            )}
            </section>
    );
}
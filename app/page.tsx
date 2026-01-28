const projects = [
  {
    name: "Project One",
    description:
      "Concise description of what this project does, the problem it solves, and the main technologies involved.",
    github: "https://github.com/giodiamante/project-one",
  },
  {
    name: "Project Two",
    description:
      "Another project – highlight impact, metrics if you have them, and your specific contributions.",
    github: "https://github.com/giodiamante/project-two",
  },
  {
    name: "Project Three",
    description:
      "Short pitch that explains the why, not just the what, plus any interesting technical details.",
    github: "https://github.com/giodiamante/project-three",
  },
];

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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <header className="mb-10 flex flex-col gap-6 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Software Engineer
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Gio Diamante
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
              I design and build reliable, user-focused software across the
              stack, with a focus on clean architectures, thoughtful UX, and
              pragmatic engineering.
            </p>
          </div>
          <nav className="text-sm text-slate-600">
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              <li>
                <a
                  href="#about"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-slate-100/80 backdrop-blur transition hover:border-sky-400 hover:bg-white hover:text-slate-900 sm:text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-slate-100/80 backdrop-blur transition hover:border-fuchsia-400 hover:bg-white hover:text-slate-900 sm:text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-slate-100/80 backdrop-blur transition hover:border-amber-400 hover:bg-white hover:text-slate-900 sm:text-sm"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200/80 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm shadow-slate-100/80 backdrop-blur transition hover:border-emerald-400 hover:bg-white hover:text-slate-900 sm:text-sm"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-1 flex-col gap-10 sm:gap-12">
          {/* About */}
          <section
            id="about"
            aria-labelledby="about-heading"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:h-32 sm:w-32">
                  {/* Replace /profile.jpg with your own image in /public */}
                  <img
                    src="/profile.jpg"
                    alt="Portrait of Gio Diamante"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                  <span className="h-px w-6 bg-sky-500/70" />
                  <span id="about-heading">About</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
                  I&apos;m a software engineer who enjoys turning complex
                  problems into simple, reliable systems. I care about clear
                  abstractions, strong typing, and fast feedback loops, whether
                  I&apos;m working on developer tooling, product features, or
                  infrastructure.
                </p>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Recently I&apos;ve been focused on modern web stacks,
                  type-safe APIs, and improving the day-to-day experience of
                  engineers I work with through better tooling and automation.
                </p>
                <div className="flex flex-wrap gap-3 pt-1 text-xs sm:text-sm">
                  <a
                    href="https://www.linkedin.com/in/giodiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-sky-50/70 px-3 py-1.5 text-sky-800 shadow-sm shadow-sky-50/80 transition hover:border-sky-300 hover:bg-white hover:text-sky-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:gio@giodiamante.com"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-emerald-800 shadow-sm shadow-emerald-50/80 transition hover:border-emerald-300 hover:bg-white hover:text-emerald-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Email
                  </a>
                  <a
                    href="https://github.com/giodiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-slate-800 shadow-sm shadow-slate-100/80 transition hover:border-slate-400 hover:bg-white hover:text-slate-950"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Blog */}
          <section
            id="blog"
            aria-labelledby="blog-heading"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-800">
                  <span className="h-px w-6 bg-slate-400/80" />
                  <span id="blog-heading">Blog</span>
                </div>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Occasional notes on engineering, design, and things I&apos;m
                  learning.
                </p>
              </div>
            </div>

            {blogPosts.length === 0 ? (
              <p className="mt-5 text-xs text-slate-600 sm:mt-6 sm:text-sm">
                No posts yet. Add entries to the `blogPosts` array in
                `app/page.tsx` to have them show up here.
              </p>
            ) : (
              <div className="mt-5 overflow-x-auto pb-2 sm:mt-6">
                <div className="flex min-w-max gap-4 sm:gap-5">
                {blogPosts.map((post) => (
                  <article
                    key={post.title}
                    className="group relative flex h-56 min-w-[13rem] max-w-[13rem] flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-slate-300 hover:bg-white hover:shadow-md sm:h-64 sm:min-w-[15rem] sm:max-w-[15rem]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 sm:text-base">
                        {post.title}
                      </h3>
                      <time
                        dateTime={post.date}
                        className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-500"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </time>
                    </div>
                    <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {post.summary}
                    </p>
                    {post.url && post.url !== "#" && (
                      <div className="mt-3">
                        <a
                          href={post.url}
                          className="inline-flex items-center text-xs font-medium text-sky-700 transition hover:text-sky-900 sm:text-sm"
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

            <p className="mt-4 text-[0.7rem] text-slate-500 sm:mt-5 sm:text-xs">
              Tip: you can later move blog content into dedicated routes or MDX
              files; this section is intentionally simple to keep publishing
              friction low.
            </p>
          </section>

          {/* Resume + Contact */}
          <section
            id="resume"
            aria-labelledby="resume-heading"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3 lg:max-w-xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                  <span className="h-px w-6 bg-amber-500/80" />
                  <span id="resume-heading">Resume</span>
                </div>
                <p className="text-sm text-slate-700 sm:text-base">
                  A concise overview of my experience, skills, and impact. Grab
                  the PDF if you want a snapshot you can share with your team.
                </p>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-amber-500/40 transition hover:from-amber-300 hover:to-amber-500 sm:px-5 sm:text-sm"
                >
                  Download Resume (PDF)
                </a>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Place your `resume.pdf` file in the `public` folder so this
                  link works.
                </p>
              </div>

              <div className="mt-2 w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm lg:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Contact me
                </h3>
                <p className="mt-2 text-xs text-slate-700 sm:text-sm">
                  The easiest way to reach me is via email or LinkedIn. I&apos;m
                  always open to chatting about interesting problems and teams.
                </p>
                <div className="mt-4 space-y-2 text-xs sm:text-sm">
                  <a
                    href="mailto:gio@giodiamante.com"
                    className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300"
                  >
                    <span>Email</span>
                    <span className="text-[0.7rem] text-slate-600">
                      gio@giodiamante.com
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/giodiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300"
                  >
                    <span>LinkedIn</span>
                    <span className="text-[0.7rem] text-slate-600">
                      /in/giodiamante
                    </span>
                  </a>
                  <a
                    href="https://github.com/giodiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-slate-800 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:ring-slate-300"
                  >
                    <span>GitHub</span>
                    <span className="text-[0.7rem] text-slate-600">
                      @giodiamante
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section
            id="projects"
            aria-labelledby="projects-heading"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-800">
                  <span className="h-px w-6 bg-emerald-500/70" />
                  <span id="projects-heading">Projects</span>
                </div>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Selected work and experiments. Each project highlights a
                  different part of my stack.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:gap-5">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-700 sm:text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-xs font-medium text-emerald-700 transition hover:text-emerald-900 sm:text-sm"
                    >
                      View on GitHub
                      <span aria-hidden="true" className="ml-1">
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500 sm:mt-12">
          <p>
            © {new Date().getFullYear()} Gio Diamante. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

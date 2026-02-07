const projects = [
  {
    name: "Pomodoro",
    description:
      "Gamified Pomodoro timer for Android using Flutter",
    github: "https://github.com/GDiamante/Pomodoro-Android",
  },
  {
    name: "Notify Me",
    description:
      "IOS app to create push notifications with custom text",
    github: "https://github.com/GDiamante/Notify-Me",
  },
  {
    name: "NextJS Personal Site",
    description:
      "Resume and blog website using NextJS",
    github: "https://github.com/GDiamante/gdiamante.github.io",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="rounded-2xl border border-slate-600/60 bg-[var(--projects-primary)] px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
            <span className="h-px w-6 bg-violet-400/70" />
            <span id="projects-heading">Projects</span>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 lg:gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col justify-between rounded-xl border border-slate-600/60 bg-slate-700/50 p-4 shadow-sm transition hover:border-violet-500/60 hover:bg-slate-600/60 hover:shadow-md"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                {project.name}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {project.description}
              </p>
            </div>
            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-xs font-medium text-violet-300 transition hover:text-violet-200 sm:text-sm"
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
  );
}
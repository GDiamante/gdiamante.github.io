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
  
export default function Projects() {
    return (
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
    );
}
export default function Resume() {

    return (
        <section
            id="resume"
            aria-labelledby="resume-heading"
            className="rounded-2xl border border-slate-600/60 bg-[var(--resume-primary)] px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
        >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3 lg:max-w-xl">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                        <span className="h-px w-6 bg-amber-400/80" />
                        <span id="resume-heading">Resume</span>
                    </div>
                    <p className="text-sm text-slate-200 sm:text-base">
                        A concise overview of my experience, skills, and impact. Grab
                        the PDF if you want a snapshot you can share with your team.
                    </p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-amber-900/40 transition hover:from-amber-400 hover:to-amber-500 sm:px-5 sm:text-sm"
                    >
                        Download Resume (PDF)
                    </a>
                    <p className="text-xs text-slate-400 sm:text-sm">
                        Place your `resume.pdf` file in the `public` folder so this
                        link works.
                    </p>
                </div>

                <div className="mt-2 w-full max-w-sm rounded-xl border border-slate-600/60 bg-slate-700/50 p-4 shadow-sm lg:mt-0">
                    <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                        Contact me
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                        The easiest way to reach me is via email or LinkedIn. I&apos;m
                        always open to chatting about interesting problems and teams.
                    </p>
                    <div className="mt-4 space-y-2 text-xs sm:text-sm">
                        <a
                            href="mailto:gio@giodiamante.com"
                            className="flex items-center justify-between rounded-lg bg-slate-600/50 px-3 py-2 text-slate-200 ring-1 ring-slate-500/50 transition hover:bg-slate-600 hover:ring-slate-400 sm:text-sm"
                        >
                            <span>Email</span>
                            <span className="text-[0.7rem] text-slate-400">
                                gio@giodiamante.com
                            </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/giodiamante"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between rounded-lg bg-slate-600/50 px-3 py-2 text-slate-200 ring-1 ring-slate-500/50 transition hover:bg-slate-600 hover:ring-slate-400 sm:text-sm"
                        >
                            <span>LinkedIn</span>
                            <span className="text-[0.7rem] text-slate-400">
                                /in/giodiamante
                            </span>
                        </a>
                        <a
                            href="https://github.com/giodiamante"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between rounded-lg bg-slate-600/50 px-3 py-2 text-slate-200 ring-1 ring-slate-500/50 transition hover:bg-slate-600 hover:ring-slate-400 sm:text-sm"
                        >
                            <span>GitHub</span>
                            <span className="text-[0.7rem] text-slate-400">
                                @giodiamante
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
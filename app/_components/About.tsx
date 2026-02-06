
export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="rounded-2xl border border-slate-600/60 bg-[var(--about-primary)] px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
            >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
                <span className="h-px w-6 bg-sky-400/70" />
                <span id="about-heading">About</span>
            </div>
            <div className=" flex flex-col gap-6 sm:flex-row sm:items-end">
                <div className="shrink-0">
                <div className="relative h-55 w-55 overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-700/50 shadow-sm sm:h-55 sm:w-55">
                    {/* Replace /profile.jpg with your own image in /public */}
                    <img
                    src="/profile.jpg"
                    alt="Portrait of Gio Diamante"
                    className="h-full w-full object-cover"
                    />
                </div>
                </div>
                <div className="space-y-3">
                <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                I&apos;m Gio, a senior software developer currently 
                working at Candescent, where I focus on building robust, extendable software
                using clean coding practices. This site is where I share my work, ideas on 
                software development, and how to get in touch.
                Outside of software, I spend my time camping, biking, and reading.
                <br />
                <br />
                Lately, I’ve been deep in a React Native project, building a 
                cross-platform mobile app and enjoying the challenge of turning ideas into something tangible.
                </p>
                <div className="flex flex-wrap gap-3 pt-1 text-xs sm:text-sm">
                    <a
                    href="https://www.linkedin.com/in/gdiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-sky-600/60 bg-sky-900/50 px-3 py-1.5 text-sky-200 shadow-sm transition hover:border-sky-500 hover:bg-sky-800/60 hover:text-sky-100"
                    >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    LinkedIn
                    </a>
                    <a
                    href="mailto:gio@gdiamante.com"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-600/60 bg-emerald-900/50 px-3 py-1.5 text-emerald-200 shadow-sm transition hover:border-emerald-500 hover:bg-emerald-800/60 hover:text-emerald-100"
                    >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Email
                    </a>
                    <a
                    href="https://github.com/gdiamante"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600/60 bg-slate-700/50 px-3 py-1.5 text-slate-200 shadow-sm transition hover:border-slate-500 hover:bg-slate-600 hover:text-white"
                    >
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    GitHub
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}
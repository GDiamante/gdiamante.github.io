
export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm sm:px-6 sm:py-7 lg:px-8"
            >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                <span className="h-px w-6 bg-sky-500/70" />
                <span id="about-heading">About</span>
            </div>
            <div className=" flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="shrink-0">
                <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:h-55 sm:w-55">
                    {/* Replace /profile.jpg with your own image in /public */}
                    <img
                    src="/profile.jpg"
                    alt="Portrait of Gio Diamante"
                    className="h-full w-full object-cover"
                    />
                </div>
                </div>
                <div className="space-y-3">
                <p className="text-sm leading-relaxed text-slate-800 sm:text-base">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-sky-50/70 px-3 py-1.5 text-sky-800 shadow-sm shadow-sky-50/80 transition hover:border-sky-300 hover:bg-white hover:text-sky-900"
                    >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    LinkedIn
                    </a>
                    <a
                    href="mailto:gio@gdiamante.com"
                    className="inline-flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50/70 px-3 py-1.5 text-emerald-800 shadow-sm shadow-emerald-50/80 transition hover:border-emerald-300 hover:bg-white hover:text-emerald-900"
                    >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Email
                    </a>
                    <a
                    href="https://github.com/gdiamante"
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
    );
}
import About from "./_components/About";
import Blog from "./_components/Blog";
import Resume from "./_components/Resume";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <header className="mb-10 flex flex-col gap-6 border-b border-slate-600/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Software Engineer
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Gio Diamante
            </h1>
          </div>
          <nav className="text-sm text-slate-300">
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              <li>
                <a
                  href="#about"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600 bg-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm backdrop-blur transition hover:border-sky-500 hover:bg-slate-600 hover:text-white sm:text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600 bg-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm backdrop-blur transition hover:border-fuchsia-500 hover:bg-slate-600 hover:text-white sm:text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600 bg-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm backdrop-blur transition hover:border-amber-500 hover:bg-slate-600 hover:text-white sm:text-sm"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-600 bg-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm backdrop-blur transition hover:border-emerald-500 hover:bg-slate-600 hover:text-white sm:text-sm"
                >
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex flex-1 flex-col gap-10 sm:gap-12">
          <About />
          <Resume />
          <Blog />
          <Projects />
        </main>
      </div>
    </div>
  );
}

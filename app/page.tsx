import About from "./_components/About";
import Blog from "./_components/Blog";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <header className="mb-10 flex flex-col gap-6 border-b border-slate-600/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
              Software Engineer
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Gio Diamante
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="/GioDiamanteResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-semibold text-slate-900 shadow-md shadow-amber-900/40 transition hover:from-amber-400 hover:to-amber-500 sm:px-5 sm:text-sm"
            >
              View Resume
            </a>
          </div>
        </header>

        <main className="flex flex-1 flex-col gap-10 sm:gap-12">
          <About />
          <Blog />
          <Projects />
        </main>
      </div>
    </div>
  );
}

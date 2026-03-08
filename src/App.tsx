export default function App() {
    <main className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07101b] to-transparent opacity-50" />

      {!entered ? (
        <button
          onClick={handleEnter}
          className="relative z-10 flex flex-col items-center gap-6 bg-transparent border-0 p-0 cursor-pointer"
          aria-label="Tap to enter Clique"
        >
          <div className="logo-shell">
            <div className="bubble-outline">
              <div className="clique-word text-[3.4rem] leading-[0.82] sm:text-[4.2rem] tracking-[0.03em] text-white">
                clique
              </div>
              <div className="text-[0.72rem] sm:text-[0.84rem] font-semibold uppercase tracking-[0.28em] text-white/78">
                social community
              </div>
              <div className="text-[0.95rem] sm:text-[1.1rem] font-extrabold leading-none text-white">
                Antwerp
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="hint-pill text-xs sm:text-sm font-medium tracking-[0.28em] uppercase">
              tap to enter
            </span>
            <p className="max-w-xs text-center text-white/48 text-sm leading-relaxed px-3">
              a simple entrance to something worth finding
            </p>
          </div>
        </button>
      ) : (
        <section className="relative z-10 flex flex-col items-center gap-6 w-full">
          <div className="logo-shell scale-[0.84] sm:scale-[0.9] origin-center">
            <div className="bubble-outline">
              <div className="clique-word text-[3rem] leading-[0.82] sm:text-[3.8rem] tracking-[0.03em] text-white">
                clique
              </div>
              <div className="text-[0.68rem] sm:text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-white/78">
                social community
              </div>
              <div className="text-[0.92rem] sm:text-[1.02rem] font-extrabold leading-none text-white">
                Antwerp
              </div>
            </div>
          </div>

          <div className="min-h-[74px] flex items-center justify-center text-center px-4">
            {showQuote && (
              <p className="clique-word text-white text-2xl sm:text-3xl leading-tight animate-[fadeUp_.4s_ease]">
                not everyone finds the clique
              </p>
            )}
          </div>

          {showForm && (
            <div className="form-panel">
              <div className="px-2 pt-1 pb-4 text-center">
                <p className="clique-word text-[1.8rem] sm:text-[2rem] leading-none text-white">
                  enter your details
                </p>
                <p className="mt-3 text-sm text-white/56 max-w-sm mx-auto">
                  leave your info and be first to hear about upcoming drops, events and invite-only moments.
                </p>
              </div>

              <form className="space-y-3">
                <input className="field" type="text" placeholder="your name" />
                <input className="field" type="email" placeholder="your email" />
                <input className="field" type="text" placeholder="instagram @optional" />
                <button className="cta clique-word text-[1.05rem] tracking-[0.04em]" type="submit">
                  join the clique
                </button>
              </form>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

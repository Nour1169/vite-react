export default function App() {
  return (
    <div className="min-h-screen bg-[#05070b] text-white overflow-hidden relative font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #05070b;
          --bg-soft: #0b1118;
          --line: rgba(255,255,255,0.09);
          --line-strong: rgba(255,255,255,0.16);
          --text-soft: rgba(255,255,255,0.66);
          --glow: 0 0 40px rgba(255,255,255,0.08);
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: var(--bg);
          font-family: 'Inter', sans-serif;
        }

        .clique-word {
          font-family: 'Baloo 2', system-ui, sans-serif;
          font-weight: 800;
          letter-spacing: 0.02em;
          text-transform: lowercase;
        }

        .hero-bg::before,
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: auto;
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
        }

        .hero-bg::before {
          width: 320px;
          height: 320px;
          background: rgba(255,255,255,0.05);
          top: 10%;
          left: 50%;
          transform: translateX(-50%);
        }

        .hero-bg::after {
          width: 260px;
          height: 260px;
          background: rgba(255,255,255,0.03);
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
        }

        .logo-shell {
          position: relative;
          width: min(82vw, 360px);
          aspect-ratio: 1 / 1;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 35%, #0b0b0d 0%, #030303 58%, #000 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.55), var(--glow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease;
        }

        .logo-shell:hover {
          transform: translateY(-4px) scale(1.01);
          border-color: rgba(255,255,255,0.14);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 45px 90px rgba(0,0,0,0.6), 0 0 60px rgba(255,255,255,0.09);
        }

        .logo-shell::before {
          content: '';
          position: absolute;
          inset: 16px;
          border-radius: 999px;
          border: 1px dashed rgba(255,255,255,0.06);
        }

        .bubble-outline {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.1rem;
          min-width: 76%;
          padding: 1.05rem 1.6rem 0.85rem;
          background: #000;
          border: 4px solid #fff;
          border-radius: 999px;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.08);
          position: relative;
          text-align: center;
        }

        .bubble-outline::after {
          content: '';
          position: absolute;
          bottom: -16px;
          left: 20%;
          width: 52px;
          height: 24px;
          background: #000;
          border-left: 4px solid #fff;
          border-right: 4px solid #fff;
          border-bottom: 4px solid #fff;
          border-radius: 0 0 28px 28px;
          transform: skewX(-30deg);
        }

        .form-panel {
          width: min(92vw, 440px);
          border-radius: 28px;
          border: 1px solid var(--line-strong);
          background: linear-gradient(180deg, rgba(14,18,25,0.92) 0%, rgba(7,9,13,0.96) 100%);
          box-shadow: 0 30px 80px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.05);
          padding: 1.2rem;
          animation: fadeUp .45s ease;
        }

        .field {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
          color: white;
          padding: 0.95rem 1rem;
          outline: none;
          transition: border-color .25s ease, background .25s ease, transform .25s ease;
        }

        .field::placeholder { color: rgba(255,255,255,0.4); }

        .field:focus {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.05);
          transform: translateY(-1px);
        }

        .cta {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: white;
          color: black;
          font-weight: 700;
          padding: 0.98rem 1.2rem;
          transition: transform .25s ease, box-shadow .25s ease, opacity .25s ease;
          box-shadow: 0 12px 28px rgba(255,255,255,0.12);
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(255,255,255,0.16);
        }

        .hint-pill {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.035);
          border-radius: 999px;
          padding: 0.45rem 0.8rem;
          color: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px) scale(0.985); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 640px) {
          .bubble-outline {
            min-width: 84%;
            padding: 0.95rem 1.2rem 0.8rem;
            border-width: 3px;
          }

          .bubble-outline::after {
            width: 44px;
            height: 20px;
            border-left-width: 3px;
            border-right-width: 3px;
            border-bottom-width: 3px;
            bottom: -13px;
          }
        }
      `}</style>

      <LandingExperience />
    </div>
  );
}

function LandingExperience() {
  const [entered, setEntered] = React.useState(false);
  const [showQuote, setShowQuote] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);

  React.useEffect(() => {
    let quoteTimer;
    let formTimer;

    if (entered) {
      quoteTimer = setTimeout(() => setShowQuote(true), 120);
      formTimer = setTimeout(() => setShowForm(true), 850);
    }

    return () => {
      clearTimeout(quoteTimer);
      clearTimeout(formTimer);
    };
  }, [entered]);

  const handleEnter = () => {
    if (!entered) setEntered(true);
  };

  return (
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

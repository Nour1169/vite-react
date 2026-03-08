import React, { useEffect, useState } from "react";

export default function App() {
  const [entered, setEntered] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let quoteTimer: number | undefined;
    let formTimer: number | undefined;

    if (entered) {
      quoteTimer = window.setTimeout(() => setShowQuote(true), 120);
      formTimer = window.setTimeout(() => setShowForm(true), 850);
    } else {
      setShowQuote(false);
      setShowForm(false);
    }

    return () => {
      if (quoteTimer) window.clearTimeout(quoteTimer);
      if (formTimer) window.clearTimeout(formTimer);
    };
  }, [entered]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          min-height: 100%;
          width: 100%;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #05070b;
          color: #ffffff;
        }

        .page {
          min-height: 100vh;
          width: 100%;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 18%, transparent 42%),
            linear-gradient(180deg, #07101b 0%, #05070b 18%, #05070b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          position: relative;
          overflow: hidden;
        }

        .page::before,
        .page::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 999px;
          filter: blur(70px);
          pointer-events: none;
        }

        .page::before {
          top: 8%;
          width: 340px;
          height: 340px;
          background: rgba(255,255,255,0.05);
        }

        .page::after {
          bottom: 8%;
          width: 280px;
          height: 280px;
          background: rgba(255,255,255,0.025);
        }

        .center-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .tap-button {
          appearance: none;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
        }

        .logo-shell {
          width: min(82vw, 360px);
          aspect-ratio: 1 / 1;
          border-radius: 999px;
          background: radial-gradient(circle at 50% 35%, #0b0b0d 0%, #030303 58%, #000 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.55), 0 0 40px rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: transform .3s ease, box-shadow .3s ease;
        }

        .logo-shell.small {
          transform: scale(0.9);
        }

        .tap-button:hover .logo-shell {
          transform: translateY(-3px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 46px 90px rgba(0,0,0,0.6), 0 0 54px rgba(255,255,255,0.08);
        }

        .logo-shell::before {
          content: '';
          position: absolute;
          inset: 16px;
          border-radius: 999px;
          border: 1px dashed rgba(255,255,255,0.06);
        }

        .bubble-outline {
          min-width: 76%;
          background: #000;
          border: 4px solid #fff;
          border-radius: 999px;
          padding: 18px 24px 14px;
          text-align: center;
          position: relative;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.08);
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

        .clique-word {
          font-family: 'Baloo 2', cursive;
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 0.82;
          color: #fff;
        }

        .logo-main {
          font-size: clamp(3.2rem, 10vw, 4.2rem);
          text-transform: lowercase;
        }

        .logo-sub {
          margin-top: 8px;
          font-size: clamp(0.72rem, 2vw, 0.84rem);
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.78);
        }

        .logo-city {
          margin-top: 2px;
          font-size: clamp(0.95rem, 2.8vw, 1.1rem);
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }

        .hint-pill {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          border-radius: 999px;
          padding: 10px 16px;
          color: rgba(255,255,255,0.7);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
        }

        .hint-text {
          max-width: 280px;
          text-align: center;
          color: rgba(255,255,255,0.48);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .quote-wrap {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 12px;
        }

        .quote {
          font-family: 'Baloo 2', cursive;
          font-size: clamp(2rem, 6vw, 3rem);
          font-weight: 700;
          line-height: 1.05;
          color: #fff;
          animation: fadeUp .4s ease;
          margin: 0;
        }

        .form-panel {
          width: min(92vw, 440px);
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.16);
          background: linear-gradient(180deg, rgba(14,18,25,0.92) 0%, rgba(7,9,13,0.96) 100%);
          box-shadow: 0 30px 80px rgba(0,0,0,0.52), inset 0 1px 0 rgba(255,255,255,0.05);
          padding: 20px;
          animation: fadeUp .45s ease;
        }

        .form-title {
          font-family: 'Baloo 2', cursive;
          font-size: clamp(1.85rem, 5vw, 2.1rem);
          line-height: 1;
          margin: 0;
          color: #fff;
          text-align: center;
        }

        .form-copy {
          margin: 14px auto 0;
          max-width: 340px;
          text-align: center;
          color: rgba(255,255,255,0.56);
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .form {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #fff;
          padding: 15px 16px;
          outline: none;
          font-size: 0.98rem;
          font-family: 'Inter', sans-serif;
          transition: border-color .25s ease, background .25s ease, transform .25s ease;
        }

        .field::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .field:focus {
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.05);
          transform: translateY(-1px);
        }

        .cta {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: #fff;
          color: #000;
          font-family: 'Baloo 2', cursive;
          font-size: 1.12rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          padding: 15px 20px;
          cursor: pointer;
          transition: transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 12px 28px rgba(255,255,255,0.12);
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(255,255,255,0.16);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 640px) {
          .bubble-outline {
            min-width: 84%;
            padding: 16px 18px 13px;
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

          .logo-shell.small {
            transform: scale(0.84);
          }
        }
      `}</style>

      <main className="page">
        <div className="center-wrap">
          {!entered ? (
            <button
              className="tap-button"
              onClick={() => setEntered(true)}
              aria-label="Tap to enter Clique"
              type="button"
            >
              <div className="logo-shell">
                <div className="bubble-outline">
                  <div className="clique-word logo-main">clique</div>
                  <div className="logo-sub">social community</div>
                  <div className="logo-city">Antwerp</div>
                </div>
              </div>

              <div className="hint-pill">tap to enter</div>
              <p className="hint-text">a simple entrance to something worth finding</p>
            </button>
          ) : (
            <section className="center-wrap">
              <div className="logo-shell small">
                <div className="bubble-outline">
                  <div className="clique-word logo-main">clique</div>
                  <div className="logo-sub">social community</div>
                  <div className="logo-city">Antwerp</div>
                </div>
              </div>

              <div className="quote-wrap">
                {showQuote && <p className="quote">not everyone finds the clique</p>}
              </div>

              {showForm && (
                <div className="form-panel">
                  <h2 className="form-title">enter your details</h2>
                  <p className="form-copy">
                    leave your info and be first to hear about upcoming drops, events and invite-only moments.
                  </p>

                  <form className="form">
                    <input className="field" type="text" placeholder="your name" />
                    <input className="field" type="email" placeholder="your email" />
                    <input className="field" type="text" placeholder="instagram @optional" />
                    <button className="cta" type="submit">join the clique</button>
                  </form>
                </div>
              )}
            </section>
          )}
        </div>
      </main>
    </>
  );
}

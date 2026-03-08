import { useEffect, useState } from "react";

export default function App() {
  const [stage, setStage] = useState<"hidden" | "quote" | "form">("hidden");

  useEffect(() => {
    let timer: number | undefined;

    if (stage === "quote") {
      timer = window.setTimeout(() => {
        setStage("form");
      }, 1100);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [stage]);

  const handleEnter = () => {
    if (stage === "hidden") {
      setStage("quote");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          background: #040507;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
        }

        .page {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.035) 0%, transparent 28%),
            linear-gradient(180deg, #05070b 0%, #020304 100%);
        }

        .page::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 42%, rgba(255,255,255,0.04), transparent 18%),
            radial-gradient(circle at 50% 60%, rgba(255,255,255,0.02), transparent 26%);
          pointer-events: none;
        }

        .wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 24px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hidden-stage {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .secret-button {
          appearance: none;
          border: 0;
          background: transparent;
          padding: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          transition: transform .25s ease;
        }

        .secret-button:hover {
          transform: scale(1.02);
        }

          .secret-mark {
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: rgba(255,255,255,0.92);
  box-shadow:
    0 0 14px rgba(255,255,255,0.28),
    0 0 34px rgba(255,255,255,0.12);
  transition: transform .25s ease, opacity .25s ease;
  animation: secretPulse 3.2s ease-in-out infinite;
}

        .secret-button:hover .secret-mark {
          transform: scale(1.15);
        }

        .secret-text {
          font-family: 'Baloo 2', cursive;
          font-size: 1rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
        }

        .reveal-stage {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
        }

        .card {
          width: min(92vw, 430px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          animation: fadeUp .45s ease;
        }

        .mini-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 22px 10px;
          border: 3px solid #fff;
          border-radius: 999px;
          background: #000;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.08);
          position: relative;
        }

        .mini-logo::after {
          content: "";
          position: absolute;
          left: 20%;
          bottom: -12px;
          width: 38px;
          height: 18px;
          background: #000;
          border-left: 3px solid #fff;
          border-right: 3px solid #fff;
          border-bottom: 3px solid #fff;
          border-radius: 0 0 20px 20px;
          transform: skewX(-30deg);
        }

        .logo-word {
          font-family: 'Baloo 2', cursive;
          font-size: clamp(2.5rem, 9vw, 3.4rem);
          line-height: 0.82;
          font-weight: 800;
          color: #fff;
          text-transform: lowercase;
          letter-spacing: 0.02em;
        }

        .quote-wrap {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .quote {
          margin: 0;
          font-family: 'Baloo 2', cursive;
          font-size: clamp(1.8rem, 6vw, 2.5rem);
          line-height: 1.05;
          color: #fff;
          animation: fadeUp .4s ease;
        }

        .form-panel {
          width: 100%;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.14);
          background: linear-gradient(180deg, rgba(12,14,18,0.94) 0%, rgba(5,6,9,0.98) 100%);
          box-shadow:
            0 24px 70px rgba(0,0,0,0.52),
            inset 0 1px 0 rgba(255,255,255,0.04);
          padding: 22px;
          animation: fadeUp .45s ease;
        }

        .form-title {
          margin: 0;
          text-align: center;
          font-family: 'Baloo 2', cursive;
          font-size: clamp(1.6rem, 5vw, 2rem);
          line-height: 1;
          color: #fff;
        }

        .form-copy {
          margin: 12px auto 0;
          max-width: 320px;
          text-align: center;
          font-size: 0.95rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.56);
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
          background: rgba(255,255,255,0.025);
          color: #fff;
          padding: 15px 16px;
          outline: none;
          font-size: 0.98rem;
          font-family: 'Inter', sans-serif;
          transition: border-color .25s ease, background .25s ease, transform .25s ease;
        }

        .field::placeholder {
          color: rgba(255,255,255,0.34);
        }

        .field:focus {
          border-color: rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.045);
          transform: translateY(-1px);
        }

        .cta {
          width: 100%;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 15px 20px;
          cursor: pointer;
          font-family: 'Baloo 2', cursive;
          font-size: 1.08rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: transform .25s ease, box-shadow .25s ease;
          box-shadow: 0 12px 28px rgba(255,255,255,0.1);
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(255,255,255,0.14);
        }

        .footer-note {
          margin-top: 2px;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.34);
          text-align: center;
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
          .secret-text {
            font-size: 0.92rem;
            letter-spacing: 0.12em;
          }

          .form-panel {
            padding: 18px;
          }
        }
      `}</style>

      <main className="page">
        <div className="wrap">
          {stage === "hidden" && (
            <section className="hidden-stage">
              <button
                type="button"
                className="secret-button"
                onClick={handleEnter}
                aria-label="Enter Clique"
              >
                <div className="secret-mark" />
                <div className="secret-text">tap to enter</div>
              </button>
            </section>
          )}

          {stage !== "hidden" && (
            <section className="reveal-stage">
              <div className="card">
                <div className="mini-logo">
                  <div className="logo-word">clique</div>
                </div>

                <div className="quote-wrap">
                  {stage === "quote" && (
                    <p className="quote">you found the clique</p>
                  )}
                  {stage === "form" && (
                    <p className="quote">not everyone finds the clique</p>
                  )}
                </div>

                {stage === "form" && (
                  <div className="form-panel">
                    <h2 className="form-title">enter your details</h2>
                    <p className="form-copy">
                      leave your info and get first access to upcoming events, drops and invite-only moments.
                    </p>

                    <form className="form">
                      <input className="field" type="text" placeholder="your name" />
                      <input className="field" type="email" placeholder="your email" />
                      <input className="field" type="text" placeholder="instagram @optional" />
                      <button className="cta" type="submit">
                        join the clique
                      </button>
                    </form>
                  </div>
                )}

                {stage === "form" && (
                  <div className="footer-note">Antwerp social community</div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}



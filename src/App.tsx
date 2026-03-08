import { useEffect, useState, type FormEvent } from "react";

export default function App() {
  const [stage, setStage] = useState<"hidden" | "quote" | "form">("hidden");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "a12099ca-d298-46b6-84cb-4a3f52aea946"
    );

    formData.append("subject", "Nieuwe aanvraag via Clique Antwerp");
    formData.append("from_name", "Clique Antwerp");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setSubmitError("something went wrong");
      }
    } catch {
      setSubmitError("something went wrong");
    } finally {
      setIsSubmitting(false);
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
        }

        .secret-button {
          border: 0;
          background: transparent;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .secret-mark {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.92);
          animation: secretPulse 3.2s ease-in-out infinite;
        }

        .secret-text {
          font-family: 'Baloo 2', cursive;
          font-size: 1rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          text-align: center;
        }

        .reveal-stage {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          width: min(92vw, 430px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .logo-word {
          font-family: 'Baloo 2', cursive;
          font-size: 3rem;
        }

        .quote {
          font-family: 'Baloo 2', cursive;
          font-size: 2rem;
          text-align: center;
        }

        .form-panel {
          width: 100%;
          padding: 22px;
        }

        .form {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .field {
          padding: 14px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color: #fff;
        }

        .cta {
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 15px;
          cursor: pointer;
        }

        .success-message {
          text-align: center;
          margin-top: 10px;
          color: rgba(255,255,255,0.8);
        }

        .error-message {
          text-align: center;
          margin-top: 10px;
          color: rgba(255,255,255,0.6);
        }

        @keyframes secretPulse {
          0% {opacity:0.8}
          50% {opacity:1}
          100% {opacity:0.8}
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
              >
                <div className="secret-mark" />
                <div className="secret-text">
                  you're closer than you think
                </div>
              </button>
            </section>
          )}

          {stage !== "hidden" && (
            <section className="reveal-stage">
              <div className="card">

                <div className="logo-word">clique</div>

                <div>
                  {stage === "quote" && (
                    <p className="quote">so… you found it</p>
                  )}

                  {stage === "form" && (
                    <p className="quote">
                      not everyone finds the clique
                    </p>
                  )}
                </div>

                {stage === "form" && (
                  <div className="form-panel">
                    <form className="form" onSubmit={handleSubmit}>

                      <input
                        className="field"
                        name="name"
                        placeholder="your name"
                        required
                      />

                      <input
                        className="field"
                        type="email"
                        name="email"
                        placeholder="your email"
                        required
                      />

                      <input
                        className="field"
                        name="instagram"
                        placeholder="instagram @optional"
                      />

                      <input
                        type="checkbox"
                        name="botcheck"
                        style={{ display: "none" }}
                      />

                      <button
                        className="cta"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "sending..." : "join the clique"}
                      </button>

                      {isSubmitted && (
                        <p className="success-message">
                          see you soon
                        </p>
                      )}

                      {submitError && (
                        <p className="error-message">
                          something went wrong
                        </p>
                      )}

                    </form>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

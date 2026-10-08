
import { useEffect, useState, type FormEvent } from "react";
import logo from "./assets/pff.png";

type Stage = "hidden" | "quote" | "events" | "form";
type EventId = "game-night" | "nike-run";

const events = [
  {
    id: "game-night",
    date: "16 OCTOBER 2026",
    title: "GAME NIGHT",
    location: "NŌA · ANTWERP",
    isOpen: true,
  },
  {
    id: "nike-run",
    date: "17 OCTOBER 2026",
    title: "SOCIAL RUN × NIKE",
    location: "ANTWERP",
    isOpen: false,
  },
] as const;

export default function App() {
  const [stage, setStage] = useState<Stage>("hidden");
  const [selectedEvent, setSelectedEvent] =
    useState<EventId | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const activeEvent = events.find(
    (event) => event.id === selectedEvent
  );

  useEffect(() => {
    if (stage !== "quote") return;

    const timer = window.setTimeout(() => {
      setStage("events");
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [stage]);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!activeEvent || !activeEvent.isOpen || isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "a12099ca-d298-46b6-84cb-4a3f52aea946"
    );
    formData.append(
      "subject",
      `New Clique signup - ${activeEvent.title}`
    );
    formData.append("from_name", "Clique Website");
    formData.append(
      "replyto",
      String(formData.get("email") || "")
    );
    formData.append("event", activeEvent.title);
    formData.append("event_date", activeEvent.date);

    try {
      const res = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(
          data.message ||
          "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setError(
        "Network error. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const restart = () => {
    setIsSubmitted(false);
    setSelectedEvent(null);
    setStage("hidden");
    setError("");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Inter:wght@400;600&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #000;
          color: #fff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .page {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px 20px;
        }

        .secret-button {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: white;
        }

        .secret-mark {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: white;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: .5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .secret-text {
          opacity: .7;
          font-family: 'Baloo 2', cursive;
          letter-spacing: 2px;
        }

        .card {
          width: 100%;
          max-width: 380px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          animation: fadeIn .4s ease;
        }

        .logo-image {
          width: 180px;
          height: auto;
          object-fit: contain;
          transition: .3s;
        }

        .logo-image:hover {
          transform: scale(1.03);
        }

        .quote {
          font-family: 'Baloo 2', cursive;
          font-size: 28px;
          line-height: 1.1;
          margin: 0;
        }

        .subtitle {
          margin: -8px 0 5px;
          opacity: .5;
          font-size: 13px;
          letter-spacing: 1px;
          line-height: 1.6;
        }

        /* EVENT SELECTION */

        .event-list {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .event-option {
          width: 100%;
          border: 1px solid rgba(255,255,255,.17);
          border-radius: 17px;
          padding: 20px;
          background: rgba(255,255,255,.025);
          color: white;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          transition: .25s ease;
          font-family: 'Inter', sans-serif;
        }

        .event-option:hover {
          border-color: rgba(255,255,255,.6);
          background: rgba(255,255,255,.06);
        }

        .event-option:disabled {
          opacity: .38;
          cursor: not-allowed;
          border-color: rgba(255,255,255,.12);
        }

        .event-option:disabled:hover {
          background: rgba(255,255,255,.025);
          border-color: rgba(255,255,255,.12);
        }

        .coming-soon {
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 600;
          color: #fff;
          margin-top: 4px;
        }

        .event-option.selected {
          border-color: white;
          background: rgba(255,255,255,.09);
        }

        .event-info {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .event-date {
          font-size: 11px;
          opacity: .55;
          letter-spacing: 1.5px;
        }

        .event-title {
          font-family: 'Baloo 2', cursive;
          font-size: 22px;
          line-height: 1.1;
          font-weight: 800;
        }

        .event-location {
          font-size: 11px;
          opacity: .5;
          letter-spacing: 1px;
        }

        .event-radio {
          width: 21px;
          height: 21px;
          min-width: 21px;
          border: 1px solid #666;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .event-option.selected .event-radio {
          border-color: white;
        }

        .event-option.selected .event-radio::after {
          content: "";
          width: 11px;
          height: 11px;
          background: white;
          border-radius: 50%;
        }

        .selected-event-label {
          margin: -8px 0 0;
          font-size: 12px;
          opacity: .65;
          letter-spacing: 1px;
          text-transform: uppercase;
          line-height: 1.6;
        }

        /* FORM */

        .field-group {
          width: 100%;
          text-align: left;
          margin-top: 10px;
        }

        .field-label {
          display: block;
          margin-bottom: 8px;
          font-size: 13px;
          font-weight: 600;
          opacity: .75;
          padding-left: 4px;
          letter-spacing: .3px;
        }

        .field {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.15);
          background: rgba(255,255,255,.03);
          color: white;
          outline: none;
          font-size: 15px;
          transition: .25s;
          font-family: 'Inter', sans-serif;
        }

        .field:focus {
          border-color: rgba(255,255,255,.35);
          background: rgba(255,255,255,.05);
        }

        .field::placeholder {
          color: rgba(255,255,255,.45);
        }

        .birthdate-wrapper {
          position: relative;
          width: 100%;
        }

        input[type="date"] {
          color-scheme: dark;
        }

        .cta {
          width: 100%;
          padding: 14px;
          border-radius: 999px;
          background: white;
          color: black;
          margin-top: 18px;
          cursor: pointer;
          transition: .3s;
          border: none;
          font-weight: 600;
          font-size: 15px;
          font-family: 'Inter', sans-serif;
        }

        .cta:hover:not(:disabled) {
          transform: translateY(-2px);
        }

        .cta:disabled {
          opacity: .35;
          cursor: not-allowed;
        }

        .back-button {
          background: none;
          border: none;
          color: rgba(255,255,255,.5);
          cursor: pointer;
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          padding: 8px;
        }

        .back-button:hover {
          color: white;
        }

        .error-message {
          font-size: 13px;
          color: #ff8c8c;
          line-height: 1.5;
        }

        /* SUCCESS POPUP */

        .success-popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.82);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          padding: 20px;
          animation: fadeIn .3s ease;
        }

        .success-popup {
          width: 100%;
          max-width: 420px;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 28px;
          padding: 42px 30px;
          text-align: center;
          box-shadow: 0 0 60px rgba(255,255,255,.06);
          animation: popupIn .35s ease;
        }

        .success-icon {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          font-weight: 800;
          margin: 0 auto 24px;
        }

        .success-popup h2 {
          font-family: 'Baloo 2', cursive;
          font-size: 34px;
          line-height: 1.05;
          margin: 0 0 18px;
        }

        .success-popup p {
          opacity: .75;
          line-height: 1.7;
          font-size: 15px;
          margin: 0;
        }

        .popup-button {
          margin-top: 28px;
          width: 100%;
          padding: 14px;
          border: none;
          border-radius: 999px;
          background: white;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: .3s;
          font-size: 15px;
        }

        .popup-button:hover {
          transform: translateY(-2px);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popupIn {
          from {
            opacity: 0;
            transform: scale(.94) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <div className="page">

        {stage === "hidden" && (
          <button
            type="button"
            className="secret-button"
            onClick={() => setStage("quote")}
          >
            <div className="secret-mark" />
            <div className="secret-text">
              you're one clique away
            </div>
          </button>
        )}

        {stage !== "hidden" && (
          <div className="card">

            <img
              src={logo}
              className="logo-image"
              alt="Clique Antwerp"
            />

            {stage === "quote" && (
              <p className="quote">
                so... you found us
              </p>
            )}

            {stage === "events" && (
              <>
                <p className="quote">
                  choose your experience.
                </p>

                <p className="subtitle">
                  two dates. two experiences.
                  <br />
                  one clique.
                </p>

                <div className="event-list">
                  {events.map((event) => (
                    <button
                      type="button"
                      key={event.id}
                      disabled={!event.isOpen}
                      aria-pressed={
                        selectedEvent === event.id
                      }
                      className={
                        "event-option " +
                        (selectedEvent === event.id
                          ? "selected"
                          : "")
                      }
                      onClick={() =>
                        event.isOpen && setSelectedEvent(event.id)
                      }
                    >
                      <div className="event-info">
                        <span className="event-date">
                          {event.date}
                        </span>

                        <span className="event-title">
                          {event.title}
                        </span>

                        <span className="event-location">
                          {event.location}
                        </span>
                        {!event.isOpen && (
                          <span className="coming-soon">COMING SOON</span>
                        )}
                      </div>

                      {event.isOpen ? (
                        <span className="event-radio" />
                      ) : (
                        <span aria-label="Registrations not yet open" style={{fontSize: "21px"}}>🔒</span>
                      )}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="cta"
                  disabled={!activeEvent?.isOpen}
                  onClick={() => setStage("form")}
                >
                  continue →
                </button>
              </>
            )}

            {stage === "form" && activeEvent && (
              <>
                <p className="quote">
                  almost in.
                </p>

                <p className="selected-event-label">
                  {activeEvent.title}
                  <br />
                  {activeEvent.date}
                </p>

                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%" }}
                >
                  <div className="field-group">
                    <label
                      className="field-label"
                      htmlFor="name"
                    >
                      YOUR NAME
                    </label>

                    <input
                      id="name"
                      name="name"
                      className="field"
                      placeholder="enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label
                      className="field-label"
                      htmlFor="email"
                    >
                      YOUR EMAIL
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="field"
                      placeholder="enter your email"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="field-group">
                    <label
                      className="field-label"
                      htmlFor="birthdate"
                    >
                      YOUR DATE OF BIRTH
                    </label>

                    <div className="birthdate-wrapper">
                      <input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        className="field birthdate-field"
                        autoComplete="bday"
                        required
                      />
                    </div>
                  </div>

                  <div className="field-group">
                    <label
                      className="field-label"
                      htmlFor="instagram"
                    >
                      YOUR INSTAGRAM
                    </label>

                    <input
                      id="instagram"
                      name="instagram"
                      className="field"
                      placeholder="@yourusername"
                      required
                    />
                  </div>

                  {error && (
                    <p
                      className="error-message"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="cta"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "sending..."
                      : "join the clique"}
                  </button>
                </form>

                <button
                  type="button"
                  className="back-button"
                  onClick={() => {
                    setError("");
                    setStage("events");
                  }}
                >
                  ← choose another event
                </button>
              </>
            )}

          </div>
        )}

        {isSubmitted && (
          <div
            className="success-popup-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
          >
            <div className="success-popup">

              <div className="success-icon">
                ✓
              </div>

              <h2 id="success-title">
                you're on the list.
              </h2>

              <p>
                your registration for
                <br />
                <strong>{activeEvent?.title}</strong>
                <br />
                has been received successfully.
                <br />
                <br />
                we'll be in touch soon.
                <br />
                keep an eye on your inbox.
              </p>

              <button
                type="button"
                className="popup-button"
                onClick={restart}
              >
                continue
              </button>

            </div>
          </div>
        )}

      </div>
    </>
  );
}

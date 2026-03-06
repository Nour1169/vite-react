export default function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          background: #f2eee8;
          color: #111111;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .page {
          min-height: 100vh;
          background: #f2eee8;
        }

        .container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 0;
        }

        .logo {
          font-size: 30px;
          letter-spacing: 0.32em;
          font-weight: 600;
        }

        .nav-button,
        .primary-button,
        .secondary-button,
        .form-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 14px 26px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: 0.25s ease;
          cursor: pointer;
        }

        .nav-button,
        .secondary-button {
          border: 1px solid #111111;
          background: transparent;
        }

        .nav-button:hover,
        .secondary-button:hover {
          background: #111111;
          color: #ffffff;
        }

        .primary-button,
        .form-button {
          background: #111111;
          color: #ffffff;
          border: 1px solid #111111;
        }

        .primary-button:hover,
        .form-button:hover {
          opacity: 0.9;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          padding: 48px 0 96px;
          align-items: center;
        }

        .eyebrow {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 12px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(17, 17, 17, 0.6);
          margin-bottom: 20px;
        }

        .hero h1 {
          font-size: clamp(54px, 8vw, 92px);
          line-height: 0.95;
          margin: 0;
          font-weight: 500;
        }

        .hero p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 18px;
          line-height: 1.9;
          color: rgba(17, 17, 17, 0.78);
          max-width: 650px;
          margin: 28px 0 0;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 34px;
        }

        .hero-card-shell {
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 32px;
          padding: 22px;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.08);
        }

        .hero-card {
          background: #111111;
          color: #ffffff;
          border-radius: 26px;
          padding: 42px;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-card .eyebrow {
          color: rgba(255, 255, 255, 0.58);
          margin-bottom: 16px;
        }

        .hero-card h2 {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
          margin: 0;
          font-weight: 500;
        }

        .hero-card p {
          font-family: Arial, Helvetica, sans-serif;
          color: rgba(255, 255, 255, 0.76);
          font-size: 16px;
          line-height: 1.9;
          margin: 24px 0 0;
        }

        .section-light {
          background: rgba(255, 255, 255, 0.45);
          border-top: 1px solid rgba(17, 17, 17, 0.08);
          border-bottom: 1px solid rgba(17, 17, 17, 0.08);
        }

        .about {
          display: grid;
          grid-template-columns: 0.32fr 1fr;
          gap: 42px;
          padding: 96px 0;
        }

        .about h3,
        .coming h3,
        .invite h3 {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.08;
          font-weight: 500;
        }

        .about p,
        .coming p,
        .invite p,
        .card p {
          font-family: Arial, Helvetica, sans-serif;
          font-size: 17px;
          line-height: 1.9;
          color: rgba(17, 17, 17, 0.75);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          padding: 86px 0;
        }

        .card {
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .card h4 {
          margin: 0;
          font-size: 30px;
          font-weight: 500;
        }

        .section-dark {
          background: #111111;
          color: #ffffff;
          border-top: 1px solid rgba(17, 17, 17, 0.08);
          border-bottom: 1px solid rgba(17, 17, 17, 0.08);
        }

        .coming {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 42px;
          align-items: center;
          padding: 96px 0;
        }

        .section-dark .eyebrow {
          color: rgba(255, 255, 255, 0.56);
        }

        .section-dark p {
          color: rgba(255, 255, 255, 0.76);
        }

        .invite-wrap {
          padding: 96px 0;
        }

        .invite {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 44px;
          background: rgba(255, 255, 255, 0.62);
          border: 1px solid rgba(17, 17, 17, 0.08);
          border-radius: 34px;
          padding: 42px;
          box-shadow: 0 15px 60px rgba(0, 0, 0, 0.06);
        }

        .form {
          display: grid;
          gap: 14px;
        }

        .input,
        .textarea {
          width: 100%;
          border: 1px solid rgba(17, 17, 17, 0.12);
          background: #ffffff;
          border-radius: 18px;
          padding: 16px 18px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          color: #111111;
          outline: none;
        }

        .textarea {
          min-height: 140px;
          resize: vertical;
        }

        .input:focus,
        .textarea:focus {
          border-color: #111111;
        }

        .footer {
          padding: 18px 0 42px;
        }

        .footer-inner {
          border-top: 1px solid rgba(17, 17, 17, 0.08);
          padding-top: 22px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: rgba(17, 17, 17, 0.58);
        }

        @media (max-width: 900px) {
          .hero,
          .about,
          .cards,
          .coming,
          .invite {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 28px;
          }

          .hero-card {
            min-height: auto;
          }

          .footer-inner {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="page">
        <div className="container">
          <header className="header">
            <div className="logo">CLIQUE</div>
            <a className="nav-button" href="#invite">
              Request Invite
            </a>
          </header>

          <section className="hero">
            <div>
              <div className="eyebrow">Antwerp · Curated Community</div>
              <h1>Join the Clique.</h1>
              <p>
                A curated community bringing together ambitious young people in
                Antwerp through exclusive social events.
              </p>

              <div className="hero-buttons">
                <a className="primary-button" href="#invite">
                  Request an Invite
                </a>
                <a className="secondary-button" href="#about">
                  Discover More
                </a>
              </div>
            </div>

            <div className="hero-card-shell">
              <div className="hero-card">
                <div className="eyebrow">First Launch</div>
                <h2>Exclusive experiences designed to feel rare.</h2>
                <p>
                  From social runs to curated gatherings, every Clique event is
                  built around connection, atmosphere and a sense of belonging.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section id="about" className="section-light">
          <div className="container">
            <div className="about">
              <div className="eyebrow">About</div>
              <div>
                <h3>
                  Clique is not just an event. It is an atmosphere for people
                  who want to be part of something intentional.
                </h3>
                <p style={{ marginTop: "28px", maxWidth: "760px" }}>
                  Built in Antwerp, Clique connects ambitious young people
                  through curated social experiences in inspiring settings.
                  Every detail is designed to feel elevated, selective and
                  memorable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section className="cards">
            <div className="card">
              <h4>Curated</h4>
              <p>
                Every gathering is intentionally designed with the right people,
                setting and atmosphere.
              </p>
            </div>

            <div className="card">
              <h4>Exclusive</h4>
              <p>
                Not everyone gets access. Clique is built around invitation,
                scarcity and strong community value.
              </p>
            </div>

            <div className="card">
              <h4>Antwerp</h4>
              <p>
                Rooted in the city and made to become a recognizable name across
                social, lifestyle and cultural events.
              </p>
            </div>
          </section>
        </div>

        <section className="section-dark">
          <div className="container">
            <section className="coming">
              <div>
                <div className="eyebrow">Coming Soon</div>
                <h3>The first Clique event launches soon in Antwerp.</h3>
              </div>

              <div>
                <p>
                  A limited number of guests will be selected for our first
                  experience. Expect a social run through the city followed by a
                  relaxed gathering at a local café or food spot in Antwerp.
                  Register your interest and be the first to hear when
                  invitations open.
                </p>
              </div>
            </section>
          </div>
        </section>

        <div className="container invite-wrap">
          <section id="invite" className="invite">
            <div>
              <div className="eyebrow">Request Access</div>
              <h3>Enter your details and request an invite.</h3>
             <p style={{ marginTop: "24px", maxWidth: "560px" }}>
Request access to the next CLIQUE event. Limited spots available.
</p>
            </div>

            <form className="form">
              <input className="input" type="text" placeholder="Full name" />
              <input
                className="input"
                type="email"
                placeholder="Email address"
              />
              <input
                className="input"
                type="text"
                placeholder="Instagram handle"
              />
              <textarea
                className="textarea"
                placeholder="Why would you like to join Clique?"
              />
              <button className="form-button" type="button">
                Request Invite
              </button>
            </form>
          </section>
        </div>

        <div className="container footer">
          <div className="footer-inner">
            <div>CLIQUE — Antwerp community</div>
            <div>Join the Clique</div>
          </div>
        </div>
      </div>
    </>
  );
}

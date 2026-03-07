export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #050505;
          --text: #f7f7f7;
          --muted: rgba(255,255,255,0.72);
          --line: rgba(255,255,255,0.1);
          --soft: rgba(255,255,255,0.04);
          --cream: #f3efe9;
          --black: #000000;
          --white: #ffffff;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          background-image:
            radial-gradient(rgba(255,255,255,0.07) 0.8px, transparent 0.8px),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 12px 12px, 44px 44px, 44px 44px;
        }

        a { color: inherit; text-decoration: none; }
        .logo-font { font-family: 'Fredoka', sans-serif; }
        .body-font { font-family: 'Inter', sans-serif; }

        .site-container {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 24px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-badge {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 32px;
          color: rgba(255,255,255,0.75);
        }

        .nav a {
          transition: 0.2s ease;
        }

        .nav a:hover {
          color: white;
        }

        .pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 15px 28px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          transition: 0.2s ease;
        }

        .pill-btn:hover {
          transform: translateY(-2px);
        }

        .pill-btn-primary {
          background: white;
          color: black;
        }

        .pill-btn-outline {
          border: 1px solid white;
          color: white;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          padding: 6px 0 8px 0;
        }

        .eyebrow {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.72);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          margin-bottom: 18px;
        }

        .hero-title {
          font-size: clamp(3.6rem, 8vw, 6.8rem);
          line-height: 0.9;
          letter-spacing: -0.03em;
          margin: 0;
        }

        .hero-copy {
          margin-top: 24px;
          max-width: 560px;
          font-size: 1.15rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.76);
        }

        .hero-actions {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hero-card {
          background: var(--cream);
          border-radius: 34px;
          padding: 20px;
          box-shadow: 0 30px 100px rgba(0,0,0,0.45);
        }

        .hero-card-inner {
          background: black;
          border-radius: 28px;
          padding: 36px;
        }

        .logo-blob {
          max-width: 370px;
          margin: 0 auto;
          border: 3px solid white;
          border-radius: 42% 58% 52% 48% / 41% 40% 60% 59%;
          padding: 42px 24px;
          text-align: center;
        }

        .logo-blob .big {
          font-size: clamp(4rem, 7vw, 5.6rem);
          line-height: 0.95;
        }

        .logo-blob .mid {
          margin-top: 10px;
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1;
        }

        .logo-blob .small {
          margin-top: 8px;
          font-size: 2.3rem;
          font-weight: 900;
          line-height: 1;
        }

        .section {
          margin-top: 110px;
        }

        .section-kicker {
          margin-bottom: 12px;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: rgba(255,255,255,0.5);
        }

        .section-title {
          margin: 0;
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          line-height: 1;
        }

        .about-card,
        .concept-card,
        .join-wrap {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          border-radius: 32px;
        }

        .about-card {
          max-width: 780px;
          padding: 38px;
          margin-top: 26px;
        }

        .about-card p {
          margin: 0;
          font-size: 1.15rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.75);
        }

        .concept-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 22px;
          margin-top: 26px;
        }

        .concept-list {
          display: grid;
          gap: 14px;
        }

        .concept-card {
          padding: 22px 24px;
        }

        .concept-card p {
          margin: 0;
          font-size: 1.03rem;
          line-height: 1.85;
          color: rgba(255,255,255,0.74);
        }

        .join-wrap {
          max-width: 900px;
          background: white;
          color: black;
          padding: 38px;
        }

        .join-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 34px;
          align-items: start;
        }

        .join-copy {
          margin-top: 18px;
          max-width: 360px;
          font-size: 1.02rem;
          line-height: 1.9;
          color: rgba(0,0,0,0.7);
        }

        .join-form {
          display: grid;
          gap: 10px;
        }

        .join-form input {
          width: 100%;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.15);
          padding: 15px 18px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          outline: none;
        }

        .join-form input:focus {
          border-color: rgba(0,0,0,0.35);
        }

        .join-submit {
          margin-top: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 999px;
          background: black;
          color: white;
          padding: 15px 28px;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .join-submit:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .nav {
            display: none;
          }

          .hero,
          .concept-grid,
          .join-grid {
            grid-template-columns: 1fr;
          }

          .section {
            margin-top: 84px;
          }
        }
      `}</style>

      <div className="site-container">
        <header className="site-header">
          <a href="#top" className="brand">
            <div className="brand-badge logo-font">C</div>
            <div>
              <div className="logo-font" style={{ fontSize: '1.95rem', lineHeight: 1 }}>
                Clique
              </div>
              <div
                className="body-font"
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  textTransform: 'uppercase',
                  letterSpacing: '.16em',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                social community antwerp
              </div>
            </div>
          </a>

          <nav className="nav body-font">
            <a href="#about">About</a>
            <a href="#concept">Concept</a>
            <a href="#join">Join</a>
          </nav>

          <a href="#join" className="pill-btn pill-btn-outline">
            Request invite
          </a>
        </header>

        <main id="top">
          <section className="hero">
            <div>
              <div className="eyebrow body-font">Antwerp • social • culture</div>

              <h1 className="hero-title logo-font">
                Join the
                <span style={{ display: 'block' }}>Clique.</span>
              </h1>

              <p className="hero-copy body-font">
                A social community in Antwerp bringing people together through curated events,
                atmosphere and real connection.
              </p>

              <div className="hero-actions">
                <a href="#join" className="pill-btn pill-btn-primary">
                  Request invite
                </a>
                <a href="#concept" className="pill-btn pill-btn-outline">
                  Discover more
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-inner">
                <div className="logo-blob">
                  <div className="logo-font big">clique</div>
                  <div className="body-font mid">social community</div>
                  <div className="body-font small">Antwerp</div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <div className="section-kicker body-font">About</div>
            <h2 className="section-title logo-font">Built for connection.</h2>

            <div className="about-card">
              <p className="body-font">
                Clique is a community-first concept for people who want good energy, curated
                moments and a scene that feels social, young and real.
              </p>
            </div>
          </section>

          <section id="concept" className="section">
            <div className="concept-grid">
              <div>
                <div className="section-kicker body-font">Concept</div>
                <h2 className="section-title logo-font">Simple. Social. Curated.</h2>
              </div>

              <div className="concept-list">
                <div className="concept-card">
                  <p className="body-font">
                    A playful Antwerp-based community with a strong visual identity.
                  </p>
                </div>
                <div className="concept-card">
                  <p className="body-font">
                    Curated social events that feel fresh, warm and aesthetically on-brand.
                  </p>
                </div>
                <div className="concept-card">
                  <p className="body-font">
                    A concept focused on atmosphere and people instead of too much information.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="join" className="section" style={{ paddingBottom: 40 }}>
            <div className="join-wrap">
              <div className="join-grid">
                <div>
                  <div
                    className="section-kicker body-font"
                    style={{ color: 'rgba(0,0,0,0.45)' }}
                  >
                    Request access
                  </div>

                  <h2 className="section-title logo-font" style={{ color: 'black' }}>
                    Join the Clique.
                  </h2>

                  <p className="join-copy body-font">
                    Enter your details and request access to the next Clique moment.
                  </p>
                </div>

                <form
                  className="join-form"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="a12099ca-d298-46b6-84cb-4a3f52aea946"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Nieuwe aanvraag via Clique Antwerp"
                  />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <input type="text" name="name" placeholder="Full name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="text" name="instagram" placeholder="Instagram (optional)" />

                  <button type="submit" className="join-submit">
                    Request invite
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

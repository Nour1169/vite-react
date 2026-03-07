export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #050505;
          --panel: rgba(255,255,255,0.035);
          --line: rgba(255,255,255,0.11);
          --text: #f7f7f7;
          --muted: rgba(255,255,255,0.78);
          --cream: #f3efe9;
          --white: #ffffff;
          --black: #000000;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', sans-serif;
          background-image:
            radial-gradient(rgba(255,255,255,0.05) 0.8px, transparent 0.8px),
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 12px 12px, 48px 48px, 48px 48px;
        }

        a { color: inherit; text-decoration: none; }
        img { display: block; max-width: 100%; }
        .logo-font { font-family: 'Baloo 2', cursive; }
        .body-font { font-family: 'Inter', sans-serif; }

        .site-container {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
        }

        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 26px 0 18px;
        }

        .header-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.04));
        }

        .header-badge {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.65rem;
          font-weight: 800;
          line-height: 1;
        }

        .header-wordmark {
          font-size: 2rem;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .header-sub {
          margin-top: 2px;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.58);
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 48px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.86);
        }

        .nav a { transition: 0.2s ease; }
        .nav a:hover { color: white; }

        .top-btn,
        .hero-btn,
        .join-btn,
        .mobile-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          transition: 0.2s ease;
        }

        .top-btn:hover,
        .hero-btn:hover,
        .join-btn:hover,
        .mobile-cta:hover {
          transform: translateY(-2px);
        }

        .top-btn {
          padding: 18px 32px;
          background: white;
          color: black;
          font-size: 0.9rem;
        }

        .hero {
          padding-top: 28px;
          text-align: center;
        }

        .hero-logo-wrap {
          max-width: 820px;
          margin: 0 auto;
        }

        .hero-logo-shell {
          border: 3px solid white;
          border-radius: 42% 58% 52% 48% / 41% 40% 60% 59%;
          padding: 42px 24px;
          max-width: 760px;
          margin: 0 auto;
          box-shadow: 0 0 18px rgba(255,255,255,0.06);
        }

        .hero-logo-main {
          font-size: clamp(4.8rem, 10vw, 8rem);
          line-height: 0.86;
          letter-spacing: -0.06em;
          font-weight: 800;
          text-transform: lowercase;
        }

        .hero-logo-mid {
          margin-top: 10px;
          font-size: clamp(1.6rem, 2.5vw, 2.3rem);
          font-weight: 800;
          line-height: 1;
        }

        .hero-logo-small {
          margin-top: 8px;
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 900;
          line-height: 1;
        }

        .hero-copy {
          max-width: 860px;
          margin: 34px auto 0;
          font-size: clamp(1.45rem, 2vw, 1.85rem);
          line-height: 1.75;
          color: rgba(255,255,255,0.88);
          letter-spacing: -0.01em;
        }

        .hero-actions {
          margin-top: 34px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .hero-btn {
          min-width: 290px;
          padding: 23px 34px;
          font-size: 1rem;
        }

        .hero-btn.primary {
          background: white;
          color: black;
        }

        .hero-btn.secondary {
          border: 2px solid rgba(255,255,255,0.84);
          color: white;
          background: transparent;
        }

        .about-row {
          margin-top: 92px;
          display: grid;
          grid-template-columns: 1fr 1.02fr 0.92fr;
          gap: 28px;
          align-items: stretch;
        }

        .about-title {
          padding-top: 10px;
        }

        .about-title .small {
          font-size: 1rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.88);
        }

        .about-title .big {
          margin-top: 10px;
          font-size: clamp(3rem, 5vw, 4.6rem);
          line-height: 0.88;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .about-copy {
          border-left: 1px solid rgba(255,255,255,0.12);
          padding-left: 26px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-copy p {
          margin: 0;
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.88);
        }

        .about-copy strong {
          display: block;
          margin-top: 8px;
          font-size: 1.35rem;
          color: white;
        }

        .about-media {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          min-height: 230px;
        }

        .info-card {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 30px;
          background: rgba(255,255,255,0.03);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .info-card .label {
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.52);
          margin-bottom: 12px;
        }

        .info-card h4 {
          margin: 0;
          font-size: 2rem;
          line-height: 1;
          font-weight: 800;
        }

        .info-card p {
          margin: 14px 0 0;
          font-size: 1.02rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.78);
        }

        .expect-section {
          margin-top: 54px;
        }

        .expect-head {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 28px;
        }

        .expect-head span {
          white-space: nowrap;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.9);
        }

        .expect-head::before,
        .expect-head::after {
          content: '';
          height: 1px;
          background: rgba(255,255,255,0.14);
          flex: 1;
        }

        .expect-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .expect-card {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
          border-radius: 24px;
          padding: 34px 28px 26px;
          text-align: center;
        }

        .expect-card .num {
          font-size: 1rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.75);
          margin-bottom: 18px;
        }

        .expect-card h3 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 2.35rem);
          line-height: 0.98;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.03em;
        }

        .expect-card p {
          margin: 18px 0 0;
          font-size: 1.05rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.82);
        }

        .join-wrap {
          margin-top: 40px;
          background: var(--cream);
          color: black;
          border-radius: 34px;
          padding: 34px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.32);
        }

        .join-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.15fr 0.7fr;
          gap: 28px;
          align-items: center;
        }

        .join-copy h2 {
          margin: 0;
          font-size: clamp(3rem, 5vw, 4.8rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          font-weight: 800;
        }

        .join-copy p {
          margin: 24px 0 0;
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(0,0,0,0.84);
        }

        .join-copy strong {
          color: black;
        }

        .form-wrap {
          display: grid;
          gap: 14px;
        }

        .form-wrap input {
          width: 100%;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.72);
          padding: 19px 22px;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          outline: none;
        }

        .form-wrap input:focus {
          border-color: rgba(0,0,0,0.34);
          background: white;
        }

        .join-btn {
          margin-top: 4px;
          padding: 20px 28px;
          background: black;
          color: white;
          font-size: 0.95rem;
        }

        .join-phone {
          align-self: stretch;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }

        .phone-shell {
          width: 220px;
          height: 420px;
          border-radius: 34px;
          background: linear-gradient(180deg, #1a1a1a, #0b0b0b);
          border: 3px solid rgba(0,0,0,0.9);
          box-shadow: 0 18px 40px rgba(0,0,0,0.38);
          padding: 14px;
          transform: rotate(6deg);
        }

        .phone-screen {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 26px;
          overflow: hidden;
          background: linear-gradient(180deg, #050505, #141414);
          color: white;
          padding: 18px 16px;
        }

        .phone-notch {
          width: 78px;
          height: 16px;
          border-radius: 0 0 12px 12px;
          background: black;
          margin: -18px auto 18px;
        }

        .phone-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.72);
          margin-bottom: 18px;
        }

        .caller-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          padding: 7px 10px;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .caller-dot {
          width: 9px;
          height: 9px;
          border-radius: 999px;
          background: white;
        }

        .phone-call {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: calc(100% - 56px);
        }

        .phone-avatar {
          width: 108px;
          height: 108px;
          border-radius: 999px;
          border: 2px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .phone-avatar .mini-c {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: white;
          color: black;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1;
        }

        .phone-name {
          font-size: 2rem;
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        .phone-sub {
          margin-top: 10px;
          font-size: 0.92rem;
          color: rgba(255,255,255,0.72);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .phone-status {
          margin-top: 18px;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.84);
        }

        .phone-actions {
          margin-top: 28px;
          display: flex;
          gap: 16px;
        }

        .call-btn {
          width: 54px;
          height: 54px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .call-btn.answer {
          background: white;
          color: black;
        }

        .call-btn.decline {
          background: transparent;
          color: white;
        }

        .footer {
          margin-top: 46px;
          padding: 20px 0 46px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.95rem;
        }

        .footer-center {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-right {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .social-dot {
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.24);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }

        .mobile-only { display: none; }

        @media (max-width: 980px) {
          .site-container {
            width: min(100%, calc(100% - 32px));
          }

          .nav { display: none; }
          .top-btn { padding: 14px 20px; font-size: 0.8rem; }
          .hero-copy { font-size: 1.1rem; }
          .hero-btn { min-width: 240px; padding: 18px 24px; }
          .about-row,
          .expect-grid,
          .join-grid {
            grid-template-columns: 1fr;
          }
          .about-copy { border-left: 0; padding-left: 0; }
          .join-phone { display: none; }
          .footer {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .site-container { width: min(100%, calc(100% - 24px)); }
          .site-header { padding-top: 18px; }
          .header-logo { width: 78px; }
          .top-btn { display: none; }
          .hero { padding-top: 12px; }
          .hero-copy {
            font-size: 1.02rem;
            line-height: 1.7;
            max-width: 100%;
          }
          .hero-actions {
            gap: 12px;
            flex-direction: column;
            align-items: stretch;
          }
          .hero-btn {
            min-width: 100%;
            width: 100%;
            padding: 18px 22px;
            font-size: 0.9rem;
          }
          .about-row { margin-top: 70px; }
          .about-media { min-height: 190px; }
          .expect-head span { font-size: 0.86rem; }
          .join-wrap { padding: 24px 18px; }
          .join-copy h2 { font-size: 3.2rem; }
          .join-copy p { font-size: 1.05rem; }
          .footer { font-size: 0.78rem; letter-spacing: 0.14em; }
          .mobile-only { display: block; }
        }
      `}</style>

      <div className="site-container">
        <header className="site-header">
          <div className="header-logo">
            <div className="header-badge logo-font">C</div>
            <div>
              <div className="header-wordmark logo-font">Clique</div>
              <div className="header-sub body-font">social community antwerp</div>
            </div>
          </div>

          <nav className="nav body-font">
            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#vibe">Vibe</a>
          </nav>

          <a href="#join" className="top-btn">Request invite</a>
        </header>

        <main id="top">
          <section className="hero">
            <div className="hero-logo-wrap">
              <div className="hero-logo-shell">
                <div className="hero-logo-main logo-font">clique</div>
                <div className="hero-logo-mid body-font">social community</div>
                <div className="hero-logo-small body-font">Antwerp</div>
              </div>
            </div>

            <p className="hero-copy body-font">
              A social community in Antwerp bringing people together through curated events, atmosphere and real connection.
            </p>

            <div className="hero-actions">
              <a href="#join" className="hero-btn primary">Request invite →</a>
              <a href="#about" className="hero-btn secondary">Discover more</a>
            </div>
          </section>

          <section id="about" className="about-row">
            <div className="about-title">
              <div className="small body-font">About the</div>
              <div className="big logo-font">Clique</div>
            </div>

            <div className="about-copy body-font">
              <p>
                Good energy, curated moments, real people.
              </p>
              <strong>No chaos — just vibe.</strong>
            </div>

            <div className="about-media">
              <div className="info-card">
                <div className="label body-font">01</div>
                <h4 className="logo-font">Curated moments</h4>
                <p className="body-font">
                  Social events with the right people, energy and atmosphere.
                </p>
              </div>

              <div className="info-card">
                <div className="label body-font">02</div>
                <h4 className="logo-font">Antwerp based</h4>
                <p className="body-font">
                  A local community concept built around connection and real presence.
                </p>
              </div>
            </div>
          </section>

          <section id="events" className="expect-section">
            <div className="expect-head">
              <span className="body-font">What to expect</span>
            </div>

            <div className="expect-grid">
              <div className="expect-card">
                <div className="num body-font">01</div>
                <h3 className="logo-font">Curated events</h3>
                <p className="body-font">Carefully planned nights and locations.</p>
              </div>

              <div className="expect-card">
                <div className="num body-font">02</div>
                <h3 className="logo-font">Unique vibe</h3>
                <p className="body-font">Music, people and atmosphere.</p>
              </div>

              <div className="expect-card">
                <div className="num body-font">03</div>
                <h3 className="logo-font">Real connection</h3>
                <p className="body-font">No fakes — just community.</p>
              </div>
            </div>

            <div id="join" className="join-wrap">
              <div className="join-grid">
                <div className="join-copy">
                  <h2 className="logo-font">Join the Clique</h2>
                  <p className="body-font">
                    Request access for the <strong>next event.</strong>
                  </p>
                </div>

                <form className="form-wrap" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946" />
                  <input type="hidden" name="subject" value="Nieuwe aanvraag via Clique Antwerp" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Email" required />
                  <input type="text" name="instagram" placeholder="Instagram (optional)" />

                  <button type="submit" className="join-btn">Request invite →</button>
                </form>

                <div className="join-phone">
                  <div className="phone-shell">
                    <div className="phone-screen">
                      <div className="phone-notch"></div>
                      <div className="phone-top body-font">
                        <span>9:41</span>
                        <span>100%</span>
                      </div>

                      <div className="phone-call">
                        <div className="caller-chip body-font">
                          <span className="caller-dot"></span>
                          Incoming call
                        </div>

                        <div className="phone-avatar">
                          <div className="mini-c logo-font">C</div>
                        </div>

                        <div className="phone-name logo-font">Clique</div>
                        <div className="phone-sub body-font">social community antwerp</div>
                        <div className="phone-status body-font">calling you to the next moment</div>

                        <div className="phone-actions">
                          <div className="call-btn decline">✕</div>
                          <div className="call-btn answer">✓</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer body-font">
          <div>Stay connected</div>
          <div className="footer-center">
            <span>Antwerp</span>
            <span>•</span>
            <span>Events</span>
            <span>•</span>
            <span>Community</span>
          </div>
          <div className="footer-right">
            <div className="social-dot">◎</div>
            <div className="social-dot">↗</div>
            <div className="social-dot">f</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

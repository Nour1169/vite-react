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
          width: 112px;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.04));
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

        .hero-logo {
          width: 100%;
          filter: drop-shadow(0 0 18px rgba(255,255,255,0.06));
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
          position: relative;
          min-height: 230px;
          border: 2px solid rgba(255,255,255,0.18);
          border-radius: 42px 42px 42px 42px / 38px 38px 38px 38px;
          overflow: hidden;
          background: rgba(255,255,255,0.02);
        }

        .media-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          height: 100%;
        }

        .media-grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) contrast(1.02);
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
          background: black;
        }

        .phone-screen img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1);
        }

        .phone-logo {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          background: rgba(0,0,0,0.55);
          border-radius: 16px;
          padding: 10px 12px;
          backdrop-filter: blur(6px);
        }

        .phone-logo img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: none;
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
          <img src="/PF.png" alt="Clique logo" className="header-logo" />

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
              <img src="/PF.png" alt="Clique social community Antwerp" className="hero-logo" />
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
              <div className="media-grid">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" alt="Community moment 1" />
                <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80" alt="Community moment 2" />
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80" alt="Community moment 3" />
                <img src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80" alt="Community moment 4" />
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
                      <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" alt="Clique phone visual" />
                      <div className="phone-logo">
                        <img src="/PF.png" alt="Clique logo on phone" />
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

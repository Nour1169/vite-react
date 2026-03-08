export default function App() {
  return (
    <div className="clique-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --bg: #0b0b0d;
          --bg-soft: #111216;
          --panel: rgba(255, 255, 255, 0.045);
          --panel-2: rgba(255, 255, 255, 0.08);
          --line: rgba(255, 255, 255, 0.12);
          --text: #f5f2ec;
          --muted: rgba(245, 242, 236, 0.76);
          --muted-2: rgba(245, 242, 236, 0.56);
          --white: #f6f2eb;
          --black: #0c0c0f;
          --shadow: 0 16px 48px rgba(0, 0, 0, 0.26);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          color: var(--text);
          background:
            radial-gradient(circle at top center, rgba(255,255,255,0.05), transparent 34%),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px),
            var(--bg);
          background-size: auto, 44px 44px, 44px 44px, auto;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button,
        input {
          font: inherit;
        }

        .clique-site {
          min-height: 100vh;
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .logo-font {
          font-family: 'Baloo 2', cursive;
        }

        .site-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 28px 0 22px;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          min-width: 0;
        }

        .brand-badge {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--white);
          color: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 18px rgba(0,0,0,0.14);
          border: 1px solid rgba(0,0,0,0.04);
        }

        .brand-badge span {
          font-size: 1.8rem;
          line-height: 1;
          font-weight: 800;
        }

        .brand-text {
          min-width: 0;
        }

        .brand-title {
          font-size: 2rem;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .brand-subtitle {
          margin-top: 4px;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--muted-2);
          white-space: nowrap;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 38px;
          color: var(--muted);
        }

        .nav a {
          transition: color 0.2s ease;
        }

        .nav a:hover {
          color: var(--white);
        }

        .cta,
        .ghost,
        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 0;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }

        .cta:hover,
        .ghost:hover,
        .submit-btn:hover {
          transform: translateY(-1px);
        }

        .header-cta {
          padding: 16px 28px;
          background: var(--white);
          color: var(--black);
          box-shadow: 0 8px 20px rgba(0,0,0,0.14);
        }

        .hero {
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(320px, 0.94fr);
          gap: 48px;
          align-items: center;
          padding: 34px 0 56px;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--muted);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hero-title {
          margin: 18px 0 0;
          font-size: clamp(3.8rem, 7.4vw, 6.4rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          max-width: 700px;
        }

        .hero-copy {
          margin: 22px 0 0;
          max-width: 720px;
          font-size: 1.14rem;
          line-height: 1.82;
          color: var(--muted);
        }

        .hero-actions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .hero-actions .cta,
        .hero-actions .ghost {
          min-width: 220px;
          padding: 18px 28px;
          font-size: 0.92rem;
        }

        .hero-actions .cta {
          background: var(--white);
          color: var(--black);
          box-shadow: var(--shadow);
        }

        .hero-actions .ghost {
          background: transparent;
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.24);
        }

        .hero-art {
          position: relative;
          min-height: 380px;
          border-radius: 34px;
          background:
            radial-gradient(circle at 70% 32%, rgba(255,255,255,0.18), rgba(255,255,255,0.02) 34%, transparent 54%),
            radial-gradient(circle at 34% 70%, rgba(255,255,255,0.08), transparent 42%),
            linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015)),
            var(--bg-soft);
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        .hero-art::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle, rgba(255,255,255,0.38) 1px, transparent 1.5px);
          background-size: 12px 12px;
          mask-image: radial-gradient(circle at 70% 30%, black 18%, transparent 64%);
          opacity: 0.52;
        }

        .hero-blob {
          position: absolute;
          right: -20px;
          bottom: -10px;
          width: 86%;
          height: 86%;
          border-radius: 42% 58% 50% 50% / 34% 38% 62% 66%;
          background:
            radial-gradient(circle at 70% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0.1) 30%, transparent 52%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.015)),
            rgba(255,255,255,0.02);
          transform: rotate(-8deg);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .section {
          padding-top: 24px;
        }

        .divider {
          margin: 30px 0 34px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
        }

        .section-title {
          margin: 0 0 24px;
          font-size: clamp(2.1rem, 4vw, 3.1rem);
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .feature {
          display: flex;
          gap: 16px;
          padding: 24px 22px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03), 0 10px 24px rgba(0,0,0,0.16);
        }

        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 999px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 1.05rem;
        }

        .feature-number {
          font-size: 0.76rem;
          letter-spacing: 0.1em;
          color: var(--muted-2);
          text-transform: uppercase;
        }

        .feature h3 {
          margin: 8px 0 10px;
          font-size: 1.38rem;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .feature p {
          margin: 0;
          color: var(--muted);
          line-height: 1.72;
          font-size: 0.98rem;
        }

        .join-section {
          padding: 54px 0 72px;
        }

        .join-title {
          margin: 0 0 12px;
          font-size: clamp(2.3rem, 4vw, 3.4rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .join-copy {
          margin: 0 0 24px;
          max-width: 760px;
          font-size: 1.05rem;
          line-height: 1.82;
          color: var(--muted);
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 22px 18px;
          border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.06);
        }

        .step-index {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: var(--white);
          color: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 700;
        }

        .step h4 {
          margin: 4px 0 10px;
          font-size: 1.18rem;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .step p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 0.96rem;
        }

        .join-form-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 18px;
          align-items: center;
          padding: 14px;
          border-radius: 24px;
          background: var(--white);
          color: var(--black);
          box-shadow: 0 14px 34px rgba(0,0,0,0.18);
        }

        .field {
          width: 100%;
          min-width: 0;
          height: 60px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(0,0,0,0.02);
          padding: 0 20px;
          color: var(--black);
          outline: none;
        }

        .field:focus {
          border-color: rgba(0,0,0,0.22);
          background: white;
        }

        .fields-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          grid-column: span 2;
        }

        .fields-stack .field:last-child {
          grid-column: span 2;
        }

        .submit-btn {
          height: 60px;
          padding: 0 30px;
          background: var(--black);
          color: var(--white);
          white-space: nowrap;
          min-width: 230px;
        }

        .footer-note {
          margin-top: 14px;
          color: var(--muted-2);
          font-size: 0.92rem;
        }

        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .hero-art {
            min-height: 300px;
          }

          .features,
          .steps {
            grid-template-columns: 1fr;
          }

          .join-form-wrap {
            grid-template-columns: 1fr;
          }

          .fields-stack {
            grid-template-columns: 1fr;
            grid-column: auto;
          }

          .fields-stack .field:last-child {
            grid-column: auto;
          }

          .submit-btn {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 760px) {
          .container {
            width: min(100%, calc(100% - 28px));
          }

          .site-header {
            flex-wrap: wrap;
            row-gap: 16px;
          }

          .nav {
            order: 3;
            width: 100%;
            justify-content: space-between;
            gap: 14px;
            font-size: 0.94rem;
          }

          .header-cta {
            padding: 14px 20px;
          }

          .hero-title {
            font-size: clamp(3rem, 14vw, 4.8rem);
          }

          .hero-copy {
            font-size: 1rem;
          }

          .hero-actions .cta,
          .hero-actions .ghost {
            min-width: 100%;
          }

          .feature,
          .step {
            padding: 20px 16px;
          }

          .join-form-wrap {
            padding: 12px;
            border-radius: 22px;
          }

          .field,
          .submit-btn {
            height: 56px;
          }

          .brand-subtitle {
            white-space: normal;
          }
        }
      `}</style>

      <header className="container site-header">
        <a href="#top" className="brand">
          <div className="brand-badge"><span className="logo-font">C</span></div>
          <div className="brand-text">
            <div className="brand-title logo-font">Clique</div>
            <div className="brand-subtitle">social community antwerp</div>
          </div>
        </a>

        <nav className="nav">
          <a href="#about">About</a>
          <a href="#concept">Concept</a>
          <a href="#join">Join</a>
        </nav>

        <a href="#join" className="cta header-cta">Request invite</a>
      </header>

      <main id="top" className="container">
        <section className="hero">
          <div>
            <div className="hero-tag">Antwerp · curated community</div>
            <h1 className="hero-title logo-font">Join the Clique.</h1>
            <p className="hero-copy">
              A social community in Antwerp bringing people together through curated events, atmosphere and real connection.
            </p>

            <div className="hero-actions">
              <a href="#join" className="cta">Request invite</a>
              <a href="#concept" className="ghost">Discover more</a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-blob"></div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="divider"></div>
          <h2 className="section-title logo-font">Built for connection.</h2>

          <div className="features">
            <article className="feature">
              <div className="feature-icon">◫</div>
              <div>
                <div className="feature-number">01</div>
                <h3 className="logo-font">Curated events</h3>
                <p>Small, community driven gatherings designed around people, energy and atmosphere.</p>
              </div>
            </article>

            <article className="feature">
              <div className="feature-icon">⚡</div>
              <div>
                <div className="feature-number">02</div>
                <h3 className="logo-font">Social energy</h3>
                <p>Meeting new people through thoughtful moments that feel warm, intentional and real.</p>
              </div>
            </article>

            <article className="feature" id="concept">
              <div className="feature-icon">⌖</div>
              <div>
                <div className="feature-number">03</div>
                <h3 className="logo-font">Antwerp based</h3>
                <p>Connecting people in Antwerp through a local concept with a clear, elevated identity.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="join-section" id="join">
          <div className="divider"></div>
          <h2 className="join-title logo-font">Join the Clique.</h2>
          <p className="join-copy">
            Enter your details and request access to the next Clique moment.
          </p>

          <div className="steps">
            <article className="step">
              <div className="step-index">1</div>
              <div>
                <h4 className="logo-font">Request invite</h4>
                <p>Connect with us and submit your request for access.</p>
              </div>
            </article>

            <article className="step">
              <div className="step-index">2</div>
              <div>
                <h4 className="logo-font">Receive access</h4>
                <p>Selected people receive the next details through the invite flow.</p>
              </div>
            </article>

            <article className="step">
              <div className="step-index">3</div>
              <div>
                <h4 className="logo-font">Join the moment</h4>
                <p>Show up, connect and become part of the Clique atmosphere.</p>
              </div>
            </article>
          </div>

          <form className="join-form-wrap" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946" />
            <input type="hidden" name="subject" value="Nieuwe aanvraag via Clique Antwerp" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="fields-stack">
              <input className="field" type="text" name="name" placeholder="Full name" required />
              <input className="field" type="email" name="email" placeholder="Email" required />
              <input className="field" type="text" name="instagram" placeholder="Instagram (optional)" />
            </div>

            <button className="submit-btn" type="submit">Request invite</button>
          </form>

          <div className="footer-note">Only selected people get access.</div>
        </section>
      </main>
    </div>
  );
}

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Clique Antwerp</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #0a0a0a;
      --panel: #121212;
      --soft: #181818;
      --line: rgba(255, 255, 255, 0.12);
      --text: #f5f5f5;
      --muted: rgba(255, 255, 255, 0.68);
      --muted-2: rgba(255, 255, 255, 0.5);
      --cream: #f3efe9;
      --black: #000000;
      --white: #ffffff;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 36px 36px;
      overflow-x: hidden;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    .logo-font {
      font-family: 'Fredoka', sans-serif;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .container {
      width: min(1280px, calc(100% - 40px));
      margin: 0 auto;
    }

    .page-bg {
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 28%),
        radial-gradient(circle at left, rgba(255,255,255,0.05), transparent 30%);
      z-index: -1;
    }

    .site-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      padding: 24px 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
    }

    .brand-icon {
      width: 44px;
      height: 44px;
      border-radius: 15px;
      border: 1px solid rgba(255,255,255,0.2);
      background: var(--white);
      color: var(--black);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 30px rgba(255,255,255,0.12);
      flex-shrink: 0;
    }

    .brand-icon span {
      font-size: 1.6rem;
      line-height: 1;
    }

    .brand-title {
      font-size: clamp(1.7rem, 2vw, 2.2rem);
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .brand-subtitle {
      margin-top: 4px;
      font-size: 0.72rem;
      color: rgba(255,255,255,0.55);
      text-transform: uppercase;
      letter-spacing: 0.32em;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav a {
      font-size: 0.95rem;
      color: rgba(255,255,255,0.72);
      transition: 0.2s ease;
    }

    .nav a:hover {
      color: var(--white);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      padding: 15px 28px;
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      transition: 0.2s ease;
      cursor: pointer;
      border: none;
    }

    .btn:hover {
      transform: translateY(-2px);
    }

    .btn-primary {
      background: var(--white);
      color: var(--black);
    }

    .btn-outline {
      background: transparent;
      color: var(--white);
      border: 1px solid rgba(255,255,255,0.85);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.18fr 0.82fr;
      gap: 56px;
      align-items: center;
      padding: 10px 0 30px;
    }

    .eyebrow {
      display: inline-flex;
      padding: 10px 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.7);
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.32em;
      backdrop-filter: blur(6px);
      margin-bottom: 20px;
    }

    .hero h1 {
      font-size: clamp(4rem, 9vw, 7rem);
      line-height: 0.92;
      letter-spacing: -0.03em;
    }

    .hero p {
      margin-top: 24px;
      max-width: 760px;
      font-size: 1.2rem;
      line-height: 1.8;
      color: var(--muted);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 32px;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 36px;
      max-width: 760px;
    }

    .mini-card,
    .about-card,
    .event-card,
    .expect-card,
    .detail-card,
    .join-wrap {
      border: 1px solid var(--line);
      background: rgba(255,255,255,0.04);
    }

    .mini-card {
      border-radius: 28px;
      padding: 20px;
    }

    .mini-card h3 {
      font-size: 0.92rem;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      margin-bottom: 8px;
    }

    .mini-card p {
      margin-top: 0;
      font-size: 0.95rem;
      line-height: 1.6;
      color: rgba(255,255,255,0.6);
    }

    .hero-visual {
      position: relative;
    }

    .hero-dot,
    .hero-dot-2 {
      position: absolute;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.15);
    }

    .hero-dot {
      width: 112px;
      height: 112px;
      top: 26px;
      left: -12px;
    }

    .hero-dot-2 {
      width: 80px;
      height: 80px;
      bottom: 50px;
      right: -8px;
      border-color: rgba(255,255,255,0.1);
    }

    .hero-frame {
      background: #f4efe8;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 34px;
      padding: 20px;
      box-shadow: 0 35px 120px rgba(0,0,0,0.45);
      position: relative;
      z-index: 1;
    }

    .hero-panel {
      position: relative;
      overflow: hidden;
      background: var(--black);
      border-radius: 30px;
      padding: 32px;
    }

    .hero-launch {
      position: absolute;
      top: 16px;
      right: 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.05);
      color: rgba(255,255,255,0.65);
      padding: 7px 12px;
      font-size: 0.64rem;
      text-transform: uppercase;
      letter-spacing: 0.28em;
    }

    .blob-outline {
      margin: 12px auto 0;
      max-width: 360px;
      background: var(--black);
      border: 3px solid var(--white);
      border-radius: 42% 58% 52% 48% / 41% 40% 60% 59%;
      padding: 34px 26px;
      text-align: center;
    }

    .blob-outline .big {
      font-size: clamp(4.1rem, 8vw, 5.5rem);
      line-height: 0.95;
    }

    .blob-outline .mid {
      margin-top: 10px;
      font-size: clamp(1.2rem, 3vw, 2rem);
      font-weight: 800;
      line-height: 1.1;
    }

    .blob-outline .small {
      font-size: clamp(1.8rem, 4vw, 3.2rem);
      font-weight: 800;
      line-height: 1.05;
    }

    .feels-card {
      margin-top: 32px;
      border-radius: 26px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(255,255,255,0.04);
      padding: 20px;
    }

    .section {
      margin-top: 88px;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 24px;
      margin-bottom: 24px;
    }

    .section-kicker {
      font-size: 0.74rem;
      text-transform: uppercase;
      letter-spacing: 0.32em;
      color: rgba(255,255,255,0.5);
      margin-bottom: 12px;
    }

    .section h2 {
      font-size: clamp(2.7rem, 5vw, 4rem);
      line-height: 1;
    }

    .section-copy {
      max-width: 520px;
      color: rgba(255,255,255,0.6);
      font-size: 0.95rem;
      line-height: 1.8;
    }

    .about-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .about-card {
      border-radius: 42% 58% 55% 45% / 43% 37% 63% 57%;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.2);
    }

    .about-card .kicker {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.3em;
      color: rgba(255,255,255,0.5);
    }

    .about-card h3 {
      margin-top: 16px;
      font-size: 2rem;
      line-height: 1.1;
    }

    .about-card p {
      margin-top: 16px;
      color: rgba(255,255,255,0.65);
      line-height: 1.8;
    }

    .events-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .event-card {
      border-radius: 30px;
      padding: 24px;
      background: #111111;
      transition: 0.2s ease;
      display: block;
    }

    .event-card:hover {
      transform: translateY(-4px);
      border-color: rgba(255,255,255,0.2);
      background: #151515;
    }

    .event-number {
      margin-bottom: 40px;
      font-size: 3.8rem;
      font-weight: 900;
      color: rgba(255,255,255,0.1);
      line-height: 1;
    }

    .event-card h3 {
      font-size: 2rem;
      line-height: 1.05;
    }

    .event-card p {
      margin-top: 12px;
      color: rgba(255,255,255,0.65);
      line-height: 1.8;
    }

    .event-pill {
      display: inline-flex;
      align-items: center;
      margin-top: 20px;
      padding: 10px 16px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.15);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      transition: 0.2s ease;
    }

    .event-card:hover .event-pill {
      background: var(--white);
      color: var(--black);
    }

    .run-shell {
      background: var(--cream);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 38px;
      padding: 24px;
      color: var(--black);
      box-shadow: 0 35px 120px rgba(0,0,0,0.35);
    }

    .run-inner {
      background: var(--black);
      color: var(--white);
      border-radius: 30px;
      padding: 32px;
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 24px;
    }

    .run-inner p {
      color: rgba(255,255,255,0.7);
      line-height: 1.8;
      font-size: 1rem;
    }

    .detail-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-top: 32px;
    }

    .detail-card {
      border-radius: 24px;
      padding: 20px;
    }

    .detail-label {
      font-size: 0.68rem;
      text-transform: uppercase;
      letter-spacing: 0.28em;
      color: rgba(255,255,255,0.45);
    }

    .detail-value {
      margin-top: 14px;
      font-size: clamp(1.8rem, 3vw, 2.7rem);
      line-height: 1.12;
    }

    .run-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-top: 28px;
    }

    .expect-card {
      border-radius: 28px;
      padding: 24px;
    }

    .expect-list {
      margin-top: 20px;
      display: grid;
      gap: 14px;
    }

    .expect-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.1);
      background: rgba(0,0,0,0.2);
      padding: 16px;
    }

    .expect-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--white);
      margin-top: 7px;
      flex-shrink: 0;
    }

    .expect-item p {
      color: rgba(255,255,255,0.74);
      font-size: 0.95rem;
      line-height: 1.7;
    }

    .join-wrap {
      border-radius: 38px;
      background: var(--white);
      color: var(--black);
      padding: 30px;
      box-shadow: 0 30px 120px rgba(255,255,255,0.08);
    }

    .join-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      align-items: start;
    }

    .join-wrap p {
      color: rgba(0,0,0,0.7);
      line-height: 1.8;
      font-size: 1rem;
      max-width: 540px;
    }

    .join-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .join-form input {
      width: 100%;
      border-radius: 999px;
      border: 1px solid rgba(0,0,0,0.2);
      background: var(--white);
      color: var(--black);
      padding: 15px 20px;
      font-size: 1rem;
      font-family: 'Inter', sans-serif;
      outline: none;
    }

    .join-form input:focus {
      border-color: rgba(0,0,0,0.5);
    }

    .join-form button {
      margin-top: 4px;
    }

    .mobile-nav-toggle {
      display: none;
    }

    @media (max-width: 1120px) {
      .hero,
      .run-inner,
      .join-grid,
      .events-grid,
      .about-grid {
        grid-template-columns: 1fr 1fr;
      }

      .events-grid .event-card:last-child,
      .events-grid .event-card:nth-child(3) {
        display: none;
      }
    }

    @media (max-width: 860px) {
      .site-header {
        flex-wrap: wrap;
      }

      .nav {
        order: 3;
        width: 100%;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 18px;
      }

      .hero,
      .run-inner,
      .join-grid,
      .about-grid,
      .events-grid,
      .detail-grid,
      .mini-grid {
        grid-template-columns: 1fr;
      }

      .section-head {
        flex-direction: column;
        align-items: flex-start;
      }

      .hero-frame,
      .run-shell,
      .join-wrap {
        padding: 18px;
      }

      .hero-panel,
      .run-inner {
        padding: 24px;
      }

      .brand-subtitle {
        letter-spacing: 0.2em;
      }
    }
  </style>
</head>
<body>
  <div class="page-bg"></div>

  <header class="container site-header">
    <a class="brand" href="#top">
      <div class="brand-icon"><span class="logo-font">C</span></div>
      <div>
        <div class="logo-font brand-title">Clique</div>
        <div class="brand-subtitle">social community antwerp</div>
      </div>
    </a>

    <nav class="nav">
      <a href="#about">About</a>
      <a href="#events">Events</a>
      <a href="#join">Join</a>
    </nav>

    <a href="#join" class="btn btn-outline">Request Invite</a>
  </header>

  <main id="top" class="container">
    <section class="hero">
      <div>
        <div class="eyebrow">Antwerp • community • culture • movement</div>

        <h1 class="logo-font">Join the<br>Clique.</h1>

        <p>
          A new generation social community in Antwerp. Built around runs, curated gatherings, music, creative energy and people who actually want to connect.
        </p>

        <div class="hero-actions">
          <a href="#join" class="btn btn-primary">Join the community</a>
          <a href="#events" class="btn btn-outline">See the vibe</a>
        </div>

        <div class="mini-grid">
          <div class="mini-card">
            <h3>Runs + socials</h3>
            <p>Street-energy meetups</p>
          </div>
          <div class="mini-card">
            <h3>Invite-based</h3>
            <p>Curated but warm</p>
          </div>
          <div class="mini-card">
            <h3>Antwerp first</h3>
            <p>Local people, real vibe</p>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="hero-dot"></div>
        <div class="hero-dot-2"></div>

        <div class="hero-frame">
          <div class="hero-panel">
            <div class="hero-launch">launch drop</div>

            <div class="blob-outline">
              <div class="logo-font big">clique</div>
              <div class="mid">social community</div>
              <div class="small">Antwerp</div>
            </div>

            <div class="feels-card">
              <div class="section-kicker" style="margin-bottom: 10px; color: rgba(255,255,255,0.55);">What Clique feels like</div>
              <div class="logo-font" style="font-size: clamp(2rem, 4vw, 3rem); line-height: 1.05;">More community.<br>Less classic.</div>
              <p style="margin-top: 16px; color: rgba(255,255,255,0.68); font-size: 1rem; line-height: 1.8;">
                Designed for a playful, bold and street-inspired identity that matches the new logo instead of a luxury editorial look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="about-grid">
        <article class="about-card">
          <div class="kicker">community first</div>
          <h3 class="logo-font">Not just events</h3>
          <p>Clique is a recurring social world. People come for a run, stay for the atmosphere and return for the people.</p>
        </article>

        <article class="about-card">
          <div class="kicker">street-inspired</div>
          <h3 class="logo-font">Rounded, bold, playful</h3>
          <p>The design language uses softer shapes, strong type and high-contrast black and white to mirror the logo.</p>
        </article>

        <article class="about-card">
          <div class="kicker">young Antwerp</div>
          <h3 class="logo-font">Built for real connection</h3>
          <p>Creative people, ambitious people, sporty people and social people all in one scene, without feeling too formal.</p>
        </article>
      </div>
    </section>

    <section id="events" class="section">
      <div class="section-head">
        <div>
          <div class="section-kicker">Event formats</div>
          <h2 class="logo-font">How Clique shows up</h2>
        </div>
        <div class="section-copy">
          Social runs, café meetups, rooftop moments and creative collabs that feel curated but never stiff.
        </div>
      </div>

      <div class="events-grid">
        <a href="#first-run" class="event-card">
          <div class="event-number">01</div>
          <h3 class="logo-font">Clique Run — First Event</h3>
          <p>Our first community run in Antwerp. Tap here to see the event and join the run.</p>
          <div class="event-pill">Open event page</div>
        </a>

        <div class="event-card">
          <div class="event-number">02</div>
          <h3 class="logo-font">Community Nights</h3>
          <p>Music, conversation, visuals and a room full of good energy.</p>
        </div>

        <div class="event-card">
          <div class="event-number">03</div>
          <h3 class="logo-font">Creative Drops</h3>
          <p>Brand moments, collaborations, content and limited access reveals.</p>
        </div>

        <div class="event-card">
          <div class="event-number">04</div>
          <h3 class="logo-font">City Gatherings</h3>
          <p>Casual moments across Antwerp designed around vibe, people and place.</p>
        </div>
      </div>
    </section>

    <section id="first-run" class="section">
      <div class="run-shell">
        <div class="run-inner">
          <div>
            <div class="section-kicker" style="color: rgba(255,255,255,0.5);">First running event</div>
            <h2 class="logo-font">Clique Run #01</h2>
            <p style="margin-top: 18px; max-width: 720px;">
              Our first community run in Antwerp. Easy energy, good people, a social pace and a strong first moment for the Clique community.
            </p>

            <div class="detail-grid">
              <div class="detail-card">
                <div class="detail-label">Date</div>
                <div class="logo-font detail-value">Sunday — 10:30</div>
              </div>

              <div class="detail-card">
                <div class="detail-label">Location</div>
                <div class="logo-font detail-value">Antwerp Zuid</div>
              </div>

              <div class="detail-card">
                <div class="detail-label">Pace</div>
                <div class="logo-font detail-value">Social / all levels</div>
              </div>
            </div>

            <div class="run-actions">
              <a href="#join" class="btn btn-primary">Join this run</a>
            </div>
          </div>

          <div class="expect-card">
            <div class="section-kicker" style="color: rgba(255,255,255,0.5); margin-bottom: 0;">What to expect</div>
            <div class="expect-list">
              <div class="expect-item">
                <div class="expect-dot"></div>
                <p>Warm welcome and easy social check-in before the start.</p>
              </div>
              <div class="expect-item">
                <div class="expect-dot"></div>
                <p>A community-first run built for meeting people naturally.</p>
              </div>
              <div class="expect-item">
                <div class="expect-dot"></div>
                <p>Post-run coffee, content moments and a relaxed hangout vibe.</p>
              </div>
              <div class="expect-item">
                <div class="expect-dot"></div>
                <p>Good energy, a strong first vibe and a real first moment for Clique.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="join" class="section" style="padding-bottom: 40px;">
      <div class="join-wrap">
        <div class="join-grid">
          <div>
            <div class="section-kicker" style="color: rgba(0,0,0,0.45);">Request access</div>
            <h2 class="logo-font">Join the Clique run.</h2>
            <p style="margin-top: 18px;">
              Enter your details and request access to the next Clique event. Limited spots available.
            </p>
          </div>

          <form class="join-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946">
            <input type="hidden" name="subject" value="Nieuwe aanvraag via Clique Antwerp">
            <input type="checkbox" name="botcheck" style="display:none;">

            <input type="text" name="name" placeholder="Full name" required>
            <input type="email" name="email" placeholder="Email address" required>
            <input type="text" name="instagram" placeholder="Instagram (optional)">

            <button type="submit" class="btn" style="background: black; color: white;">Request invite</button>
          </form>
        </div>
      </div>
    </section>
  </main>
</body>
</html>

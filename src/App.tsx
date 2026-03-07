export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --bg: #0a0a0a;
          --text: #f5f5f5;
          --muted: rgba(255,255,255,0.7);
          --line: rgba(255,255,255,0.1);
          --white: #ffffff;
          --black: #000000;
          --cream: #f3efe9;
        }

        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          margin: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .logo-font {
          font-family: 'Fredoka', sans-serif;
        }

        .container {
          width: min(1280px, calc(100% - 40px));
          margin: 0 auto;
        }

        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }

        nav {
          display: flex;
          gap: 24px;
        }

        .btn {
          border-radius: 999px;
          padding: 14px 26px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .15em;
          font-size: .8rem;
          cursor: pointer;
        }

        .btn-primary {
          background: white;
          color: black;
        }

        .btn-outline {
          border: 1px solid white;
        }

        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding: padding: 10px 0 40px 0;
        }

        .hero h1 {
          font-size: clamp(3rem,7vw,6rem);
          line-height: .9;
        }

        .hero p {
          margin-top: 20px;
          font-size: 1.1rem;
          color: var(--muted);
          max-width: 500px;
        }

        .mini-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .mini-card {
          border: 1px solid var(--line);
          padding: 20px;
          border-radius: 22px;
          background: rgba(255,255,255,.03);
        }

        .blob {
          border: 3px solid white;
          border-radius: 42% 58% 52% 48% / 41% 40% 60% 59%;
          padding: 40px;
          text-align: center;
        }

        .blob h2 {
          font-size: 4rem;
          margin: 0;
        }

        section {
          margin-top: 90px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 20px;
        }

        .about-card {
          padding: 30px;
          border-radius: 40px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.03);
        }

        .events-grid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 20px;
        }

        .event-card {
          padding: 24px;
          border-radius: 28px;
          border: 1px solid var(--line);
          background: #111;
        }

        .run-shell {
          background: var(--cream);
          padding: 30px;
          border-radius: 40px;
          color: black;
        }

        .run-inner {
          background: black;
          color: white;
          border-radius: 30px;
          padding: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .join-wrap {
          background: white;
          color: black;
          padding: 40px;
          border-radius: 40px;
        }

        .join-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .join-form input {
          width: 100%;
          padding: 14px;
          border-radius: 999px;
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }

        @media(max-width:900px){
          .hero,
          .about-grid,
          .events-grid,
          .run-inner,
          .join-grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>

      <div className="container">

        <header>
          <div className="logo-font">
            <strong>Clique</strong>
            <div style={{fontSize:12,opacity:.6}}>social community antwerp</div>
          </div>

          <nav>
            <a href="#about">About</a>
            <a href="#events">Events</a>
            <a href="#join">Join</a>
          </nav>

          <a className="btn btn-outline" href="#join">
            Request Invite
          </a>
        </header>


        <section className="hero">

          <div>
            <h1 className="logo-font">
              Join the<br/>Clique.
            </h1>

            <p>
              A new generation social community in Antwerp. Built around runs, curated gatherings and people who actually want to connect.
            </p>

            <div style={{marginTop:30,display:"flex",gap:10}}>
              <a className="btn btn-primary" href="#join">Join community</a>
              <a className="btn btn-outline" href="#events">See events</a>
            </div>

            <div className="mini-grid">

              <div className="mini-card">
                <strong>Runs + socials</strong>
                <p>Street-energy meetups</p>
              </div>

              <div className="mini-card">
                <strong>Invite-based</strong>
                <p>Curated but warm</p>
              </div>

              <div className="mini-card">
                <strong>Antwerp first</strong>
                <p>Local people, real vibe</p>
              </div>

            </div>

          </div>

          <div className="blob">
            <h2 className="logo-font">clique</h2>
            <p>social community</p>
            <strong>Antwerp</strong>
          </div>

        </section>


        <section id="about">

          <div className="about-grid">

            <div className="about-card">
              <h3 className="logo-font">Not just events</h3>
              <p>Clique is a recurring social world where people return for the community.</p>
            </div>

            <div className="about-card">
              <h3 className="logo-font">Street inspired</h3>
              <p>Rounded shapes, bold type and a playful identity.</p>
            </div>

            <div className="about-card">
              <h3 className="logo-font">Young Antwerp</h3>
              <p>Creative people, sporty people and ambitious people in one scene.</p>
            </div>

          </div>

        </section>


        <section id="events">

          <h2 className="logo-font">How Clique shows up</h2>

          <div className="events-grid">

            <div className="event-card">
              <h3>Clique Run #01</h3>
              <p>Our first community run in Antwerp.</p>
            </div>

            <div className="event-card">
              <h3>Community Nights</h3>
              <p>Music, conversation and creative energy.</p>
            </div>

            <div className="event-card">
              <h3>Creative Drops</h3>
              <p>Collaborations and brand moments.</p>
            </div>

            <div className="event-card">
              <h3>City Gatherings</h3>
              <p>Casual meetups across Antwerp.</p>
            </div>

          </div>

        </section>


        <section>

          <div className="run-shell">

            <div className="run-inner">

              <div>

                <h2 className="logo-font">Clique Run #01</h2>

                <p>
                  Our first community run in Antwerp with a relaxed social pace and strong community energy.
                </p>

                <div style={{marginTop:20}}>
                  <a href="#join" className="btn btn-primary">
                    Join this run
                  </a>
                </div>

              </div>

              <div>

                <ul>
                  <li>Warm welcome before the start</li>
                  <li>Community focused run</li>
                  <li>Post run coffee</li>
                  <li>Social hangout vibe</li>
                </ul>

              </div>

            </div>

          </div>

        </section>


        <section id="join">

          <div className="join-wrap">

            <div className="join-grid">

              <div>

                <h2 className="logo-font">Join the Clique run</h2>

                <p>
                  Enter your details and request access to the next Clique event.
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

                <input
                  type="checkbox"
                  name="botcheck"
                  style={{display:"none"}}
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />

                <input
                  type="text"
                  name="instagram"
                  placeholder="Instagram (optional)"
                />

                <button className="btn btn-primary" type="submit">
                  Request invite
                </button>

              </form>

            </div>

          </div>

        </section>

      </div>
    </>
  );
}

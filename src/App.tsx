export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        body{
          margin:0;
          font-family:'Inter',sans-serif;
          background:#050505;
          color:white;
          background-image:
            radial-gradient(rgba(255,255,255,0.07) 0.8px, transparent 0.8px),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size:12px 12px,44px 44px,44px 44px;
        }

        .logo-font{font-family:'Fredoka',sans-serif;}

        .container{
          width:min(1120px,calc(100% - 48px));
          margin:0 auto;
        }

        header{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:24px 0;
        }

        .brand{
          display:flex;
          align-items:center;
          gap:12px;
        }

        .brand-icon{
          width:44px;
          height:44px;
          background:white;
          color:black;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight:700;
          font-size:1.6rem;
        }

        nav{
          display:flex;
          gap:28px;
          color:rgba(255,255,255,0.75);
        }

        nav a:hover{
          color:white;
        }

        .btn{
          border-radius:999px;
          padding:14px 26px;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:.14em;
          font-size:.8rem;
        }

        .btn-primary{
          background:white;
          color:black;
        }

        .btn-outline{
          border:1px solid white;
          color:white;
        }

        .hero{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:60px;
          align-items:center;
        }

        .eyebrow{
          display:inline-flex;
          padding:10px 16px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.04);
          font-size:.72rem;
          text-transform:uppercase;
          letter-spacing:.28em;
        }

        h1{
          font-size:clamp(3.8rem,9vw,7rem);
          line-height:.9;
          margin:20px 0 0 0;
        }

        .hero p{
          margin-top:22px;
          max-width:560px;
          font-size:1.15rem;
          line-height:1.9;
          color:rgba(255,255,255,.75);
        }

        .hero-actions{
          margin-top:30px;
          display:flex;
          gap:14px;
        }

        .logo-card{
          background:#f3efe9;
          border-radius:34px;
          padding:20px;
        }

        .logo-card-inner{
          background:black;
          border-radius:28px;
          padding:36px;
        }

        .blob{
          border:3px solid white;
          border-radius:42% 58% 52% 48% / 41% 40% 60% 59%;
          padding:42px 24px;
          text-align:center;
        }

        .blob .big{
          font-size:4.8rem;
        }

        .blob .mid{
          margin-top:8px;
          font-size:1.5rem;
          font-weight:800;
        }

        .blob .small{
          margin-top:6px;
          font-size:2.2rem;
          font-weight:900;
        }

        section{
          margin-top:110px;
        }

        .card{
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.035);
          border-radius:32px;
          padding:38px;
          max-width:780px;
        }

        .join{
          background:white;
          color:black;
          padding:38px;
          border-radius:36px;
          max-width:880px;
        }

        .join input{
          width:100%;
          border-radius:999px;
          border:1px solid rgba(0,0,0,.15);
          padding:15px 18px;
          margin-bottom:10px;
          font-size:1rem;
        }

        .submit{
          border:none;
          border-radius:999px;
          background:black;
          color:white;
          padding:14px 28px;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:.14em;
        }

        @media(max-width:900px){
          nav{display:none;}
          .hero{grid-template-columns:1fr;}
        }

      `}</style>

      <div className="container">

        <header>

          <div className="brand">

            <div className="brand-icon logo-font">
              C
            </div>

            <div>
              <div className="logo-font" style={{fontSize:"1.9rem"}}>Clique</div>
              <div style={{fontSize:"12px",opacity:.6,textTransform:"uppercase",letterSpacing:".16em"}}>
                social community antwerp
              </div>
            </div>

          </div>

          <nav>
            <a href="#about">About</a>
            <a href="#concept">Concept</a>
            <a href="#join">Join</a>
          </nav>

          <a href="#join" className="btn btn-outline">
            Request invite
          </a>

        </header>

        <main>

          <section className="hero">

            <div>

              <div className="eyebrow">
                Antwerp • social • culture
              </div>

              <h1 className="logo-font">
                Join the
                <br/>
                Clique.
              </h1>

              <p>
                A social community in Antwerp bringing people together
                through curated events, atmosphere and real connection.
              </p>

              <div className="hero-actions">
                <a href="#join" className="btn btn-primary">Request invite</a>
                <a href="#concept" className="btn btn-outline">Discover more</a>
              </div>

            </div>

            <div className="logo-card">
              <div className="logo-card-inner">

                <div className="blob">

                  <div className="logo-font big">clique</div>
                  <div className="mid">social community</div>
                  <div className="small">Antwerp</div>

                </div>

              </div>
            </div>

          </section>

          <section id="about">

            <h2 className="logo-font">Built for connection.</h2>

            <div className="card">

              <p>
                Clique is a community-first concept for people who want good
                energy, curated moments and a scene that feels social,
                young and real.
              </p>

            </div>

          </section>

          <section id="concept">

            <h2 className="logo-font">Simple. Social. Curated.</h2>

            <div className="card">
              A playful Antwerp-based community with a strong visual identity.
            </div>

            <div className="card">
              Curated social events that feel fresh, warm and aesthetically on-brand.
            </div>

            <div className="card">
              A concept focused on atmosphere and people instead of too much information.
            </div>

          </section>

          <section id="join">

            <div className="join">

              <h2 className="logo-font">Join the Clique.</h2>

              <p style={{marginTop:"10px"}}>
                Enter your details and request access to the next Clique moment.
              </p>

              <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946"/>

                <input type="text" name="name" placeholder="Full name" required/>

                <input type="email" name="email" placeholder="Email" required/>

                <input type="text" name="instagram" placeholder="Instagram (optional)"/>

                <button className="submit">
                  Request invite
                </button>

              </form>

            </div>

          </section>

        </main>

      </div>

    </div>
  )
}
       

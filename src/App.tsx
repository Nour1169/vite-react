export default function App() {
  return (
    <div className="clique-site">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #070707;
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .clique-site {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .center {
          text-align: center;
          max-width: 520px;
          width: 100%;
        }

        .logo {
          font-family: 'Baloo 2', cursive;
          font-size: 3rem;
          margin-bottom: 28px;
          letter-spacing: -0.02em;
        }

        .headline {
          font-family: 'Baloo 2', cursive;
          font-size: 2.2rem;
          margin-bottom: 10px;
        }

        .sub {
          color: rgba(255,255,255,0.65);
          margin-bottom: 40px;
          font-size: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        input {
          height: 54px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          color: white;
          padding: 0 20px;
          font-size: 0.95rem;
        }

        input:focus {
          outline: none;
          border-color: white;
        }

        button {
          margin-top: 10px;
          height: 56px;
          border-radius: 999px;
          border: none;
          background: white;
          color: black;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: 0.2s;
        }

        button:hover {
          transform: translateY(-2px);
        }

        .footer {
          margin-top: 20px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
        }

      `}</style>

      <div className="center">

        <div className="logo">Clique</div>

        <div className="headline">
          Not everyone enters.
        </div>

        <div className="sub">
          Request access to the next moment.
        </div>

        <form action="https://api.web3forms.com/submit" method="POST">
          
          <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946" />
          <input type="hidden" name="subject" value="Nieuwe aanvraag via Clique Antwerp" />
          <input type="checkbox" name="botcheck" style={{display:'none'}} />

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

          <button type="submit">
            Request access
          </button>

        </form>

        <div className="footer">
          Antwerp social community
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site">

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

body{
margin:0;
background:#0b0b0b;
color:white;
font-family:Inter;
}

.site{
max-width:1200px;
margin:auto;
padding:40px;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:80px;
}

.logo{
font-family:Fredoka;
font-size:28px;
}

nav{
display:flex;
gap:40px;
color:#ccc;
}

.hero{
display:grid;
grid-template-columns:1fr 1fr;
gap:80px;
align-items:center;
margin-bottom:120px;
}

.hero h1{
font-family:Fredoka;
font-size:64px;
margin-bottom:20px;
}

.hero p{
color:#aaa;
font-size:18px;
line-height:1.6;
}

.buttons{
margin-top:30px;
display:flex;
gap:20px;
}

.button{
padding:14px 28px;
border-radius:999px;
border:1px solid white;
text-decoration:none;
color:white;
}

.button.primary{
background:white;
color:black;
}

.shape{
width:300px;
height:300px;
background:#111;
border-radius:40px;
}

.section{
margin-bottom:120px;
}

.section h2{
font-family:Fredoka;
font-size:40px;
margin-bottom:40px;
}

.cards{
display:grid;
grid-template-columns:1fr 1fr 1fr;
gap:30px;
}

.card{
background:#111;
padding:30px;
border-radius:20px;
}

.steps{
display:flex;
gap:30px;
}

.step{
background:#111;
padding:20px;
border-radius:20px;
}

.join{
background:#111;
padding:40px;
border-radius:30px;
display:grid;
grid-template-columns:1fr 1fr;
gap:40px;
}

input{
width:100%;
padding:16px;
border-radius:999px;
border:none;
margin-bottom:15px;
}

.submit{
background:white;
color:black;
padding:16px;
border-radius:999px;
border:none;
font-weight:600;
}

`}</style>

<header>

<div className="logo">Clique</div>

<nav>
<a>About</a>
<a>Concept</a>
<a>Join</a>
</nav>

<a className="button">Request invite</a>

</header>

<section className="hero">

<div>

<h1>Join the Clique.</h1>

<p>
A social community in Antwerp bringing people together
through curated events, atmosphere and real connection.
</p>

<div className="buttons">
<a className="button primary">Request invite</a>
<a className="button">Discover more</a>
</div>

</div>

<div className="shape"></div>

</section>

<section className="section">

<h2>Built for connection.</h2>

<div className="cards">

<div className="card">
<h3>Curated events</h3>
<p>Small community driven moments built around people.</p>
</div>

<div className="card">
<h3>Social energy</h3>
<p>Meeting new people through curated experiences.</p>
</div>

<div className="card">
<h3>Antwerp based</h3>
<p>Connecting people in Antwerp.</p>
</div>

</div>

</section>

<section className="section">

<h2>How it works</h2>

<div className="steps">

<div className="step">1 Request invite</div>
<div className="step">2 Receive access</div>
<div className="step">3 Join the moment</div>

</div>

</section>

<section className="join">

<div>

<h2>Join the Clique.</h2>

<p>
Enter your details and request access to the next Clique moment.
</p>

</div>

<form action="https://api.web3forms.com/submit" method="POST">

<input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946"/>

<input name="name" placeholder="Full name"/>

<input name="email" placeholder="Email"/>

<input name="instagram" placeholder="Instagram (optional)"/>

<button className="submit">Request invite</button>

</form>

</section>

</div>
  )
}
      

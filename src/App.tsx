import { useEffect, useState, type FormEvent } from "react";
import logo from "./assets/pff.png";

export default function App() {

const [stage, setStage] = useState<"hidden" | "quote" | "form" | "unlock">("hidden");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

const [inputCode, setInputCode] = useState("");
const [progressStage, setProgressStage] = useState<number | null>(null);

const [vipSubmitted, setVipSubmitted] = useState(false);

const codes: Record<string, number> = {
  "K7M2": 1,
  "X9Q4": 2,
  "L3T8": 3,
  "P8R1": 4,
  "V2N7": 5,
};

useEffect(() => {
if (stage === "quote") {
setTimeout(() => setStage("form"), 1100);
}
}, [stage]);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
setIsSubmitting(true);

const formData = new FormData(e.currentTarget);
formData.append("access_key", "a12099ca-d298-46b6-84cb-4a3f52aea946");

await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData,
});

setIsSubmitting(false);
setIsSubmitted(true);
};

const handleVIPSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

const formData = new FormData(e.currentTarget);
formData.append("access_key", "a12099ca-d298-46b6-84cb-4a3f52aea946");
formData.append("subject", "🔥 Clique VIP unlocked (5 events)");

await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData,
});

setVipSubmitted(true);
};

const handleUnlock = () => {
const code = inputCode.toUpperCase();
const stageFound = codes[code];

setProgressStage(stageFound || null);
setStage("unlock");
};

return (
<>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Inter:wght@400;600&display=swap');

body {
margin:0;
background:#000;
color:#fff;
font-family:'Inter',sans-serif;
}

.page {
height:100vh;
display:flex;
align-items:center;
justify-content:center;
}

.secret-button {
background:none;
border:none;
cursor:pointer;
display:flex;
flex-direction:column;
align-items:center;
gap:12px;
}

.secret-mark {
width:16px;
height:16px;
border-radius:50%;
background:white;
animation:pulse 2s infinite;
}

@keyframes pulse {
0%{opacity:.5;transform:scale(1)}
50%{opacity:1;transform:scale(1.3)}
100%{opacity:.5;transform:scale(1)}
}

.secret-text {
opacity:0.7;
font-family:'Baloo 2', cursive;
letter-spacing:2px;
color:#fff;
}

.card {
width:380px;
text-align:center;
display:flex;
flex-direction:column;
gap:20px;
align-items:center;
}

.logo-image {
width:180px;
height:auto;
object-fit:contain;
transition:.3s;
}

.logo-image:hover {
transform:scale(1.03);
}

.quote {
font-family:'Baloo 2';
font-size:28px;
}

.field {
width:100%;
padding:14px;
border-radius:14px;
border:1px solid rgba(255,255,255,0.2);
background:rgba(255,255,255,0.03);
color:white;
margin-top:8px;
}

.cta {
width:100%;
padding:14px;
border-radius:999px;
background:white;
color:black;
margin-top:10px;
cursor:pointer;
transition:.3s;
}

.cta:hover {
transform:translateY(-2px);
}

.subtle {
opacity:.5;
font-size:13px;
}

.success-bar {
width:100%;
padding:14px;
border-radius:14px;
background:#16a34a;
color:white;
font-weight:600;
margin-top:12px;
animation:fadeIn .4s ease;
}

@keyframes fadeIn {
from {opacity:0; transform:translateY(5px);}
to {opacity:1; transform:translateY(0);}
}

.progress {
display:flex;
gap:6px;
margin-top:10px;
}

.dot {
width:8px;
height:8px;
border-radius:50%;
background:#333;
}

.dot.active {
background:white;
}
`}</style>

<div className="page">

{stage === "hidden" && (
<button className="secret-button" onClick={() => setStage("quote")}>
<div className="secret-mark"/>
<div className="secret-text">you're one clique away</div>
</button>
)}

{stage !== "hidden" && (
<div className="card">

<img src={logo} className="logo-image" />

{stage === "quote" && (
<p className="quote">so... you found us</p>
)}

{stage === "form" && (
<>
<p className="quote">not everyone finds the clique</p>

<form onSubmit={handleSubmit}>
<input name="name" className="field" placeholder="your name" required />
<input name="email" className="field" placeholder="your email" required />
<input name="age" className="field" placeholder="your age" required />
<input name="instagram" className="field" placeholder="your instagram" required />

<button className="cta">
{isSubmitting ? "sending..." : "join the clique"}
</button>
</form>

{isSubmitted && (
<div className="success-bar">
✔ welcome to the clique — see you soon.
</div>
)}

<div>
<p className="subtle">already part of clique?</p>

<input
className="field"
placeholder="enter your code"
value={inputCode}
onChange={(e)=>setInputCode(e.target.value)}
/>

<button className="cta" onClick={handleUnlock}>
unlock
</button>
</div>
</>
)}

{stage === "unlock" && progressStage && (
<>
<p className="quote">
stage {progressStage} unlocked
</p>

<p className="subtle">
{progressStage < 5
? "you’re officially part of the clique."
: "you’ve been with us from the start."}
</p>

<div className="progress">
{[1,2,3,4,5].map(i => (
<div key={i} className={`dot ${i <= progressStage ? "active" : ""}`}/>
))}
</div>

{progressStage >= 5 && !vipSubmitted && (
<>
<p style={{marginTop:10}}>
you’ve attended 5 events — we appreciate your trust.
</p>

<form onSubmit={handleVIPSubmit}>
<input name="name" className="field" placeholder="your name" required />
<input name="email" className="field" placeholder="your email" required />
<input name="instagram" className="field" placeholder="your instagram" required />
<input name="phone" className="field" placeholder="your number" required />

<button className="cta">unlock full access</button>
</form>
</>
)}

{vipSubmitted && (
<p style={{marginTop:10}}>
you’re in. we’ll contact you soon.
</p>
)}

</>
)}

</div>
)}

</div>
</>
);
}

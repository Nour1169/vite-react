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

// ✅ NORMAL FORM
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

// 🔥 VIP FORM
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

// 🔥 FIXED UNLOCK
const handleUnlock = () => {
const code = inputCode.toUpperCase();
const stageFound = codes[code];

setProgressStage(stageFound || null);
setStage("unlock"); // 👈 zorgt dat je direct naar unlock gaat
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
opacity:.3;
font-family:'Baloo 2';
letter-spacing:2px;
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
transition:.4s;
}

.logo-image:hover {
transform:scale(1.05);
filter:drop-shadow(0 0 10px rgba(255,255,255,0.2));
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
opacity:.4;
font-size:13px;
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

{/* 🔘 ENTRY */}
{stage === "hidden" && (
<button className="secret-button" onClick={() => setStage("quote")}>
<div className="secret-mark"/>
<div className="secret-text">you're one clique away</div>
</button>
)}

{/* 🔓 CONTENT */}
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

<button className="cta">
{isSubmitting ? "sending..." : "join the clique"}
</button>
</form>

{isSubmitted && <p className="subtle">see you soon</p>}

{/* 🔥 FIXED CODE INPUT */}
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

{stage === "unlock" && (
<>
<p className="quote">you made it further</p>

<input
className="field"
placeholder="your code"
value={inputCode}
onChange={(e)=>setInputCode(e.target.value)}
/>

<button className="cta" onClick={handleUnlock}>
unlock
</button>

{progressStage && (
<>
<p className="subtle">stage {progressStage} unlocked</p>

<div className="progress">
{[1,2,3,4,5].map(i => (
<div key={i} className={`dot ${i <= progressStage ? "active" : ""}`}/>
))}
</div>

{/* 🔥 VIP */}
{progressStage >= 5 && !vipSubmitted && (
<>
<p style={{marginTop:10}}>you’ve earned access</p>

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
<p style={{marginTop:10}}>you’re in. invitation coming soon.</p>
)}

</>
)}

</>
)}

</div>
)}

</div>
</>
);
}

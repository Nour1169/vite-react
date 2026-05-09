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

const form = e.currentTarget;
const formData = new FormData(form);

formData.append("access_key", "a12099ca-d298-46b6-84cb-4a3f52aea946");
formData.append("subject", "New Clique signup");
formData.append("from_name", "Clique Website");
formData.append("replyto", formData.get("email") as string);

try {
const res = await fetch("https://api.web3forms.com/submit", {
method: "POST",
body: formData,
});

const data = await res.json();
console.log("WEB3 RESPONSE:", data);

if (data.success) {
setIsSubmitted(true);
form.reset();
} else {
alert(data.message || "Something went wrong");
}

} catch (err) {
console.error(err);
alert("Network error");
}

setIsSubmitting(false);
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
overflow-x:hidden;
}

.page {
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
padding:20px;
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
0%{
opacity:.5;
transform:scale(1)
}
50%{
opacity:1;
transform:scale(1.3)
}
100%{
opacity:.5;
transform:scale(1)
}
}

.secret-text {
opacity:0.7;
font-family:'Baloo 2', cursive;
letter-spacing:2px;
color:#fff;
}

.card {
width:100%;
max-width:380px;
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
line-height:1.1;
margin:0;
}

.field-group {
width:100%;
text-align:left;
margin-top:10px;
}

.field-label {
display:block;
margin-bottom:8px;
font-size:13px;
font-weight:600;
opacity:.75;
padding-left:4px;
letter-spacing:.3px;
}

.field {
width:100%;
padding:14px;
border-radius:14px;
border:1px solid rgba(255,255,255,0.15);
background:rgba(255,255,255,0.03);
color:white;
outline:none;
font-size:15px;
box-sizing:border-box;
transition:.25s;
font-family:'Inter',sans-serif;
}

.field:focus {
border-color:rgba(255,255,255,0.35);
background:rgba(255,255,255,0.05);
}

.field::placeholder {
color:rgba(255,255,255,0.45);
}

input[type="date"] {
color-scheme:dark;
}

.cta {
width:100%;
padding:14px;
border-radius:999px;
background:white;
color:black;
margin-top:18px;
cursor:pointer;
transition:.3s;
border:none;
font-weight:600;
font-size:15px;
}

.cta:hover {
transform:translateY(-2px);
}

.subtle {
opacity:.5;
font-size:13px;
line-height:1.5;
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

.success-popup-overlay {
position:fixed;
inset:0;
background:rgba(0,0,0,0.82);
backdrop-filter:blur(8px);
display:flex;
align-items:center;
justify-content:center;
z-index:999;
padding:20px;
animation:fadeIn .3s ease;
}

.success-popup {
width:100%;
max-width:420px;
background:#0d0d0d;
border:1px solid rgba(255,255,255,0.08);
border-radius:28px;
padding:42px 30px;
text-align:center;
box-shadow:0 0 60px rgba(255,255,255,0.06);
animation:popupIn .35s ease;
}

.success-icon {
width:74px;
height:74px;
border-radius:50%;
background:white;
color:black;
display:flex;
align-items:center;
justify-content:center;
font-size:34px;
font-weight:800;
margin:0 auto 24px;
}

.success-popup h2 {
font-family:'Baloo 2';
font-size:34px;
line-height:1.05;
margin:0 0 18px;
}

.success-popup p {
opacity:.75;
line-height:1.7;
font-size:15px;
margin:0;
}

.popup-button {
margin-top:28px;
width:100%;
padding:14px;
border:none;
border-radius:999px;
background:white;
color:black;
font-weight:600;
cursor:pointer;
transition:.3s;
font-size:15px;
}

.popup-button:hover {
transform:translateY(-2px);
}

@keyframes fadeIn {
from {
opacity:0;
}
to {
opacity:1;
}
}

@keyframes popupIn {
from {
opacity:0;
transform:scale(.94) translateY(10px);
}
to {
opacity:1;
transform:scale(1) translateY(0);
}
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

<form onSubmit={handleSubmit} style={{width:"100%"}}>

<div className="field-group">
<label className="field-label">
YOUR NAME
</label>

<input 
name="name" 
className="field" 
placeholder="enter your full name" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR EMAIL
</label>

<input 
name="email" 
type="email" 
className="field" 
placeholder="enter your email" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR DATE OF BIRTH
</label>

<input 
name="birthdate" 
type="date"
className="field" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR INSTAGRAM
</label>

<input 
name="instagram" 
className="field" 
placeholder="@yourusername" 
required 
/>
</div>

<button className="cta">
{isSubmitting ? "sending..." : "join the clique"}
</button>
</form>

<div style={{width:"100%", marginTop:"10px"}}>
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
<div 
key={i} 
className={`dot ${i <= progressStage ? "active" : ""}`}
/>
))}
</div>

{progressStage >= 5 && !vipSubmitted && (
<>
<p style={{marginTop:10}}>
you’ve attended 5 events — we appreciate your trust.
</p>

<form onSubmit={handleVIPSubmit} style={{width:"100%"}}>

<div className="field-group">
<label className="field-label">
YOUR NAME
</label>

<input 
name="name" 
className="field" 
placeholder="enter your full name" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR EMAIL
</label>

<input 
name="email" 
className="field" 
placeholder="enter your email" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR INSTAGRAM
</label>

<input 
name="instagram" 
className="field" 
placeholder="@yourusername" 
required 
/>
</div>

<div className="field-group">
<label className="field-label">
YOUR NUMBER
</label>

<input 
name="phone" 
className="field" 
placeholder="enter your number" 
required 
/>
</div>

<button className="cta">
unlock full access
</button>
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

{isSubmitted && (
<div className="success-popup-overlay">
<div className="success-popup">

<div className="success-icon">✓</div>

<h2>
thank you for your registration.
</h2>

<p>
your registration has been received successfully.
<br /><br />
if selected, you may receive a message from us soon regarding upcoming events, experiences and exclusive invitations.
</p>

<button 
className="popup-button"
onClick={() => setIsSubmitted(false)}
>
continue
</button>

</div>
</div>
)}

</div>
</>
);
}

import { useEffect, useState, type FormEvent } from "react";
import logo from "./assets/pff.png";

export default function App() {

const [stage, setStage] = useState<"hidden" | "quote" | "form">("hidden");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);



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

.birthdate-wrapper {
position:relative;
width:100%;
}

.birthdate-placeholder {
position:absolute;
left:14px;
top:50%;
transform:translateY(-50%);
font-size:15px;
opacity:0.45;
pointer-events:none;
font-family:'Inter',sans-serif;
z-index:1;
transition:.2s;
}

.birthdate-field {
position:relative;
z-index:2;
background:transparent;
}

.birthdate-field:focus + .birthdate-placeholder,
.birthdate-field:valid + .birthdate-placeholder {
opacity:0;
}

input[type="date"] {
color-scheme:dark;
}

input[type="date"]::-webkit-datetime-edit {
color:transparent;
}

input[type="date"]:focus::-webkit-datetime-edit,
input[type="date"]:valid::-webkit-datetime-edit {
color:white;
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

<p
  style={{
    marginTop: "-8px",
    marginBottom: "10px",
    opacity: 0.55,
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
  }}
>
  Social Run — 13 June
</p>

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

<div className="birthdate-wrapper">

<input 
name="birthdate" 
type="date"
className="field birthdate-field" 
required 
/>

<span className="birthdate-placeholder">
enter your birthdate
</span>

</div>
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

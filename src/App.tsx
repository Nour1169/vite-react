import { useEffect, useState, type FormEvent } from 'react';
import './App.css';

type ArchiveEvent = { title: string; category: string; image: string; description: string };
type AvailableEvent = { id: string; name: string; available: boolean };

const archiveEvents: ArchiveEvent[] = [
  { title: 'NIKE × CLIQUE', category: 'SOCIAL RUN', image: '/images/nike-group.jpeg', description: 'Movement, community and new connections.' },
  { title: 'BROOKS × CLIQUE', category: 'SOCIAL RUN', image: '/images/brooks.jpeg', description: 'An unforgettable running experience.' },
  { title: 'THE CLIQUE HUNT', category: 'STADSFEESTZAAL', image: '/images/stadsfeestzaal.jpeg', description: 'Challenges, community and €1,000 in prizes.' },
  { title: 'GARRINCHA × CLIQUE', category: 'PADEL EXPERIENCE', image: '/images/garrincha.jpeg', description: 'Sport, competition and community.' },
  { title: 'TANGIER RUN CLUB × CLIQUE', category: 'INTERNATIONAL EXPERIENCE', image: '/images/tangier.jpeg', description: 'Two countries. One big community.' },
  { title: "DOK'N DINE × CLIQUE", category: 'CREATIVE EXPERIENCE', image: '/images/dokndine.jpeg', description: 'Bringing people together beyond the ordinary.' },
  { title: 'CLIQUE COMMUNITY CULTURE', category: 'MUSIC & EXPERIENCES', image: '/images/dj.jpeg', description: 'More than a run. More than an event.' },
];

const partners = ['NIKE', 'BROOKS', 'DAVID LLOYD', 'RED BULL', 'META', 'OAKLEY', 'RAY-BAN', 'GARRINCHA'];

// Voeg pas een evenement toe als registratie daadwerkelijk kan worden verwerkt.
const availableEvents: AvailableEvent[] = [];

export default function App() {
  const [status, setStatus] = useState('');
  const openEvents = availableEvents.filter((event) => event.available);
  const registrationOpen = openEvents.length > 0;

  useEffect(() => {
    document.title = 'CLIQUE Antwerp — Social Community';
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleApply(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Registration is not connected yet.No information was sent.');
  }
  return (
    <>
      <nav className="nav">
        <a href="#top" aria-label="CLIQUE Antwerp homepage">
          <img className="nav-logo" src="/images/clique-logo.png" alt="CLIQUE Antwerp logo" />
        </a>
        <div className="nav-links">
          <a href="#story">STORY</a>
          <a href="#events">EVENTS</a>
          <a href="#partners">PARTNERS</a>
          <a href="#join">JOIN ↗</a>
        </div>
      </nav>

      <main id="top">
        <section className="intro" aria-label="CLIQUE Antwerp">
          <img className="intro-logo" src="/images/clique-logo.png" alt="CLIQUE social community Antwerp official logo" />
          <a href="#hero" className="intro-caption">SCROLL TO ENTER</a>
        </section>

        <section className="hero" id="hero">
          <img className="hero-img" src="/images/brooks.jpeg" alt="CLIQUE social running community" />
          <div className="hero-content">
            <div className="eyebrow">ANTWERP / BELGIUM — SOCIAL COMMUNITY</div>
            <h1>NOT JUST A<br />COMMUNITY.<br /><em>A MOVEMENT.</em></h1>
            <p>Real people. Unexpected connections.<br />Experiences worth remembering.</p>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-inner">
            {[0, 1].map((i) => (
              <span key={i}>YOU&apos;RE ONE CLIQUE AWAY ✳ MORE THAN A RUN ✳ THIS IS ONLY THE BEGINNING ✳</span>
            ))}
          </div>
        </div>

        <section className="section" id="story">
          <div className="section-label">01 / THE STORY BEHIND CLIQUE</div>
          <h2 className="reveal">IT STARTED AS<br />AN ASSIGNMENT.<br /><span className="soft">IT BECAME<br />SOMETHING REAL.</span></h2>
          <div className="story-copy reveal">
            <p>What began as a student project turned into something we never imagined.</p>
            <p>One idea. A few people. And a belief that bringing people together could lead to something bigger.</p>
            <p>From our first gatherings to unforgettable experiences with inspiring people and global brands, CLIQUE has grown beyond anything we originally planned.</p>
            <p>We&apos;re not just about running. Not just about events. We&apos;re about the people you meet, the connections you make and the moments that stay with you.</p>
            <p><strong style={{ color: 'white' }}>And we&apos;re only getting started.</strong></p>
          </div>
          <img className="story-image" src="/images/nike-group.jpeg" alt="CLIQUE community at Nike" loading="lazy" />
        </section>
         <section className="section cream" id="events">
          <div className="section-label">02 / OUR ARCHIVE</div>
          <h2 className="reveal">SELECTED<br />EXPERIENCES.</h2>
          <div className="events" id="eventsGrid">
            {archiveEvents.map((event, index) => (
              <article className="event reveal" key={event.title}>
                <img className="event-img" src={event.image} alt={event.title} loading="lazy" />
                <small>{String(index + 1).padStart(2, '0')} / {event.category}</small>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="partners">
          <div className="section-label">03 / THE BRANDS WE CONNECT WITH</div>
          <h2 className="reveal">BETTER<br />TOGETHER.</h2>
          <p className="partners-copy">A selection of brands, collaborators and event hosts we&apos;ve connected with along the way.</p>
          <div className="brand-wall">
            {partners.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
          <div className="brand-foot">REAL CONNECTIONS. REAL EXPERIENCES.</div>
        </section>

        <section className="section press" id="press">
          <div className="section-label">04 / IN THE SPOTLIGHT</div>
          <h2 className="reveal">A CITY.<br />A CHALLENGE.<br />A COMMUNITY.</h2>
          <p>Our Clique Hunt transformed Antwerp&apos;s iconic Stadsfeestzaal into an interactive experience with challenges, surprises and €1,000 in prizes.</p>
          <p>A moment that brought our community together in a completely different way.</p>
          <img src="/images/stadsfeestzaal.jpeg" alt="CLIQUE Hunt at Stadsfeestzaal Antwerp" loading="lazy" />
          <div className="press-bottom">CLIQUE IN THE PRESS / HET LAATSTE NIEUWS</div>
        </section>

        <section className="section cream" id="join">
          <div className="section-label">05 / COMMUNITY ACCESS</div>
          <h2 className="reveal">YOU&apos;RE ONE<br />CLIQUE AWAY.</h2>
          <p className="join-intro">Every experience starts with an application. Spots are limited and our team personally selects participants.</p>
          {!registrationOpen && (
            <div className="notice" id="eventNotice">
              <strong>NO UPCOMING EVENTS</strong>
              <p>Our next experiences are in the making. Registration will open when a new event is announced.</p>
            </div>
          )}
          <form className="form" id="applyForm" onSubmit={handleApply}>
            <select name="event" id="eventSelect" required disabled={!registrationOpen} defaultValue="">
              <option value="">{registrationOpen ? 'SELECT AN EXPERIENCE' : 'NO EVENTS AVAILABLE'}</option>
              {openEvents.map((event) => <option value={event.id} key={event.id}>{event.name}</option>)}
            </select>
            <input type="text" name="name" placeholder="FULL NAME" autoComplete="name" required disabled={!registrationOpen} />
            <input type="email" name="email" placeholder="EMAIL ADDRESS" autoComplete="email" required disabled={!registrationOpen} />
            <input type="text" name="instagram" placeholder="INSTAGRAM @HANDLE" disabled={!registrationOpen} />
            <input type="date" name="birthdate" aria-label="Date of birth" disabled={!registrationOpen} />
            <label className="consent">
              <input type="checkbox" name="consent" required disabled={!registrationOpen} />
              <span>I agree to the processing of my personal information for this event application.</span>
            </label>
            <button id="applyButton" type="submit" disabled={!registrationOpen}>
              {registrationOpen ? 'REQUEST A SPOT ↗' : 'REGISTRATION CURRENTLY CLOSED'}
            </button>
            <p id="formStatus" role="status">{status}</p>
          </form>
        </section>
      </main>

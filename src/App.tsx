export default function CliqueStreetHomepage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

        :root {
          --bg: #0a0a0a;
          --panel: #121212;
          --soft: #1b1b1b;
          --text: #f5f5f5;
          --muted: #b8b8b8;
          --line: rgba(255,255,255,0.14);
          --cream: #f3efe9;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); }

        .logo-font {
          font-family: 'Fredoka', sans-serif;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .body-font {
          font-family: 'Inter', sans-serif;
        }

        .blob-outline {
          border: 3px solid white;
          border-radius: 42% 58% 52% 48% / 41% 40% 60% 59%;
        }

        .soft-blob {
          border-radius: 42% 58% 55% 45% / 43% 37% 63% 57%;
        }

        .pill-outline {
          border: 1.6px solid rgba(255,255,255,0.85);
          border-radius: 999px;
        }

        .grid-noise {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 36px 36px;
        }
      `}</style>

      <div className="relative overflow-hidden grid-noise">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_30%)]" />

        <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#top" className="inline-flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-[15px] border border-white/20 bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.12)]">
              <span className="logo-font text-2xl leading-none">C</span>
            </div>
            <div className="leading-tight">
              <div className="logo-font text-2xl uppercase tracking-[0.12em] sm:text-3xl">Clique</div>
              <div className="body-font text-[11px] uppercase tracking-[0.32em] text-white/55 sm:text-xs">social community antwerp</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 body-font md:flex">
            <a href="#about" className="text-sm text-white/70 transition hover:text-white">About</a>
            <a href="#events" className="text-sm text-white/70 transition hover:text-white">Events</a>
            
            <a href="#join" className="text-sm text-white/70 transition hover:text-white">Join</a>
          </nav>

          <a
            href="#join"
            className="body-font inline-flex items-center justify-center rounded-full border border-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
          >
            Request Invite
          </a>
        </header>

        <main id="top" className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-5 sm:px-8 lg:px-10 lg:pb-24 lg:pt-8">
          <section className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="body-font mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.32em] text-white/70 backdrop-blur">
                Antwerp • community • culture • movement
              </div>

              <h1 className="logo-font max-w-3xl text-[4rem] leading-[0.9] tracking-tight sm:text-[5.4rem] lg:text-[7rem]">
                Join the
                <span className="block text-white">Clique.</span>
              </h1>

              <p className="body-font mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                A new generation social community in Antwerp. Built around runs, curated gatherings, music, creative energy and people who actually want to connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#join"
                  className="body-font inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5"
                >
                  Join the community
                </a>
                <a
                  href="#events"
                  className="body-font inline-flex items-center justify-center rounded-full border border-white/80 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                >
                  See the vibe
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ['Runs + socials', 'Street-energy meetups'],
                  ['Invite-based', 'Curated but warm'],
                  ['Antwerp first', 'Local people, real vibe'],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <div className="body-font text-sm font-semibold uppercase tracking-[0.18em] text-white">{title}</div>
                    <div className="body-font mt-2 text-sm leading-6 text-white/60">{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="absolute -left-3 top-8 h-28 w-28 rounded-full border border-white/15 bg-white/5 blur-[1px]" />
              <div className="absolute -right-2 bottom-14 h-20 w-20 rounded-full border border-white/10 bg-white/5" />

              <div className="rounded-[34px] border border-white/10 bg-[#f4efe8] p-4 shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:p-5">
                <div className="relative overflow-hidden rounded-[30px] bg-black p-6 sm:p-8">
                  <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-white/65 body-font">
                    launch drop
                  </div>

                  <div className="blob-outline mx-auto mt-3 w-full max-w-[360px] bg-black px-6 py-8 text-center sm:px-8 sm:py-10">
                    <div className="logo-font text-[4.2rem] leading-none text-white sm:text-[5.5rem]">clique</div>
                    <div className="body-font mt-2 text-lg font-extrabold lowercase tracking-tight text-white sm:text-2xl">
                      social community
                    </div>
                    <div className="body-font text-2xl font-black tracking-tight text-white sm:text-4xl">
                      Antwerp
                    </div>
                  </div>

                  <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.04] p-5 text-white">
                    <div className="body-font text-xs uppercase tracking-[0.32em] text-white/55">What Clique feels like</div>
                    <p className="mt-4 logo-font text-3xl leading-[1.05] sm:text-[2.9rem]">
                      More community.
                      <span className="block">Less classic.</span>
                    </p>
                    <p className="body-font mt-4 text-base leading-7 text-white/68">
                      Designed for a playful, bold and street-inspired identity that matches the new logo instead of a luxury editorial look.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="mt-16 grid gap-5 md:grid-cols-3 lg:mt-24">
            {[
              {
                kicker: 'community first',
                title: 'Not just events',
                text: 'Clique is a recurring social world. People come for a run, stay for the atmosphere and return for the people.',
              },
              {
                kicker: 'street-inspired',
                title: 'Rounded, bold, playful',
                text: 'The design language uses softer shapes, strong type and high-contrast black and white to mirror the logo.',
              },
              {
                kicker: 'young Antwerp',
                title: 'Built for real connection',
                text: 'Creative people, ambitious people, sporty people and social people all in one scene, without feeling too formal.',
              },
            ].map((card) => (
              <article key={card.title} className="soft-blob border border-white/10 bg-white/[0.035] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
                <div className="body-font text-[11px] uppercase tracking-[0.3em] text-white/50">{card.kicker}</div>
                <h2 className="logo-font mt-4 text-3xl leading-tight">{card.title}</h2>
                <p className="body-font mt-4 text-base leading-7 text-white/65">{card.text}</p>
              </article>
            ))}
          </section>

          <section id="events" className="mt-16 lg:mt-24">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <div className="body-font text-xs uppercase tracking-[0.32em] text-white/50">Event formats</div>
                <h2 className="logo-font mt-3 text-4xl sm:text-5xl">How Clique shows up</h2>
              </div>
              <div className="body-font max-w-xl text-sm leading-6 text-white/60">
                Social runs, café meetups, rooftop moments, creative collabs and invite-only gatherings that feel curated but never stiff.
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['Clique Run — First Event', 'Our first community run in Antwerp. Tap here to see the event and join the run.', '#first-run'],
                ['Community Nights', 'Music, conversation, visuals and a room full of good energy.', '#'],
                ['Creative Drops', 'Brand moments, collaborations, content and limited access reveals.', '#'],
                ['Secret Unlocks', 'QR-based invites, hidden pages and members-only access moments.', '#'],
              ].map(([title, text, href], index) => (
                <a key={title} href={href} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#151515]">
                  <div className="body-font mb-10 text-6xl font-black text-white/10">0{index + 1}</div>
                  <h3 className="logo-font text-3xl">{title}</h3>
                  <p className="body-font mt-3 text-base leading-7 text-white/65">{text}</p>
                  {title === 'Clique Run — First Event' && (
                    <div className="body-font mt-5 inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 transition group-hover:bg-white group-hover:text-black">
                      Open event page
                    </div>
                  )}
                </a>
              ))}
            </div>
          </section>

          <section id="first-run" className="mt-16 lg:mt-24">
            <div className="overflow-hidden rounded-[38px] border border-white/10 bg-[#f3efe9] p-5 text-black shadow-[0_35px_120px_rgba(0,0,0,0.35)] sm:p-6">
              <div className="grid gap-6 rounded-[30px] bg-black p-6 text-white sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div>
                  <div className="body-font text-xs uppercase tracking-[0.32em] text-white/50">First running event</div>
                  <h2 className="logo-font mt-3 text-4xl leading-tight sm:text-5xl">Clique Run #01</h2>
                  <p className="body-font mt-4 max-w-2xl text-base leading-8 text-white/70">
                    Our first community run in Antwerp. Easy energy, good people, a social pace and a strong first moment for the Clique community.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      ['Date', 'Sunday — 10:30'],
                      ['Location', 'Antwerp Zuid'],
                      ['Pace', 'Social / all levels'],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                        <div className="body-font text-[11px] uppercase tracking-[0.28em] text-white/45">{label}</div>
                        <div className="logo-font mt-3 text-2xl leading-tight">{value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#join" className="body-font inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:-translate-y-0.5">
                      Join this run
                    </a>
                    
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                  <div className="body-font text-xs uppercase tracking-[0.32em] text-white/50">What to expect</div>
                  <div className="mt-5 space-y-4">
                    {[
                      'Warm welcome and easy social check-in before the start',
                      'A community-first run built for meeting people naturally',
                      'Post-run coffee, content moments and a relaxed hangout vibe',
                      'Potential QR unlocks, hidden drops or invite-only extras after attendance',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-white" />
                        <p className="body-font text-sm leading-6 text-white/74">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          

          

          <section id="join" className="mt-16 pb-10 lg:mt-24">
            <div className="overflow-hidden rounded-[38px] border border-white/10 bg-white text-black shadow-[0_30px_120px_rgba(255,255,255,0.08)]">
              <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:p-12">
                <div>
                  <div className="body-font text-xs uppercase tracking-[0.32em] text-black/45">Request access</div>
                  <h2 className="logo-font mt-3 text-4xl leading-tight sm:text-5xl">Join the Clique run.</h2>
                  <p className="body-font mt-4 max-w-xl text-base leading-8 text-black/70">
                    Enter your details and request access to the next Clique event. Limited spots available.
                  </p>
                </div>

                <form className="flex flex-col gap-4" action="https://api.web3forms.com/submit" method="POST">
                  <input type="hidden" name="access_key" value="a12099ca-d298-46b6-84cb-4a3f52aea946" />
                  <input type="hidden" name="subject" value="Nieuwe aanvraag via Clique Antwerp" />
                  <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                  <input
                    className="w-full rounded-full border border-black/20 px-5 py-3"
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                  />

                  <input
                    className="w-full rounded-full border border-black/20 px-5 py-3"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />

                  <input
                    className="w-full rounded-full border border-black/20 px-5 py-3"
                    type="text"
                    name="instagram"
                    placeholder="Instagram (optional)"
                  />

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5"
                  >
                    Request invite
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

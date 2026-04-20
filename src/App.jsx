import { useRef } from "react";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";
import { useScrollReveal } from "./components/useScrollReveal";

function StatCard({ number, label, sub, delay = 0, accent = "#2D5016" }) {
  return (
    <div
      className="reveal rounded-xl p-6 text-center"
      style={{
        background: "#FAF7F1",
        border: "1px solid #DDD5C2",
        transitionDelay: `${delay}s`,
      }}
    >
      <div
        className="font-serif font-black mb-1"
        style={{ fontSize: 42, color: accent, letterSpacing: "-0.02em" }}
      >
        {number}
      </div>
      <div className="font-medium text-sm text-ink mb-1">{label}</div>
      {sub && (
        <div className="text-xs" style={{ color: "#7A6E5F" }}>
          {sub}
        </div>
      )}
    </div>
  );
}

function QuoteCard({ quote, name, location, delay = 0 }) {
  return (
    <div
      className="reveal rounded-xl p-6"
      style={{
        background: "#FAF7F1",
        border: "1px solid #DDD5C2",
        transitionDelay: `${delay}s`,
      }}
    >
      <p
        className="text-sm leading-relaxed mb-4 italic"
        style={{ color: "#5A4E3A" }}
      >
        "{quote}"
      </p>
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: "#2D5016", color: "#F5F0E8" }}
        >
          {name[0]}
        </div>
        <div>
          <div className="text-xs font-medium text-ink">{name}</div>
          <div className="text-xs" style={{ color: "#9E937F" }}>
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}

function InterestBar({ label, percent, delay = 0 }) {
  return (
    <div className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-ink">{label}</span>
        <span className="text-sm font-bold" style={{ color: "#2D5016" }}>
          {percent}%
        </span>
      </div>
      <div
        className="rounded-full overflow-hidden"
        style={{ height: 8, background: "#E8E0D0" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${percent}%`,
            background: "linear-gradient(90deg, #2D5016, #5A7A3A)",
          }}
        />
      </div>
    </div>
  );
}

export default function App() {
  const contactRef = useRef(null);
  useScrollReveal();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onJoinClick={scrollToContact} />

      {/* ─── HERO ─── */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{
          minHeight: "92vh",
          padding: "80px 24px",
          background:
            "linear-gradient(135deg, #F5F0E8 0%, #EDE0CC 55%, #E5D0B0 100%)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-8%",
            right: "-4%",
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(45,80,22,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "4%",
            left: "-6%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(196,84,26,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="badge animate-fade-in mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Community research · Ocean Grove, VIC
            </div>

            <h1
              className="font-serif font-black leading-none mb-7 animate-fade-up"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-0.03em",
                opacity: 0,
                lineHeight: 1.05,
              }}
            >
              We tested an idea
              <br />
              in our neighbourhood.
              <br />
              <em className="text-forest">Here's what happened.</em>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 animate-fade-up delay-200"
              style={{ color: "#7A6E5F", maxWidth: 460, opacity: 0 }}
            >
              Alexandria was a local experiment to find out whether neighbours in
              Ocean Grove would swap, lend, and share books with each other. QR
              codes placed around the area. A simple landing page. Real responses
              from real locals.
            </p>

            <div
              className="flex flex-wrap gap-3 animate-fade-up delay-400"
              style={{ opacity: 0 }}
            >
              <button
                className="btn-primary"
                style={{ fontSize: 16, padding: "15px 36px" }}
                onClick={scrollToContact}
              >
                Get Involved
              </button>
              <a href="#results" className="btn-outline" style={{ fontSize: 15 }}>
                See the results
              </a>
            </div>
          </div>

          {/* Spinning circle */}
          <div
            className="hidden md:flex flex-col items-center justify-center animate-fade-in delay-300"
            style={{ opacity: 0 }}
          >
            <div className="relative" style={{ width: 300, height: 300 }}>
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  <path
                    id="spin-circle"
                    fill="none"
                    d="M 150,150 m -118,0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
                  />
                  <text
                    style={{
                      fill: "#2D5016",
                      fontSize: 13,
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: 5,
                    }}
                  >
                    <textPath href="#spin-circle">
                      · SWAP · LEND · CONNECT · READ · SWAP · LEND · CONNECT · READ
                    </textPath>
                  </text>
                </svg>
              </div>
              <div
                className="absolute animate-pulse-ring"
                style={{
                  inset: "18%",
                  borderRadius: "50%",
                  border: "1.5px solid #2D5016",
                }}
              />
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{ inset: "20%", background: "#ffffff" }}
              >
                <img
                  src="/logo-alexandria.svg"
                  alt="Alexandria"
                  style={{ width: "60%", height: "60%", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="py-12 px-6" style={{ background: "#2D5016" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3">
          {[
            { n: "147", label: "QR code scans" },
            { n: "23", label: "Responses collected" },
            { n: "6 wks", label: "Experiment duration" },
          ].map((s, i) => (
            <div
              key={i}
              className="text-center py-5 reveal"
              style={{
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="font-serif font-black mb-1.5"
                style={{ fontSize: 34, color: "#F5F0E8", letterSpacing: "-0.02em" }}
              >
                {s.n}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(245,240,232,0.5)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── THE PROJECT ─── */}
      <section id="concept" className="py-28 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="ornament-divider reveal mb-14 max-w-xs mx-auto md:max-w-none">
            ✦ The Project ✦
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="reveal-left">
              <h2
                className="font-serif font-extrabold mb-7"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                What if books were
                <br />
                <em className="text-terra">a reason to meet?</em>
              </h2>
              <p className="text-base leading-loose mb-5" style={{ color: "#7A6E5F" }}>
                People are more isolated than ever — even in small, close-knit
                communities like Ocean Grove. Technology has made it easier to
                stay connected globally while losing touch locally.
              </p>
              <p className="text-base leading-loose mb-5" style={{ color: "#7A6E5F" }}>
                Alexandria was built on a simple premise: use a book — a
                physical, human object — as an excuse to meet your neighbours.
                You have something I want. I have something you might love.
                Let's trade.
              </p>
              <p className="text-base leading-loose mb-8" style={{ color: "#7A6E5F" }}>
                QR codes were placed around Ocean Grove's main area, pointing to
                this landing page. The goal was simple: do locals actually want
                this? The answer turned out to be more interesting than expected.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "🔄",
                    text: "Swap a book you've finished for one you haven't — nobody loses anything.",
                  },
                  {
                    icon: "📍",
                    text: "Hyper-local by design — books and people within 5km of you.",
                  },
                  {
                    icon: "📖",
                    text: "List to swap, lend, or sell. The choice is yours.",
                  },
                  {
                    icon: "🤝",
                    text: "Every exchange happens in person. That's the whole point.",
                  },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="text-xl mt-0.5">{f.icon}</span>
                    <span className="text-sm leading-relaxed text-ink">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div
                className="reveal-right rounded-xl p-7"
                style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-5"
                  style={{ color: "#7A6E5F" }}
                >
                  How the test worked
                </p>
                {[
                  {
                    label: "QR codes placed around Ocean Grove",
                    sub: "Positioned in high-foot-traffic public areas",
                  },
                  {
                    label: "Pointed to a simple landing page",
                    sub: "Explained the concept and captured interest",
                  },
                  {
                    label: "Locals responded via a short form",
                    sub: "Name, postcode, and what they'd want to do",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3.5"
                    style={{ borderBottom: i < 2 ? "1px solid #E8E0D0" : "none" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "#2D5016" }}
                    />
                    <div>
                      <div className="text-sm font-medium text-ink">{r.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: "#7A6E5F" }}>
                        {r.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="reveal rounded-xl p-6 flex items-start gap-4"
                style={{ background: "#EDE7D9", border: "1px solid #CCC0A8" }}
              >
                <span className="text-2xl mt-0.5">📍</span>
                <div>
                  <div className="font-semibold text-sm mb-1.5 text-ink">
                    Why Ocean Grove?
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#7A6E5F" }}>
                    Ocean Grove is a close-knit coastal community where people
                    already know their neighbours more than most Australian suburbs.
                    If a project like this works anywhere, it works here first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RESULTS DASHBOARD ─── */}
      <section id="results" className="py-28 px-6" style={{ background: "#EDE7D9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-divider reveal mb-5 max-w-xs mx-auto">
              ✦ The Results ✦
            </div>
            <h2
              className="font-serif font-extrabold reveal"
              style={{ fontSize: "clamp(26px, 3vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Six weeks. Real data.
            </h2>
            <p
              className="reveal text-base mt-4"
              style={{ color: "#7A6E5F", maxWidth: 480, margin: "16px auto 0" }}
            >
              Here's what happened when real locals scanned those codes and landed on this page.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <StatCard number="147" label="QR Scans" sub="Total code interactions" delay={0} />
            <StatCard number="89" label="Unique Visits" sub="Distinct visitors to site" delay={0.1} />
            <StatCard number="23" label="Responses" sub="Completed interest forms" delay={0.2} />
            <StatCard
              number="26%"
              label="Conversion"
              sub="Visits → form completions"
              delay={0.3}
              accent="#C4541A"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="reveal rounded-xl p-7"
              style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
            >
              <p
                className="text-xs uppercase tracking-widest font-medium mb-6"
                style={{ color: "#7A6E5F" }}
              >
                What respondents wanted to do
              </p>
              <div className="flex flex-col gap-5">
                <InterestBar label="📥 Borrow books" percent={74} delay={0.1} />
                <InterestBar label="🔄 Swap books" percent={65} delay={0.2} />
                <InterestBar label="💰 Sell books" percent={35} delay={0.3} />
                <InterestBar label="🛒 Buy books" percent={28} delay={0.4} />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                className="reveal rounded-xl p-7"
                style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-5"
                  style={{ color: "#7A6E5F" }}
                >
                  Where respondents came from
                </p>
                {[
                  { place: "Ocean Grove (3226)", count: 18, pct: 78 },
                  { place: "Barwon Heads (3227)", count: 3, pct: 13 },
                  { place: "Other", count: 2, pct: 9 },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: i < 2 ? "1px solid #E8E0D0" : "none" }}
                  >
                    <span className="text-sm text-ink">{r.place}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs" style={{ color: "#7A6E5F" }}>
                        {r.count} people
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{ color: "#2D5016", minWidth: 32, textAlign: "right" }}
                      >
                        {r.pct}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="reveal rounded-xl p-5 flex items-start gap-4"
                style={{ background: "#EDE7D9", border: "1px solid #CCC0A8" }}
              >
                <span className="text-xl mt-0.5">💡</span>
                <div>
                  <div className="font-semibold text-sm mb-1 text-ink">Key takeaway</div>
                  <p className="text-xs leading-relaxed" style={{ color: "#7A6E5F" }}>
                    Borrowing beat buying by nearly 3×. People have books they
                    don't need and want books they can't justify purchasing. The
                    swap economy is real — it just needs a platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT PEOPLE SAID ─── */}
      <section id="voices" className="py-28 px-6" style={{ background: "#F5F0E8" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-divider reveal mb-5 max-w-xs mx-auto">
              ✦ What People Said ✦
            </div>
            <h2
              className="font-serif font-extrabold reveal"
              style={{ fontSize: "clamp(26px, 3vw, 44px)", letterSpacing: "-0.02em" }}
            >
              In their own words.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <QuoteCard
              quote="I have so many books collecting dust on my shelf. I'd love to give them a second life rather than sending them to the op shop."
              name="Sarah"
              location="Ocean Grove"
              delay={0}
            />
            <QuoteCard
              quote="Would this work for kids' books too? We go through them so fast at home. Borrowing makes so much more sense than buying."
              name="Jess"
              location="Ocean Grove"
              delay={0.1}
            />
            <QuoteCard
              quote="Ocean Grove really needs something like this. It's such a community-minded town — I'm surprised it doesn't exist already."
              name="Mark"
              location="Barwon Heads"
              delay={0.2}
            />
            <QuoteCard
              quote="I'd love to swap my gardening collection. I've read them all twice and I know someone out there would get more out of them than me."
              name="Robyn"
              location="Ocean Grove"
              delay={0.3}
            />
            <QuoteCard
              quote="Meeting a neighbour over a book swap sounds genuinely lovely. More of this, please."
              name="David"
              location="Ocean Grove"
              delay={0.4}
            />
            <div
              className="reveal rounded-xl p-6 flex flex-col items-center justify-center text-center"
              style={{
                background: "rgba(45,80,22,0.06)",
                border: "1.5px dashed #A8C07A",
                transitionDelay: "0.5s",
              }}
            >
              <div
                className="font-serif font-black mb-2"
                style={{ fontSize: 36, color: "#2D5016" }}
              >
                23
              </div>
              <p className="text-sm font-medium text-ink mb-1">total responses</p>
              <p className="text-xs" style={{ color: "#7A6E5F" }}>
                from a 6-week, low-cost experiment with no paid promotion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE VERDICT ─── */}
      <section className="py-28 px-6" style={{ background: "#EDE7D9" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-divider reveal mb-5 max-w-xs mx-auto">
              ✦ The Verdict ✦
            </div>
            <h2
              className="font-serif font-extrabold reveal"
              style={{ fontSize: "clamp(26px, 3vw, 44px)", letterSpacing: "-0.02em" }}
            >
              Is it worth building?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className="reveal rounded-xl p-7"
              style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
            >
              <p
                className="text-xs uppercase tracking-widest font-medium mb-5"
                style={{ color: "#2D5016" }}
              >
                ✓ What worked
              </p>
              {[
                "26% conversion — well above average for a cold, zero-budget audience",
                "Strong demand for borrowing over buying — lower barrier to entry",
                "Community angle resonated — neighbours mentioned connection unprompted",
                "Minimal cost to test — just QR codes and a simple landing page",
                "Local focus drove genuine interest — nearby beats global every time",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2.5"
                  style={{ borderBottom: i < 4 ? "1px solid #E8E0D0" : "none" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: "#2D5016" }}
                  />
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </div>
              ))}
            </div>

            <div
              className="reveal rounded-xl p-7"
              style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
            >
              <p
                className="text-xs uppercase tracking-widest font-medium mb-5"
                style={{ color: "#C4541A" }}
              >
                △ The challenges
              </p>
              {[
                "Small town limits scale — Ocean Grove is a starting point, not an endpoint",
                "Platforms need critical mass — 23 responses is promising, not sufficient",
                "Needs coordination — someone has to own it and show up consistently",
                "Competing priorities — one person can't sustain this alongside other projects",
                "Trust layer needed — people will share books but need safety built in",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-2.5"
                  style={{ borderBottom: i < 4 ? "1px solid #E8E0D0" : "none" }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: "#C4541A" }}
                  />
                  <span className="text-sm leading-relaxed text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal rounded-xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, #1C2E0C 0%, #2D5016 100%)",
            }}
          >
            <p
              className="font-serif font-bold mb-3"
              style={{ fontSize: 20, color: "#F5F0E8" }}
            >
              The idea has legs. The timing needs to be right.
            </p>
            <p
              className="text-sm leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(245,240,232,0.7)" }}
            >
              Alexandria showed real demand in a small community with zero marketing budget.
              The concept is validated. Whether it gets built depends on finding the right
              collaborators, the right community, and the right moment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        ref={contactRef}
        id="contact"
        className="py-28 px-6 relative"
        style={{
          background:
            "linear-gradient(155deg, #1C2E0C 0%, #2D5016 55%, #1A3009 100%)",
        }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-20%",
            right: "-8%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,136,42,0.13) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span
              className="badge mb-5 inline-flex"
              style={{
                background: "rgba(245,240,232,0.14)",
                color: "#F5F0E8",
                border: "1px solid rgba(245,240,232,0.2)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Still interested?
            </span>
            <h2
              className="font-serif font-extrabold reveal mb-4"
              style={{
                fontSize: "clamp(28px, 4vw, 50px)",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
              }}
            >
              Want to know more?
            </h2>
            <p
              className="reveal text-sm leading-relaxed"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              If this project interests you — whether you're a potential
              collaborator, a curious local, or someone who wants to bring this
              idea to your own community — reach out below.
            </p>
          </div>

          <div
            className="reveal rounded-xl shadow-2xl"
            style={{ background: "rgba(245,240,232,0.96)", padding: "40px" }}
          >
            <WaitlistForm />
          </div>

          <p
            className="reveal text-center text-xs mt-6"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            No spam. No commitments. Just a way for us to know you're interested.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0F1A07", padding: "40px 24px 48px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img src="/logo-alexandria.svg" alt="Alexandria" style={{ height: 28 }} />
            <span className="font-serif text-xl font-bold" style={{ color: "#F5F0E8" }}>
              Alexandria
            </span>
          </div>
          <p className="text-xs" style={{ color: "#5A5040" }}>
            Made in Ocean Grove by{" "}
            <a
              href="https://wdfg-studio.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6B8F71", textDecoration: "none" }}
            >
              Arrieta
            </a>
            . © {new Date().getFullYear()} Alexandria.
          </p>
        </div>
      </footer>
    </div>
  );
}

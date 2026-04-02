import { useRef } from "react";
import Navbar from "./components/Navbar";
import WaitlistForm from "./components/WaitlistForm";
import { useScrollReveal } from "./components/useScrollReveal";

/* ── Step card ── */
function StepCard({ number, icon, title, body, delay = 0 }) {
  return (
    <div className="step-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="flex justify-between items-start mb-5">
        <span className="text-4xl">{icon}</span>
        <span
          className="font-serif font-black leading-none"
          style={{ fontSize: 56, color: "rgba(45,80,22,0.09)" }}
        >
          {number}
        </span>
      </div>
      <h3 className="font-serif text-xl font-bold mb-3 text-ink">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#7A6E5F" }}>
        {body}
      </p>
    </div>
  );
}

export default function App() {
  const waitlistRef = useRef(null);
  useScrollReveal();

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar onJoinClick={scrollToWaitlist} />

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
              We're testing an idea — is it yours too?
            </div>

            <h1
              className="font-serif font-black leading-none mb-7 animate-fade-up"
              style={{
                fontSize: "clamp(38px, 5vw, 68px)",
                letterSpacing: "-0.03em",
                opacity: 0,
                lineHeight: 1.05,
              }}
            >
              The book is
              <br />
              the excuse.
              <br />
              <em className="text-forest">The community</em>
              <br />
              <em className="text-forest">is the point.</em>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 animate-fade-up delay-200"
              style={{ color: "#7A6E5F", maxWidth: 460, opacity: 0 }}
            >
              Alexandria is a neighbourhood book platform. Swap, rent, or sell
              books with people nearby. No algorithms. No isolation. Just books
              and the people who love them and all within 5km of you so stay
              local.
            </p>

            <div
              className="flex flex-wrap gap-3 animate-fade-up delay-400"
              style={{ opacity: 0 }}
            >
              <button
                className="btn-primary"
                style={{ fontSize: 16, padding: "15px 36px" }}
                onClick={scrollToWaitlist}
              >
                Register My Interest
              </button>
              <a
                href="#how-it-works"
                className="btn-outline"
                style={{ fontSize: 15 }}
              >
                How it works
              </a>
            </div>
          </div>

          {/* RIGHT — spinning circle */}
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
                      · SWAP · RENT · SELL · CONNECT · READ · SWAP · RENT · SELL
                      · READ
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
            { n: "5km", label: "From your door" },
            { n: "Swap", label: "Trade what you love" },
            { n: "Free", label: "To join & explore" },
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
                style={{
                  fontSize: 34,
                  color: "#F5F0E8",
                  letterSpacing: "-0.02em",
                }}
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

      {/* ─── THE IDEA ─── */}
      <section
        id="concept"
        className="py-28 px-6"
        style={{ background: "#F5F0E8" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="ornament-divider reveal mb-14 max-w-xs mx-auto md:max-w-none">
            ✦ The Idea ✦
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
                Most apps move people
                <br />
                <em className="text-terra">further apart.</em>
              </h2>
              <p
                className="text-base leading-loose mb-5"
                style={{ color: "#7A6E5F" }}
              >
                People are stressed, stretched, and more isolated than ever.
                They live in communities where they don't know their neighbours
                and technology has made that worse.
              </p>
              <p
                className="text-base leading-loose mb-5"
                style={{ color: "#7A6E5F" }}
              >
                Alexandria is built to do the opposite. It uses a simple, human
                object, a book, as a reason for two people nearby to connect.
                You have something I want. I have something you might love.
                Let's meet.
              </p>
              <p
                className="text-base leading-loose mb-8"
                style={{ color: "#7A6E5F" }}
              >
                Every swap, every rental, every sale means two people have to
                meet. They stand at a doorstep, or a café, or a park bench. They
                hand something over. Sometimes they talk. Sometimes that's the
                beginning of something — a friendship, a reading group, a
                community.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "🔄",
                    text: "Swap a book you've read for one you haven't — nobody loses anything.",
                  },
                  {
                    icon: "📍",
                    text: "Search by postcode — find books and readers within 5km of you.",
                  },
                  {
                    icon: "📖",
                    text: "List a book to swap, rent, sell, or all three. You decide.",
                  },
                  {
                    icon: "🤝",
                    text: "Meet locally. Hand it over in person. Keep it human.",
                  },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <span className="text-xl mt-0.5">{f.icon}</span>
                    <span className="text-sm leading-relaxed text-ink">
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Swap card */}
              <div
                className="reveal-right rounded-xl p-7"
                style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
              >
                <p
                  className="text-xs uppercase tracking-widest font-medium mb-5"
                  style={{ color: "#7A6E5F" }}
                >
                  Why swap changes everything
                </p>
                {[
                  {
                    label: "No money changes hands",
                    sub: "Lower barrier than renting or buying",
                  },
                  {
                    label: "Both people win",
                    sub: "Nobody feels like a transaction",
                  },
                  {
                    label: "A reason to meet",
                    sub: "The exchange happens in person",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3.5"
                    style={{
                      borderBottom: i < 2 ? "1px solid #E8E0D0" : "none",
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: "#2D5016" }}
                    />
                    <div>
                      <div className="text-sm font-medium text-ink">
                        {r.label}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "#7A6E5F" }}
                      >
                        {r.sub}
                      </div>
                    </div>
                  </div>
                ))}
                <div
                  className="mt-5 rounded-lg px-4 py-3 text-xs leading-relaxed"
                  style={{
                    background: "rgba(45,80,22,0.07)",
                    color: "#2D5016",
                  }}
                >
                  🔄 Renting and selling already exist online. What's missing is
                  the frictionless local human exchange.
                </div>
              </div>

              {/* Identity card */}
              <div
                className="reveal rounded-xl p-6 flex items-start gap-4"
                style={{ background: "#EDE7D9", border: "1px solid #CCC0A8" }}
              >
                <span className="text-2xl mt-0.5">📚</span>
                <div>
                  <div className="font-semibold text-sm mb-1.5 text-ink">
                    Your shelf is your identity
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#7A6E5F" }}
                  >
                    The books you've read say more about you than any bio.
                    Alexandria makes your shelf visible to people nearby who
                    think the same way you do. The connection and community
                    starts with a book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how-it-works"
        className="py-28 px-6"
        style={{ background: "#EDE7D9" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="ornament-divider reveal mb-5 max-w-xs mx-auto">
              ✦ How It Works ✦
            </div>
            <h2
              className="font-serif font-extrabold reveal"
              style={{
                fontSize: "clamp(26px, 3vw, 44px)",
                letterSpacing: "-0.02em",
              }}
            >
              Three steps. That's it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <StepCard
              number="01"
              icon="📚"
              title="List your shelf"
              body="Add books you're happy to share. Scan the barcode and we fill in the details automatically. Choose how you want to share — swap, rent, sell, or all three."
              delay={0}
            />
            <StepCard
              number="02"
              icon="📍"
              title="Someone nearby finds it"
              body="People search by postcode. Your books show up within 5km. They browse your shelf, find something they want, and send you a message. Simple as that."
              delay={0.12}
            />
            <StepCard
              number="03"
              icon="🤝"
              title="Meet. Exchange. Connect."
              body="Agree on the swap, rental, or sale. Meet locally to hand it over. For rentals, a deposit is held for protection and released on return. Everyone wins."
              delay={0.24}
            />
          </div>

          <div className="hidden md:flex items-center justify-center gap-2 mt-10 opacity-40">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#2D5016" }}
            />
            <div
              className="h-px"
              style={{ width: 160, background: "#2D5016" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#C4541A" }}
            />
            <div
              className="h-px"
              style={{ width: 160, background: "#C4541A" }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "#B8882A" }}
            />
          </div>
        </div>
      </section>

      {/* ─── WAITLIST ─── */}
      <section
        ref={waitlistRef}
        id="waitlist"
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
              We're testing the idea
            </span>
            <h2
              className="font-serif font-extrabold reveal mb-4"
              style={{
                fontSize: "clamp(28px, 4vw, 50px)",
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
              }}
            >
              Does this vibe with you?
            </h2>
            <p
              className="reveal text-sm leading-relaxed"
              style={{ color: "rgba(245,240,232,0.65)" }}
            >
              Register below and we'll keep you in the loop.
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
            No spam. No commitments. Just a way for us to know you're
            interested.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ background: "#0F1A07", padding: "40px 24px 48px" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-alexandria.svg"
              alt="Alexandria"
              style={{ height: 28 }}
            />
            <span
              className="font-serif text-xl font-bold"
              style={{ color: "#F5F0E8" }}
            >
              Alexandria
            </span>
          </div>
          <p className="text-xs" style={{ color: "#5A5040" }}>
            Made with love in Melbourne by{" "}
            <a
              href="https://wheredidfranciscogo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6B8F71", textDecoration: "none" }}
            >
              wheredidfranciscogo
            </a>
            . © {new Date().getFullYear()} Alexandria.
          </p>
        </div>
      </footer>
    </div>
  );
}

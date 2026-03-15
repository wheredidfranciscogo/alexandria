import { useRef } from "react";
import Navbar from "./components/Navbar";
import BookStack from "./components/BookStack";
import WaitlistForm from "./components/WaitlistForm";
import { useScrollReveal } from "./components/useScrollReveal";

/* ── Earning calculator ── */
function EarningCalc() {
  return (
    <div
      className="rounded-xl p-7 reveal-right"
      style={{ background: "#FAF7F1", border: "1px solid #DDD5C2" }}
    >
      <p
        className="text-xs uppercase tracking-widest font-medium mb-5"
        style={{ color: "#7A6E5F" }}
      >
        Quick example
      </p>
      {[
        { book: "A $25 novel", price: "$2/month", months: 12, earn: "$24" },
        { book: "A $40 textbook", price: "$4/month", months: 12, earn: "$48" },
        { book: "A $18 paperback", price: "$1/month", months: 12, earn: "$12" },
      ].map((r, i) => (
        <div
          key={i}
          className="flex items-center justify-between py-3.5"
          style={{ borderBottom: i < 2 ? "1px solid #E8E0D0" : "none" }}
        >
          <div>
            <div className="text-sm font-medium text-ink">{r.book}</div>
            <div className="text-xs mt-0.5" style={{ color: "#7A6E5F" }}>
              rented at {r.price} × {r.months} months
            </div>
          </div>
          <div
            className="font-serif font-bold text-xl"
            style={{ color: "#2D5016" }}
          >
            {r.earn}
          </div>
        </div>
      ))}
      <div
        className="mt-4 rounded-lg px-4 py-3 text-xs leading-relaxed"
        style={{ background: "rgba(45,80,22,0.07)", color: "#2D5016" }}
      >
        📌 Books that have been sitting on your shelf for years — earning
        nothing.
      </div>
    </div>
  );
}

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

/* ═══════════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════════ */
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
          {/* LEFT */}
          <div>
            <div className="badge animate-fade-in mb-6" style={{ opacity: 0 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              We're testing an idea — is it yours too?
            </div>

            <h1
              className="font-serif font-black leading-none mb-7 animate-fade-up"
              style={{
                fontSize: "clamp(40px, 5.5vw, 70px)",
                letterSpacing: "-0.03em",
                opacity: 0,
              }}
            >
              Your neighbourhood's
              <br />
              <em className="text-forest">bookshelf.</em>
            </h1>

            <p
              className="text-lg leading-relaxed mb-10 animate-fade-up delay-200"
              style={{ color: "#7A6E5F", maxWidth: 460, opacity: 0 }}
            >
              Alexandria is a peer-to-peer book rental marketplace. List your
              books, earn from them, or rent from someone a few streets away —
              searched by postcode, within 5km. Keeping it local and protected.
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

          {/* RIGHT */}
          <div
            className="hidden md:flex flex-col items-center gap-10 animate-fade-in delay-300"
            style={{ opacity: 0 }}
          >
            {/* <BookStack /> */}
            {/* Spinning circle badge */}
            <div className="relative" style={{ width: 140, height: 140 }}>
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 140 140" className="w-full h-full">
                  <path
                    id="spin-circle"
                    fill="none"
                    d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                  />
                  <text
                    style={{
                      fill: "#2D5016",
                      fontSize: 11,
                      fontFamily: "'DM Sans', sans-serif",
                      letterSpacing: 4,
                    }}
                  >
                    <textPath href="#spin-circle">
                      YOUR NEIGHBOURHOOD'S BOOKSHELF · · ·
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Pulse ring */}
              <div
                className="absolute animate-pulse-ring"
                style={{
                  inset: "22%",
                  borderRadius: "50%",
                  border: "1.5px solid #2D5016",
                }}
              />
              {/* Centre logo mark */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{ inset: "24%", background: "#2D5016" }}
              >
                <img
                  src="/logo-alexandria.svg"
                  alt="Alexandria"
                  style={{ width: "85%", height: "85%", objectFit: "contain" }}
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
            { n: "5km", label: "Search radius" },
            { n: "$0.99", label: "Per month to use" },
            { n: "Postcode", label: "Based search" },
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
                A library built
                <br />
                <em className="text-terra">by your community.</em>
              </h2>
              <p
                className="text-base leading-loose mb-5"
                style={{ color: "#7A6E5F" }}
              >
                There are hundreds of books sitting idle in houses just like
                yours. Read once, shelved, forgotten. No one else has access to
                them — maybe a close friend you talk books with, but that's it.
              </p>
              <p
                className="text-base leading-loose mb-5"
                style={{ color: "#7A6E5F" }}
              >
                What if those books could be part of something bigger? What if
                your shelf — and your neighbour's, and the person three streets
                over — could become a living community library? One that's built
                and sustained by people locally, supported by our platform.
              </p>
              <p
                className="text-base leading-loose mb-8"
                style={{ color: "#7A6E5F" }}
              >
                That's Alexandria. A place to share the books you love, discover
                new ones, and earn something from making your shelf available to
                the community around you.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "📍",
                    text: "Search by postcode — find books within 5km of you.",
                  },
                  {
                    icon: "💳",
                    text: "Borrowers pre-authorise a deposit. If a book is lost or damaged, the lender is protected automatically.",
                  },
                  {
                    icon: "📖",
                    text: "List a book to rent, sell, or both. You decide.",
                  },
                  {
                    icon: "💸",
                    text: "Payments go directly to the lender's account.",
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

            {/* Right col — earning examples + borrower note */}
            <div className="flex flex-col gap-5">
              <EarningCalc />
              <div
                className="reveal rounded-xl p-6 flex items-start gap-4"
                style={{ background: "#EDE7D9", border: "1px solid #CCC0A8" }}
              >
                <span className="text-2xl mt-0.5">📥</span>
                <div>
                  <div className="font-semibold text-sm mb-1.5 text-ink">
                    For borrowers
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#7A6E5F" }}
                  >
                    Access books in your neighbourhood for a fraction of the
                    purchase price. Pay a small rental fee. Leave a deposit
                    that's fully returned when the book comes back in good
                    shape. Read more. Spend less.
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
              title="List your book"
              body="Add a book from your shelf. Scan the barcode and we fill in the details automatically. Set your rental price, the replacement value, and whether it's available to rent, buy, or both."
              delay={0}
            />
            <StepCard
              number="02"
              icon="📍"
              title="Someone nearby finds it"
              body="Borrowers search by postcode. Your book shows up within 5km of them. They see the condition, price, and your lender rating — then request to rent."
              delay={0.12}
            />
            <StepCard
              number="03"
              icon="💰"
              title="You earn. They read."
              body="The borrower's deposit is held for protection. Rental payment goes straight to your account. Book comes back, deposit releases. Everybody wins."
              delay={0.24}
            />
          </div>

          {/* Connector dots */}
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
            <span className="text-xl">📖</span>
            <span
              className="font-serif text-xl font-bold"
              style={{ color: "#F5F0E8" }}
            >
              Alexandria
            </span>
          </div>
          <p className="text-xs" style={{ color: "#5A5040" }}>
            Made by{" "}
            <a
              href="https://wheredidfranciscogo.com"
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

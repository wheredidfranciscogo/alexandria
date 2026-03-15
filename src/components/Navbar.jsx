import { useState, useEffect } from "react";

export default function Navbar({ onJoinClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "The idea", href: "#concept" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Who it's for", href: "#waitlist" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(245,240,232,0.92)"
          : "rgba(245,240,232,0.7)",
        backdropFilter: "blur(14px)",
        borderBottom: scrolled
          ? "1px solid rgba(180,150,100,0.3)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <img
              src="/logo-alexandria.svg"
              alt="Alexandria"
              height="24"
              style={{ height: 24 }}
            />
          </a>
          <span className="font-serif text-xl font-bold text-forest tracking-tight">
            Alexandria
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="btn-primary hidden md:inline-flex"
            style={{ padding: "9px 22px", fontSize: 14 }}
            onClick={onJoinClick}
          >
            Join Waitlist
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 bg-ink transition-all duration-200"
              style={{
                transform: menuOpen ? "translateY(8px) rotate(45deg)" : "",
              }}
            />
            <span
              className="block w-5 h-0.5 bg-ink transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-ink transition-all duration-200"
              style={{
                transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-cream2 bg-cream animate-slide-down">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-ink py-1"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <button
              className="btn-primary w-full mt-2"
              onClick={() => {
                onJoinClick();
                setMenuOpen(false);
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

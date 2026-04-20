import { useState } from "react";

export default function WaitlistForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const update = (k) => (e) => setFields((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        name: fields.name,
        email: fields.email,
        message: fields.message,
      });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="animate-slide-down text-center py-10">
        <div className="text-5xl mb-5">📬</div>
        <h3 className="font-serif text-2xl font-bold text-forest mb-3">
          Message received!
        </h3>
        <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
          We'll get back to{" "}
          <strong className="text-ink">{fields.email}</strong> soon. Thanks for
          your interest in Alexandria.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label">Name *</label>
          <input
            className="form-input"
            type="text"
            placeholder="Your name"
            value={fields.name}
            onChange={update("name")}
            required
          />
        </div>
        <div>
          <label className="form-label">Email *</label>
          <input
            className="form-input"
            type="email"
            placeholder="you@example.com"
            value={fields.email}
            onChange={update("email")}
            required
          />
        </div>
      </div>

      <div>
        <label className="form-label">
          Message{" "}
          <span style={{ color: "#9E937F", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
            (optional)
          </span>
        </label>
        <textarea
          className="form-input"
          placeholder="Tell us why you're interested, or ask us anything about the project."
          value={fields.message}
          onChange={update("message")}
          rows={4}
          style={{ resize: "vertical" }}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terra bg-red-50 border border-red-200 rounded px-4 py-3">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        className="btn-primary w-full mt-1"
        type="submit"
        disabled={status === "loading"}
        style={{ padding: "15px", fontSize: 16 }}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2.5">
            <span
              className="animate-spin-fast"
              style={{
                width: 16,
                height: 16,
                border: "2px solid rgba(255,255,255,0.3)",
                borderTopColor: "#fff",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            Sending…
          </span>
        ) : (
          "Send Message →"
        )}
      </button>

      <p className="text-xs text-center" style={{ color: "#9E937F" }}>
        No spam, ever. We only write when it matters.
      </p>
    </form>
  );
}

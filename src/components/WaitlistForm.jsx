import { useState } from 'react'

export default function WaitlistForm() {
  const [fields, setFields] = useState({ name: '', email: '', city: '', interest: { lend: false, borrow: false, buy: false, sell: false } })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const update = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }))
  const toggleInterest = (k) => setFields(f => ({ ...f, interest: { ...f.interest, [k]: !f.interest[k] } }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // Netlify form submission
    try {
      const interestString = Object.entries(fields.interest).filter(([,v]) => v).map(([k]) => k).join(', ') || 'none'
      const body = new URLSearchParams({
        'form-name': 'waitlist',
        name: fields.name,
        email: fields.email,
        city: fields.city,
        interest: interestString,
      })

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="animate-slide-down text-center py-10">
        <div className="text-5xl mb-5">🎉</div>
        <h3 className="font-serif text-2xl font-bold text-forest mb-3">
          You're registered!
        </h3>
        <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
          We'll reach out to <strong className="text-ink">{fields.email}</strong> as we move forward.
          Thanks for believing in the idea.
        </p>
      </div>
    )
  }

  return (
    /* hidden Netlify form declaration required for static detection */
    <>
      <form name="waitlist" data-netlify="true" hidden>
        <input name="name" /><input name="email" /><input name="city" /><input name="interest" />
      </form>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="form-label">Name *</label>
            <input
              className="form-input"
              type="text"
              placeholder="Your name"
              value={fields.name}
              onChange={update('name')}
              required
            />
          </div>
          <div>
            <label className="form-label">Postcode</label>
            <input
              className="form-input"
              type="text"
              placeholder="3226"
              value={fields.city}
              onChange={update('city')}
            />
          </div>
        </div>

        <div>
          <label className="form-label">Email Address *</label>
          <input
            className="form-input"
            type="email"
            placeholder="emma@example.com"
            value={fields.email}
            onChange={update('email')}
            required
          />
        </div>

        <div>
          <label className="form-label">I want to… <span style={{ color: '#9E937F', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(select all that apply)</span></label>
          <div className="grid grid-cols-2 gap-2 mt-1">
            {[
              { key: 'lend',   label: 'Lend',   icon: '📤' },
              { key: 'borrow', label: 'Borrow', icon: '📥' },
              { key: 'buy',    label: 'Buy',    icon: '🛒' },
              { key: 'sell',   label: 'Sell',   icon: '💰' },
            ].map(opt => {
              const checked = fields.interest[opt.key]
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => toggleInterest(opt.key)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    background: checked ? 'rgba(45,80,22,0.07)' : '#FAF7F2',
                    border: `1.5px solid ${checked ? '#2D5016' : '#C9BFA8'}`,
                    borderRadius: 6, padding: '11px 14px',
                    cursor: 'pointer', transition: 'all 0.15s ease',
                    textAlign: 'left', width: '100%',
                  }}
                >
                  {/* Custom checkbox */}
                  <span style={{
                    width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                    border: `2px solid ${checked ? '#2D5016' : '#C9BFA8'}`,
                    background: checked ? '#2D5016' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.15s ease',
                  }}>
                    {checked && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </span>
                  <span style={{ fontSize: 14, color: checked ? '#1C1810' : '#7A6E5F', fontWeight: checked ? 500 : 400 }}>
                    {opt.icon} {opt.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {status === 'error' && (
          <p className="text-sm text-terra bg-red-50 border border-red-200 rounded px-4 py-3">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          className="btn-primary w-full mt-1"
          type="submit"
          disabled={status === 'loading'}
          style={{ padding: '15px', fontSize: 16 }}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2.5">
              <span
                className="animate-spin-fast"
                style={{
                  width: 16, height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: '#fff',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              Claiming your spot…
            </span>
          ) : 'Yes, I\'m Interested →'}
        </button>

        <p className="text-xs text-center" style={{ color: '#9E937F' }}>
          No spam, ever. We only write when it matters.
        </p>
      </form>
    </>
  )
}
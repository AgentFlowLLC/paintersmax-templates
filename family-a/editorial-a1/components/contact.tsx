'use client'

import { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    // Honeypot — must remain empty
    website: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Honeypot check — bots fill hidden fields
    if (form.website) return

    // Client-side validation
    if (!form.name.trim()) { setError('Please enter your name.'); return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#1F3B2C] py-24 md:py-40"
      aria-labelledby="contact-heading"
    >
      {/* Top brass rule */}
      <div className="h-px bg-[#B08D44]/40 w-full mb-0" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contact info */}
          <div>
            <div className="flex items-center gap-0 mb-10">
              {/* Brass double-rule eyebrow — manual for dark bg */}
              <div className="w-10 border-t-[1px] border-b-[1px] border-[#B08D44]/60 h-[5px] mr-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                Get In Touch
              </span>
              <div className="w-10 border-t-[1px] border-b-[1px] border-[#B08D44]/60 h-[5px] ml-3.5 flex-shrink-0" aria-hidden="true" />
            </div>

            <h2
              id="contact-heading"
              className="font-serif font-bold text-[#F5EFE0] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance"
            >
              Ready for a Perfect Finish?
            </h2>

            <div className="flex items-center gap-3 mt-5" aria-hidden="true">
              <div className="w-10 h-px bg-[#B08D44]/60" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }}>
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
              <div className="w-10 h-px bg-[#B08D44]/60" />
            </div>

            <p className="mt-6 text-[#8A9B8E] font-sans italic text-sm md:text-base leading-relaxed">
              Every engagement begins with a complimentary on-site estimate. We shall assess
              your surfaces, discuss your vision, and provide a transparent written quotation
              — typically within 24 hours.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-7">
              {[
                { label: 'Telephone', value: '(555) 842-0193',        href: 'tel:+15558420193' },
                { label: 'Email',     value: 'hello@manorpainting.com', href: 'mailto:hello@manorpainting.com' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44] block mb-1.5">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="underline-draw text-[#F5EFE0] font-sans text-base hover:text-[#B08D44] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}

              <div>
                <span className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44] block mb-1.5">
                  Service Area
                </span>
                <p className="text-[#8A9B8E] font-sans italic text-sm leading-relaxed">
                  Serving the greater metro area<br />within a 50-mile radius
                </p>
              </div>
            </div>

            {/* Business hours */}
            <div className="mt-10 border border-[#B08D44]/30 p-6" style={{ borderRadius: '2px' }}>
              <span className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44] block mb-4">
                Office Hours
              </span>
              <div className="flex flex-col gap-2">
                {[
                  ['Monday – Friday', '7:00 AM – 6:00 PM'],
                  ['Saturday',        '8:00 AM – 4:00 PM'],
                  ['Sunday',          'By appointment'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4">
                    <span className="text-[#8A9B8E] font-sans text-xs italic">{day}</span>
                    <span className="text-[#F5EFE0] font-sans text-xs font-semibold">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#B08D44]/30 px-8 min-h-[400px]"
                style={{ borderRadius: '2px' }}
              >
                {/* Brass diamond check */}
                <div
                  className="w-12 h-12 border border-[#B08D44] flex items-center justify-center mb-7"
                  style={{ borderRadius: '2px' }}
                >
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                    <path d="M2 7L7.5 12.5L18 2" stroke="#B08D44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-[#F5EFE0] text-2xl mb-3">
                  Enquiry Received
                </h3>
                <p className="text-[#8A9B8E] font-sans italic text-sm leading-relaxed max-w-xs">
                  Thank you. We shall review your project details and be in touch within
                  one business day to arrange your complimentary estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Free estimate enquiry form"
                noValidate
              >
                {/* Honeypot — visually hidden */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={form.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                      Full Name <span className="text-[#B08D44]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="bg-transparent border border-[#3A5840] text-[#F5EFE0] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#B08D44] placeholder:text-[#4A6B50] transition-colors"
                      style={{ borderRadius: '2px' }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                      Telephone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-transparent border border-[#3A5840] text-[#F5EFE0] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#B08D44] placeholder:text-[#4A6B50] transition-colors"
                      style={{ borderRadius: '2px' }}
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                    Email Address <span className="text-[#B08D44]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent border border-[#3A5840] text-[#F5EFE0] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#B08D44] placeholder:text-[#4A6B50] transition-colors"
                    style={{ borderRadius: '2px' }}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-[#1F3B2C] border border-[#3A5840] text-[#F5EFE0] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#B08D44] transition-colors appearance-none"
                    style={{ borderRadius: '2px' }}
                  >
                    <option value="" className="text-[#4A6B50]">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinets">Cabinet Refinishing</option>
                    <option value="deck">Deck &amp; Fence Staining</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="trim">Trim &amp; Detail Work</option>
                    <option value="other">Not Certain / Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-transparent border border-[#3A5840] text-[#F5EFE0] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#B08D44] placeholder:text-[#4A6B50] transition-colors resize-none"
                    style={{ borderRadius: '2px' }}
                    placeholder="Describe your project — scope, timeline, any particular requirements..."
                  />
                </div>

                {/* Validation error */}
                {error && (
                  <p role="alert" className="text-[#B08D44] font-sans text-xs italic">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 text-[10px] font-sans font-semibold tracking-[0.28em] uppercase px-8 py-4 bg-[#F5EFE0] text-[#1F3B2C] border border-[#F5EFE0] hover:bg-[#B08D44] hover:border-[#B08D44] hover:text-[#F5EFE0] transition-colors duration-200"
                  style={{ borderRadius: '2px' }}
                >
                  Request a Complimentary Estimate
                </button>

                <p className="text-[#4A6B50] text-[9px] font-sans text-center tracking-wide italic">
                  No obligation. We respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

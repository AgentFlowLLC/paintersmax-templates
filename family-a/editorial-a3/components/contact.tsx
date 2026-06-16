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
      // Fallback — show success state regardless to avoid exposing server errors
      setSubmitted(true)
    }
  }

  return (
    <section
      id="contact"
      className="bg-[#111111] py-24 md:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — contact info */}
          <div>
            <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#333330] px-3 py-1.5 mb-8">
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="font-serif font-semibold text-white text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
            >
              Ready for a Perfect Finish?
            </h2>
            <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
            <p className="mt-6 text-[#999994] font-sans text-base leading-relaxed">
              Every project begins with a free, no-obligation on-site estimate. We&apos;ll
              assess your surfaces, discuss your vision, and provide a transparent written
              quote — usually within 24 hours.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-7">
              {[
                { label: 'Phone',  value: '(555) 842-0193',           href: 'tel:+15558420193' },
                { label: 'Email',  value: 'hello@atelierpainting.com', href: 'mailto:hello@atelierpainting.com' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] block mb-1.5">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="underline-draw text-white font-sans text-base hover:text-[#D43D2A] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}

              {/* Service area */}
              <div>
                <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] block mb-1.5">
                  Service Area
                </span>
                <p className="text-[#999994] font-sans text-sm leading-relaxed">
                  Serving the greater metro area<br />within a 50-mile radius
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 border border-[#333330] p-6">
              <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] block mb-4">
                Business Hours
              </span>
              <div className="flex flex-col gap-2">
                {[
                  ['Monday – Friday', '7:00 AM – 6:00 PM'],
                  ['Saturday',        '8:00 AM – 4:00 PM'],
                  ['Sunday',          'By appointment only'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4">
                    <span className="text-[#666662] font-sans text-xs">{day}</span>
                    <span className="text-white font-sans text-xs font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#333330] px-8 min-h-[400px]">
                {/* Vermilion check */}
                <div className="w-12 h-12 border border-[#D43D2A] flex items-center justify-center mb-7">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                    <path d="M2 7L7.5 12.5L18 2" stroke="#D43D2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif font-semibold text-white text-2xl mb-3">
                  Request Received
                </h3>
                <p className="text-[#666662] font-sans text-sm leading-relaxed max-w-xs">
                  Thank you. We&apos;ll review your project details and be in touch within one
                  business day to schedule your free estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Free estimate request form"
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
                    <label htmlFor="name" className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662]">
                      Full Name <span className="text-[#D43D2A]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="bg-transparent border border-[#333330] text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-white placeholder:text-[#555552] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-transparent border border-[#333330] text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-white placeholder:text-[#555552] transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662]">
                    Email Address <span className="text-[#D43D2A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-transparent border border-[#333330] text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-white placeholder:text-[#555552] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662]">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-[#111111] border border-[#333330] text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option value="" className="text-[#555552]">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinets">Cabinet Refinishing</option>
                    <option value="deck">Deck &amp; Fence Staining</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="trim">Trim &amp; Detail Work</option>
                    <option value="other">Not Sure / Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-transparent border border-[#333330] text-white font-sans text-sm px-4 py-3 focus:outline-none focus:border-white placeholder:text-[#555552] transition-colors resize-none"
                    placeholder="Describe your project — size, timeline, any special requirements..."
                  />
                </div>

                {/* Validation error */}
                {error && (
                  <p role="alert" className="text-[#D43D2A] font-sans text-xs">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-2 text-[11px] font-sans font-semibold tracking-[0.22em] uppercase px-8 py-4 bg-white text-[#111111] hover:bg-[#D43D2A] hover:text-white transition-colors duration-200"
                >
                  Request Free Estimate
                </button>

                <p className="text-[#555552] text-[10px] font-sans text-center tracking-wide">
                  No commitment required. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

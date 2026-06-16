'use client'

import { useState } from 'react'
import { LocationPinHouseIcon } from '@/components/painting-icons'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#3D3530] py-24 md:py-32" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div>
            <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
              Get In Touch
            </p>
            <h2
              id="contact-heading"
              className="font-serif text-[#F2EDE4] text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              Ready for a Perfect Finish?
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
            <p className="mt-6 text-[#B8B0A8] font-sans text-base leading-relaxed">
              Every project begins with a free, no-obligation on-site estimate. We&apos;ll
              assess your surfaces, discuss your vision, and provide a transparent written quote —
              usually within 24 hours.
            </p>

            {/* Contact details */}
            <div className="mt-10 flex flex-col gap-6">
              {[
                {
                  label: 'Phone',
                  value: '(555) 842-0193',
                  href: 'tel:+15558420193',
                },
                {
                  label: 'Email',
                  value: 'hello@craftlinepainting.com',
                  href: 'mailto:hello@craftlinepainting.com',
                },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-[#C4813A] text-[10px] tracking-[0.3em] uppercase font-sans font-semibold mb-1">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-[#F2EDE4] font-sans text-base hover:text-[#C4813A] transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}

              {/* Location icon + address */}
              <div className="flex items-start gap-3">
                <LocationPinHouseIcon size={24} />
                <div>
                  <span className="text-[#C4813A] text-[10px] tracking-[0.3em] uppercase font-sans font-semibold block mb-1">
                    Service Area
                  </span>
                  <p className="text-[#B8B0A8] font-sans text-sm leading-relaxed">
                    Serving the greater metro area<br />
                    within a 50-mile radius
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 p-5 border border-[#B8B0A8]/20">
              <p className="text-[#C4813A] text-[10px] tracking-[0.3em] uppercase font-sans font-semibold mb-3">
                Business Hours
              </p>
              <div className="flex flex-col gap-1.5">
                {[
                  ['Monday – Friday', '7:00 AM – 6:00 PM'],
                  ['Saturday', '8:00 AM – 4:00 PM'],
                  ['Sunday', 'By appointment only'],
                ].map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4">
                    <span className="text-[#B8B0A8] text-xs font-sans">{day}</span>
                    <span className="text-[#F2EDE4] text-xs font-sans font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#C4813A]/30 px-8">
                <div className="w-14 h-14 bg-[#C4813A] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path
                      d="M5 14L11 20L23 8"
                      stroke="#F2EDE4"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-[#F2EDE4] text-2xl font-bold mb-3">
                  Request Received
                </h3>
                <p className="text-[#B8B0A8] font-sans text-sm leading-relaxed max-w-xs">
                  Thank you. We&apos;ll review your project details and be in touch within one business day to schedule your free estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                aria-label="Free estimate request form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[#B8B0A8] text-xs tracking-widest uppercase font-sans font-medium">
                      Full Name <span className="text-[#C4813A]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="bg-[#2A2220] border border-[#B8B0A8]/25 text-[#F2EDE4] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C4813A] placeholder:text-[#7A6F68] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[#B8B0A8] text-xs tracking-widest uppercase font-sans font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-[#2A2220] border border-[#B8B0A8]/25 text-[#F2EDE4] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C4813A] placeholder:text-[#7A6F68] transition-colors"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[#B8B0A8] text-xs tracking-widest uppercase font-sans font-medium">
                    Email Address <span className="text-[#C4813A]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="bg-[#2A2220] border border-[#B8B0A8]/25 text-[#F2EDE4] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C4813A] placeholder:text-[#7A6F68] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-[#B8B0A8] text-xs tracking-widest uppercase font-sans font-medium">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-[#2A2220] border border-[#B8B0A8]/25 text-[#F2EDE4] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C4813A] transition-colors appearance-none"
                  >
                    <option value="" className="text-[#7A6F68]">Select a service...</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="cabinets">Cabinet Refinishing</option>
                    <option value="deck">Deck &amp; Fence Staining</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="trim">Trim &amp; Detail Work</option>
                    <option value="other">Not Sure / Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[#B8B0A8] text-xs tracking-widest uppercase font-sans font-medium">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="bg-[#2A2220] border border-[#B8B0A8]/25 text-[#F2EDE4] font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#C4813A] placeholder:text-[#7A6F68] transition-colors resize-none"
                    placeholder="Describe your project — size, timeline, any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 bg-[#C4813A] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#3D3530] transition-colors"
                >
                  Request Free Estimate
                </button>

                <p className="text-[#7A6F68] text-xs font-sans text-center">
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

'use client'

import { useState, useRef } from 'react'
import { siteConfig } from '@/lib/site-config'
import { IconPhone, IconMail } from '@/components/Icons'

interface FormState {
  name: string
  phone: string
  email: string
  service: string
  message: string
  website: string // honeypot
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const SERVICE_OPTIONS = [
  'Interior Painting',
  'Exterior Painting',
  'Cabinet & Millwork Finishing',
  'Commercial Coatings',
  'Wallcovering Installation',
  'Epoxy & Specialty Coatings',
  'Not sure yet',
]

const FIELD_CLS =
  'w-full px-4 py-3 border-2 border-foreground bg-background font-sans text-sm text-foreground placeholder:text-[#999999] focus:outline-none focus:border-[#FFD400] transition-colors duration-150'

function validate(form: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Enter a valid email address.'
  if (!form.phone.trim()) errors.phone = 'Phone number is required.'
  if (!form.service) errors.service = 'Please select a service.'
  return errors
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', email: '', service: '', message: '', website: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.website) return // honeypot

    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '', website: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-16">
          <div>
            <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
                Get Started
              </span>
            </span>
            <h2
              id="contact-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              Request a Free Estimate
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base leading-relaxed text-[#555555] max-w-lg text-pretty">
              We respond to all inquiries within one business day. Estimates are issued in writing
              within 48 hours of the site visit — no pressure, no obligation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-px bg-foreground border-2 border-foreground">
          {/* Form */}
          <div className="bg-background p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-10 h-10 bg-[#FFD400] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12 L10 17 L19 7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-heading text-3xl uppercase text-foreground">
                  Estimate Request Received
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#555555] max-w-md text-pretty">
                  A member of our team will be in touch within one business day to schedule your
                  on-site assessment. Thank you for reaching out.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-sans text-sm font-semibold text-foreground underline underline-offset-4 hover:text-[#555555] transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Estimate request form">
                {/* Honeypot */}
                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="website">Website (leave blank)</label>
                  <input
                    id="website" name="website" type="text"
                    tabIndex={-1} autoComplete="off"
                    value={form.website} onChange={update('website')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Full name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Full Name *"
                      autoComplete="name"
                      value={form.name} onChange={update('name')}
                      aria-required="true" aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                      className={FIELD_CLS}
                    />
                    {errors.name && (
                      <p id="name-err" role="alert" className="mt-1 font-sans text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="Phone Number *"
                      autoComplete="tel"
                      value={form.phone} onChange={update('phone')}
                      aria-required="true" aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-err' : undefined}
                      className={FIELD_CLS}
                    />
                    {errors.phone && (
                      <p id="phone-err" role="alert" className="mt-1 font-sans text-xs text-destructive">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="Email Address *"
                    autoComplete="email"
                    value={form.email} onChange={update('email')}
                    aria-required="true" aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-err' : undefined}
                    className={FIELD_CLS}
                  />
                  {errors.email && (
                    <p id="email-err" role="alert" className="mt-1 font-sans text-xs text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="sr-only">Service type</label>
                  <select
                    id="service" name="service"
                    value={form.service} onChange={update('service')}
                    aria-required="true" aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-err' : undefined}
                    className={`${FIELD_CLS} appearance-none`}
                  >
                    <option value="">Service Type *</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-err" role="alert" className="mt-1 font-sans text-xs text-destructive">{errors.service}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="sr-only">Project details</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Project Details (optional)"
                    rows={4}
                    value={form.message} onChange={update('message')}
                    className={`${FIELD_CLS} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <p role="alert" className="mb-4 font-sans text-sm text-destructive">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-foreground text-white font-sans text-sm font-semibold border-b-2 border-[#FFD400] hover:bg-[#FFD400] hover:text-foreground transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Estimate Request'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="bg-foreground p-8 lg:p-10 flex flex-col gap-8">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4 border-b border-[#FFD400] pb-3">
                Direct Contact
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-white hover:text-[#FFD400] transition-colors"
                  aria-label={`Call us at ${siteConfig.phone}`}
                >
                  <IconPhone size={18} className="shrink-0 text-white" />
                  <span className="font-heading text-xl uppercase">{siteConfig.phone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white hover:text-[#FFD400] transition-colors"
                  aria-label={`Email us at ${siteConfig.email}`}
                >
                  <IconMail size={18} className="shrink-0 text-white" />
                  <span className="font-sans text-sm">{siteConfig.email}</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
                Office
              </p>
              <address className="not-italic font-sans text-sm leading-relaxed text-white/70">
                {siteConfig.address}
              </address>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-3">
                Hours
              </p>
              <dl className="font-sans text-sm text-white/70 space-y-1">
                <div className="flex justify-between gap-4">
                  <dt>Mon &ndash; Fri</dt>
                  <dd className="text-[#FFD400] font-semibold">7:00 AM &ndash; 6:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Saturday</dt>
                  <dd>8:00 AM &ndash; 3:00 PM</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

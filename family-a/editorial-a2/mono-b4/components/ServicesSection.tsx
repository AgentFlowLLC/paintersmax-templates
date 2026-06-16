'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'
import { ServiceIcon, IconChevron } from '@/components/Icons'

/* B4 eyebrow — black rect, white small-caps text, yellow left border */
function EyebrowLabel({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
      <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
        {label}
      </span>
    </span>
  )
}

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (i: number) => setOpen((prev) => (prev === i ? null : i))

  return (
    <section
      id="services"
      className="bg-background"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-16">
          <div>
            <EyebrowLabel label="What We Do" />
            <h2
              id="services-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              Every Surface. Every Scale.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base leading-relaxed text-[#555555] max-w-lg text-pretty">
              From a single room to a multi-story commercial build-out, our services are structured
              around process discipline and documented outcomes.
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t-2 border-foreground" role="list">
          {siteConfig.services.map((svc, i) => (
            <div key={i} className="border-b-2 border-foreground" role="listitem">
              <button
                id={`svc-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`svc-panel-${i}`}
                onClick={() => toggle(i)}
                className={`w-full flex items-center gap-5 py-5 text-left group cursor-pointer transition-colors ${
                  open === i ? 'bg-[#FFD400]' : 'hover:bg-surface'
                }`}
              >
                {/* Yellow sticker icon */}
                <span className="ml-4 shrink-0">
                  <ServiceIcon name={svc.icon} size={22} />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="font-heading text-xl uppercase text-foreground group-hover:text-foreground transition-colors">
                    {svc.title}
                  </span>
                  <span className="font-sans text-sm text-[#555555] ml-4 hidden sm:inline">
                    {svc.summary}
                  </span>
                </div>
                <IconChevron
                  size={18}
                  className={`shrink-0 mr-4 text-foreground transition-transform duration-300 ${
                    open === i ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>

              <div
                id={`svc-panel-${i}`}
                role="region"
                aria-labelledby={`svc-btn-${i}`}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '200px' : '0px' }}
              >
                <p className="font-sans text-sm leading-relaxed text-[#555555] pb-6 pl-[68px] pr-6 max-w-2xl text-pretty">
                  {svc.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

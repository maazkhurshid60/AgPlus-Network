'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Heading } from './Typography'

// ─── Icons ────────────────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg width="28" height="27" viewBox="0 0 28 27" fill="none" aria-hidden="true">
      <path
        d="M14 1.5l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L14 17.27l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01L14 1.5z"
        fill="#FFC107"
        stroke="#FFC107"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" aria-hidden="true">
      <path d="M10.5 3L5.5 8l5 5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" aria-hidden="true">
      <path d="M6.5 3l5 5-5 5" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Testimonial {
  name: string
  jobTitle: string
  company: string
  avatarId: string
  quote: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maria Rodriguez',
    jobTitle: 'Produce Buyer',
    company: 'Fresh Market Co.',
    avatarId: '1494790108377-be9c29b29330',
    quote: '"AgPlus has revolutionized how we approach market pricing. The daily reports are incredibly accurate, helping us save over 15% on purchasing costs this quarter alone."',
  },
  {
    name: 'James Thornton',
    jobTitle: 'Operations Manager',
    company: 'Green Valley Farms',
    avatarId: '1560250097-0b93528c311a',
    quote: '"The nightly email reports have become essential to our morning planning. We never miss a price shift and our buyers stay one step ahead of the market every single day."',
  },
  {
    name: 'Susan Mitchell',
    jobTitle: 'Procurement Lead',
    company: 'Central Distributors',
    avatarId: '1544005313-94ddf0286df2',
    quote: '"Customizable reports mean I only see the commodities that matter to us. AgPlus is the most efficient tool our team has adopted in years – setup took under five minutes."',
  },
  {
    name: 'Carlos Mendez',
    jobTitle: 'Fleet Coordinator',
    company: 'Sunrise Logistics',
    avatarId: '1472099645785-5658abf4ff4e',
    quote: '"From shipping point data to terminal market trends, AgPlus gives us everything in one dashboard. The pricing is unbeatable for the value it delivers every single day."',
  },
]

// ─── Layout constants (desktop only) ─────────────────────────────────────────
const DESKTOP_CARD_W = 833
const CARD_GAP = 24
const CONTAINER_W = 1440
const DESKTOP_CENTER_OFFSET = (CONTAINER_W - DESKTOP_CARD_W) / 2  // 303.5

// ─── TestimonialsSection ──────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [cardWidth, setCardWidth] = useState(DESKTOP_CARD_W)
  const [isDesktop, setIsDesktop] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const n = TESTIMONIALS.length

  const prev = () => setActive(i => (i - 1 + n) % n)
  const next = useCallback(() => setActive(i => (i + 1) % n), [n])

  useEffect(() => {
    function measure() {
      const desktop = window.innerWidth >= 1024
      setIsDesktop(desktop)
      if (!desktop && containerRef.current) {
        setCardWidth(containerRef.current.offsetWidth)
      } else {
        setCardWidth(DESKTOP_CARD_W)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const translateX = isDesktop
    ? DESKTOP_CENTER_OFFSET - active * (DESKTOP_CARD_W + CARD_GAP)
    : -(active * cardWidth)

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* ── Title ── */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[80px]">
        <Heading level={2} className="pb-[42px] pt-[60px] text-center">
          Trusted by{' '}
          <span className="font-grape-nuts bg-gradient-to-br from-[#396a49] to-[#fff12d] bg-clip-text text-transparent">
            Industry Leaders
          </span>
        </Heading>
      </div>

      {/* ── Carousel viewport ── */}
      <div className="relative overflow-hidden" ref={containerRef}>
        {/* Edge fades — desktop only */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-72 bg-gradient-to-r from-white to-transparent lg:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-72 bg-gradient-to-l from-white to-transparent lg:block"
        />

        {/* Sliding track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: isDesktop ? `${CARD_GAP}px` : '0px',
            transform: `translateX(${translateX}px)`,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              onClick={() => setActive(i)}
              aria-current={i === active ? 'true' : undefined}
              className="flex-shrink-0 cursor-pointer rounded-[28px] bg-white px-6 py-6 shadow-[0_4px_32px_rgba(0,0,0,0.07)] transition-opacity duration-500 lg:w-[833px] lg:px-8 lg:py-8"
              style={{
                width: isDesktop ? `${DESKTOP_CARD_W}px` : `${cardWidth}px`,
                opacity: i === active ? 1 : (isDesktop ? 0.25 : 1),
              }}
            >
              {/* Header row: avatar + name/role | stars */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="relative h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-full bg-[#d9d9d9]">
                    <Image
                      src={`https://images.unsplash.com/photo-${t.avatarId}?w=136&h=136&fit=facearea&facepad=2&auto=format`}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="68px"
                    />
                  </div>
                  {/* Name + role */}
                  <div>
                    <p className="font-gilroy-medium text-2xl leading-[29px] text-[#231f20] lg:text-[38px] lg:leading-[46px]">
                      {t.name}
                    </p>
                    <p className="font-gilroy text-base leading-6">
                      <span className="text-[#666666]">{t.jobTitle}, </span>
                      <span className="text-[#6ead51]">{t.company}</span>
                    </p>
                  </div>
                </div>
                {/* Stars — hide on very small screens to prevent overflow */}
                <div className="hidden flex-shrink-0 items-center gap-1.5 sm:flex">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <StarIcon key={si} />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="font-gilroy text-lg leading-[28px] text-[#666666] lg:text-2xl lg:leading-[34px]">
                {t.quote}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* ── Navigation ── */}
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-center gap-5 pb-12 pt-[42px]">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#eeeeee] bg-white transition-shadow hover:shadow-md active:scale-95"
          >
            <ArrowLeft />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? 'h-3 w-3 bg-[#fff12d]'
                    : 'h-[9px] w-[9px] bg-[#d9d9d9]'
                }`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#eeeeee] bg-white transition-shadow hover:shadow-md active:scale-95"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

    </section>
  )
}

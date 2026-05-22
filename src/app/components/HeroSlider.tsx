'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Heading } from './Typography'

interface CardData {
  label: string
  unsplashId: string
  alt: string
}

const ALL_CARDS: CardData[] = [
  { label: 'Shipping Points Reports',      unsplashId: '1540420773420-3366772f4999', alt: 'Fresh vegetables at a shipping market' },
  { label: 'Terminal Market Reports',      unsplashId: '1518977676601-b53f82aba655', alt: 'Produce at a terminal market' },
  { label: 'Shipping Points Reports',      unsplashId: '1512621776951-a57141f2eefd', alt: 'Agricultural produce ready for shipping' },
  { label: 'Reports Emailed to You Nightly', unsplashId: '1490818387583-1baba5e638af', alt: 'Fresh fruit and vegetable assortment' },
  { label: 'Movement/FOB Reports',         unsplashId: '1464965911861-746a04b4bca6', alt: 'Strawberries FOB market data' },
  { label: 'Reports Emailed to You Nightly', unsplashId: '1576045057995-568f588f82fb', alt: 'Assorted vegetables nightly report' },
]

function FrostedLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-xl border border-white/[0.32] bg-white/[0.12] px-4 py-3 backdrop-blur-sm">
      <Heading level={3} className="text-center text-[18px] leading-[22px]">
        {children}
      </Heading>
    </div>
  )
}

export default function HeroSlider() {
  const [active, setActive] = useState(0)
  const [perView, setPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const totalSlides = ALL_CARDS.length
  const maxIndex = totalSlides - perView

  const next = useCallback(() => {
    setActive(i => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const prev = () => {
    setActive(i => (i <= 0 ? maxIndex : i - 1))
  }

  useEffect(() => {
    function measure() {
      const w = window.innerWidth
      setPerView(w >= 640 ? 2 : 1)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Reset active index if perView changes and active is out of range
  useEffect(() => {
    setActive(i => Math.min(i, totalSlides - perView))
  }, [perView, totalSlides])

  // Auto-advance every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(next, 3000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [next])

  const cardWidthPercent = 100 / perView
  const translateX = -(active * cardWidthPercent)

  return (
    <div className="lg:hidden px-6 pb-10">
      <div className="relative overflow-hidden rounded-[24px]" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {ALL_CARDS.map((card, i) => (
            <div
              key={`slider-${card.unsplashId}-${i}`}
              className="relative h-[220px] flex-shrink-0 overflow-hidden"
              style={{ width: `${cardWidthPercent}%` }}
            >
              <Image
                src={`https://images.unsplash.com/photo-${card.unsplashId}?w=800&h=440&fit=crop&auto=format`}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
                }}
              />
              <FrostedLabel>{card.label}</FrostedLabel>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? 'h-3 w-3 bg-[#396a49]' : 'h-2 w-2 bg-[#d9d9d9]'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

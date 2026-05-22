import Image from 'next/image'
import { Heading, Paragraph, PrimaryButton } from './Typography'
import HeroSlider from './HeroSlider'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardData {
  label: string
  /** Unsplash photo ID — swap any ID for a different shot */
  unsplashId: string
  alt: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// Column 1 cards (flush to top of section)
const COL1_CARDS: CardData[] = [
  {
    label: 'Shipping Points Reports',
    unsplashId: '1540420773420-3366772f4999',
    alt: 'Fresh vegetables at a shipping market',
  },
  {
    label: 'Terminal Market Reports',
    unsplashId: '1518977676601-b53f82aba655',
    alt: 'Produce at a terminal market',
  },
  {
    label: 'Shipping Points Reports',
    unsplashId: '1512621776951-a57141f2eefd',
    alt: 'Agricultural produce ready for shipping',
  },
]

// Column 2 cards (staggered down 69px)
const COL2_CARDS: CardData[] = [
  {
    label: 'Reports Emailed to You Nightly',
    unsplashId: '1490818387583-1baba5e638af',
    alt: 'Fresh fruit and vegetable assortment',
  },
  {
    label: 'Movement/FOB Reports',
    unsplashId: '1464965911861-746a04b4bca6',
    alt: 'Strawberries FOB market data',
  },
  {
    label: 'Reports Emailed to You Nightly',
    unsplashId: '1576045057995-568f588f82fb',
    alt: 'Assorted vegetables nightly report',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LeafLogoIcon() {
  return (
    <svg width="46" height="18" viewBox="0 0 46 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" fill="#a6c84c" opacity="0.25" />
      <path d="M5 13c0-4 2-8 7-9-1 4-3 7-7 9z" fill="#396a49" />
      <path d="M5 13c2-3 4-6 7-9" stroke="#396a49" strokeWidth="1" strokeLinecap="round" />
      <circle cx="37" cy="9" r="8" fill="#fff12d" opacity="0.35" />
      <path d="M33 13c0-4 2-8 7-9-1 4-3 7-7 9z" fill="#396a49" />
      <path d="M33 13c2-3 4-6 7-9" stroke="#396a49" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}

function DataStreamIndicator() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#a6c84c]" />
        <div
          className="ml-1 h-0.5 w-8 rounded-full"
          style={{ background: 'linear-gradient(to right, #a6c84c, transparent)' }}
        />
        <div className="ml-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#fff12d]" />
        <div
          className="ml-1 h-0.5 w-8 rounded-full"
          style={{ background: 'linear-gradient(to right, #fff12d, transparent)' }}
        />
        <div className="ml-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#396a49]" />
      </div>
      <span className="font-grape-nuts text-base text-[#666666]">Updated Data Stream</span>
    </div>
  )
}

// Frosted-glass label container — white/12% fill + white/32% border (Figma exact)
function FrostedLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-xl border border-white/[0.32] bg-white/[0.12] px-4 py-3 backdrop-blur-sm">
      <Heading level={3} className="text-center">
        {children}
      </Heading>
    </div>
  )
}

// Image card: Unsplash photo + gradient overlay + frosted glass label
function ImageCard({ card }: { card: CardData }) {
  return (
    <div className="relative h-[247px] w-[266px] flex-shrink-0 overflow-hidden rounded-[24px]">
      <Image
        src={`https://images.unsplash.com/photo-${card.unsplashId}?w=532&h=494&fit=crop&auto=format`}
        alt={card.alt}
        fill
        className="object-cover"
        sizes="266px"
      />
      {/* Gradient: rgba(0,0,0,0.6) at bottom → rgba(0,0,0,0.2) mid → transparent top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
        }}
      />
      <FrostedLabel>{card.label}</FrostedLabel>
    </div>
  )
}

// ─── HeroSection ──────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col lg:min-h-[579px] lg:flex-row">

        {/* ── Left: Text content ── */}
        {/* Desktop: 778px wide (100px pad-left, 646px text, 32px gap before images) */}
        <div className="flex flex-col justify-center px-6 py-10 lg:w-[778px] lg:flex-shrink-0 lg:py-[43px] lg:pl-[100px] lg:pr-[32px]">

          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-[#fffcd5] bg-[#fffcd5] px-4 py-[9px]">
            <LeafLogoIcon />
            <Paragraph size="sm" className="font-gilroy-medium text-[#333333]" as="span">
              The AgPlus Network, The Pulse on Fresh Produce
            </Paragraph>
          </div>

          {/* Heading — "Daily Source" and "USDA" use Grape Nuts per Figma segments */}
          <Heading level={1} className="mb-6 max-w-[646px] lg:text-[42px] lg:leading-[50.946px]">
            Your{' '}
            <span className="font-grape-nuts">Daily Source</span>
            {' '}for Trusted{' '}
            <span className="font-grape-nuts">USDA</span>
            {' '}Market Reports
          </Heading>

          {/* Subtext */}
          <Paragraph size="xl" className="mb-8 max-w-[646px]">
            Access reliable USDA verified data, daily reports, and real-time market
            movements all simplified into one powerful dashboard.
          </Paragraph>

          {/* CTA */}
          <div className="mb-6">
            <PrimaryButton href="/signup" size="lg" icon={<PlusIcon />}>
              Start Free Trial
            </PrimaryButton>
          </div>

          {/* Data stream indicator */}
          <DataStreamIndicator />
        </div>

        {/* ── Right: Staggered image grid (desktop only) ── */}
        {/* overflow-hidden clips columns that extend past 579px hero height */}
        <div className="relative hidden h-[579px] flex-1 overflow-hidden lg:flex lg:items-start">

          {/* White gradient top — blends images into white bg (Figma Ellipse 55/56) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-20"
            style={{ background: 'linear-gradient(to bottom, white 0%, transparent 100%)' }}
          />
          {/* White gradient bottom */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24"
            style={{ background: 'linear-gradient(to top, white 0%, transparent 100%)' }}
          />

          <div className="flex gap-[30px]">
            {/* Column 1 — scrolls up; cards duplicated for seamless loop */}
            <div className="animate-scroll-up flex flex-col gap-5 will-change-transform">
              {[...COL1_CARDS, ...COL1_CARDS].map((card, i) => (
                <ImageCard key={`c1-${card.unsplashId}-${i}`} card={card} />
              ))}
            </div>
            {/* Column 2 — 69px stagger wrapper; inner div scrolls down */}
            <div className="mt-[69px]">
              <div className="animate-scroll-down flex flex-col gap-5 will-change-transform">
                {[...COL2_CARDS, ...COL2_CARDS].map((card, i) => (
                  <ImageCard key={`c2-${card.unsplashId}-${i}`} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/tablet: slider with all 6 cards */}
        <HeroSlider />

      </div>
    </section>
  )
}

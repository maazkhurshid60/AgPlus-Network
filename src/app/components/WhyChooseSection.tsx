import Image from 'next/image'
import { Heading, Paragraph } from './Typography'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CardData {
  title: string
  body: string
  unsplashId: string
  alt: string
  /** CSS border-radius multi-value for the organic blob clip */
  blob: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CARDS: CardData[] = [
  {
    title: 'Easy to Use',
    body: 'Agplus offers a user-friendly platform with personalized report creation options and helpful customer service. Creating a report is easy – simply select the commodities you want to track, save the report, and subscribe to receive it each night via email.',
    unsplashId: '1600880292203-757bb62b4baf',
    alt: 'Person using smartphone and laptop to manage produce market data',
    // card-2 teardrop rotated 180° (TL↔BR, TR↔BL)
    blob: '68% 32% 38% 62% / 58% 64% 34% 46%',
  },
  {
    title: 'Affordable',
    body: 'The service is priced at less than the cost of a daily cup of coffee. The price covers up to 8 individuals at your company location.',
    unsplashId: '1567427017947-545c5f8d16ad',
    alt: 'Coins floating above an open hand representing affordable pricing',
    // teardrop: narrow top, wide base, left-leaning
    blob: '38% 62% 68% 32% / 34% 46% 58% 64%',
  },
  {
    title: 'Customizable Reports',
    body: 'The ability to create daily, price reports that are tailored to your specific needs can help ensure that you are receiving the most relevant market information.',
    unsplashId: '1460925895917-afdab827c52f',
    alt: 'Laptop displaying customizable produce market reports',
    // card-2 teardrop rotated 180° (TL↔BR, TR↔BL)
    blob: '68% 32% 38% 62% / 58% 64% 34% 46%',
  },
]

// ─── WhyChooseSection ─────────────────────────────────────────────────────────

export default function WhyChooseSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Decorative blobs — approximate Figma background mask groups */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-[15%] h-[560px] w-[560px] rounded-full bg-[#f3f3f3] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-[15%] h-[560px] w-[560px] rounded-full bg-[#f3f3f3] opacity-60"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-[80px]">

        {/* Section heading */}
        <Heading level={2} className="pt-16 pb-2 text-center lg:pt-[60px]">
          <span className="font-grape-nuts">WHY</span>
          {'  '}Choose AgPlus
        </Heading>

        {/* Card rows */}
        {CARDS.map((card, index) => {
          const isOdd = index % 2 === 0   // 1st and 3rd cards → text left, image right

          const imageEl = (
            <div
              className="relative h-[280px] w-full flex-shrink-0 overflow-hidden lg:h-[360px] lg:w-[486px]"
              style={{ borderRadius: card.blob }}
            >
              <Image
                src={`https://images.unsplash.com/photo-${card.unsplashId}?w=972&h=720&fit=crop&auto=format`}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 486px"
              />
            </div>
          )

          const textEl = (
            <div className="flex flex-1 flex-col justify-center gap-4">
              <Heading level={5}>{card.title}</Heading>
              <Paragraph size="xl" className="leading-[34px]">
                {card.body}
              </Paragraph>
            </div>
          )

          return (
            <div
              key={card.title}
              className="flex flex-col items-center gap-8 py-10 lg:h-[360px] lg:flex-row lg:gap-[41px] lg:py-0"
            >
              {isOdd ? (
                <>{textEl}{imageEl}</>
              ) : (
                <>{imageEl}{textEl}</>
              )}
            </div>
          )
        })}

        <div className="pb-16 lg:pb-[60px]" />
      </div>
    </section>
  )
}

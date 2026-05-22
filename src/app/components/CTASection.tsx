import { PrimaryButton } from './Typography'

// ─── Decorative waves — exact SVG exported from Figma ─────────────────────────

function WaveDecoration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1280 277"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g opacity="0.4">
        <g opacity="0.3" filter="url(#cta-f0)">
          <path
            d="M1268.45 5.148L1204.41 59.869C1171.69 98.592 1108.16 176.039 1043.67 166.358C979.181 156.677 915.654 59.869 851.164 21.146C786.674-17.577 723.146 1.785 658.656 59.869C594.166 117.954 530.639 214.762 466.149 243.805C401.659 272.847 338.132 209.574 273.642 199.893C209.152 190.213 145.624 209.574 112.898 219.255C80.172 228.936 15.852 272 15.852 272"
            stroke="#FFF12D"
            strokeWidth="2"
          />
        </g>
        <g opacity="0.3" filter="url(#cta-f1)">
          <path
            d="M1279.22 85.937L1248.17 101.116C1216.18 116.296 1154.08 146.655 1091.03 142.86C1027.99 139.065 965.89 101.116 902.848 85.937C839.805 70.757 777.704 78.347 714.661 101.116C651.619 123.885 589.517 161.834 526.475 173.219C463.432 184.603 401.331 169.424 338.288 165.629C275.246 161.834 209.938 175.609 177.946 179.404L0.221 219.646"
            stroke="#A6C84C"
            strokeWidth="2"
          />
        </g>
      </g>
      <defs>
        <filter id="cta-f0" x="15.296" y="0" width="1253.8" height="276.831" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        <filter id="cta-f1" x="0" y="77.04" width="1279.66" height="147.582" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="#252525" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

// ─── CTASection ───────────────────────────────────────────────────────────────

export default function CTASection() {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-[80px] lg:py-[40px]">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[24px] bg-[#fffcd5]">

        {/* Decorative waves — pinned to bottom of card */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[277px]">
          <WaveDecoration />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-[42px] py-[42px] text-center">
          <h1 className="font-gilroy-medium text-[42px] leading-[48px] text-[#333333]">
            Ready to{' '}
            <span className="font-grape-nuts text-[#396a49]">Transform</span>
            {' '}Your Market Intelligence?
          </h1>

          <p className="mt-[22px] max-w-[1128px] font-gilroy text-[20px] leading-[32px] text-[#333333]">
            See how produce professionals are using AgPlus to make smarter decisions and
            increase profitability across every level of your operation.
          </p>

          <div className="mt-[36px]">
            <PrimaryButton href="/signup" size="lg" icon={<PlusIcon />}>
              Start Your Free Trial Today
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  )
}

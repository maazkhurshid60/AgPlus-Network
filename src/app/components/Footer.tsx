import Image from 'next/image'
import Link from 'next/link'

// ─── Contact icons ────────────────────────────────────────────────────────────

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="#333333" strokeWidth="1.5"/>
      <path d="M2 8l10 7 10-7" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="#333333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="#333333" strokeWidth="1.5"/>
    </svg>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const USEFUL_LINKS_COL1 = [
  { label: 'Reports',    href: '/reports' },
  { label: 'Membership', href: '/membership' },
  { label: 'About Us',   href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

const USEFUL_LINKS_COL2 = [
  { label: 'Send A Question', href: '/contact' },
  { label: 'Free Trial',      href: '/free-trial' },
  { label: 'Sign Up',         href: '/signup' },
  { label: 'Log In',          href: '/login' },
]

// Google Maps embed — pin at Emaan Arcade, Street 124, G-13/4, Islamabad
const MAP_SRC =
  'https://maps.google.com/maps?q=Emaan+Arcade%2C+Street+No+124%2C+G-13%2F4%2C+Islamabad%2C+Pakistan&output=embed&z=16'

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeeee]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-[80px]">

        {/* ── Logo row ── */}
        <div className="pt-10 pb-10">
          <Image
            src="/logo.png"
            alt="AgPlus Network"
            width={221}
            height={66}
            className="h-auto w-[140px] lg:w-[221px]"
          />
        </div>

        {/* ── Three-column content row ── */}
        <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:gap-0">

          {/* Col 1 — Useful Links (436px) */}
          <div className="lg:w-[436px] lg:flex-shrink-0">
            <h3 className="mb-[24px] font-gilroy-medium text-[25px] leading-[30.625px] text-[#333333]">
              Useful Links
            </h3>
            <div className="flex">
              {/* Sub-col 1 */}
              <div className="flex flex-col gap-6 border-r border-[#d0d0d0] pr-6 lg:w-[95px]">
                {USEFUL_LINKS_COL1.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-gilroy-medium text-base leading-6 text-[#333333] transition-colors hover:text-[#396a49]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Sub-col 2 */}
              <div className="flex flex-col gap-6 pl-6 lg:pl-[48px]">
                {USEFUL_LINKS_COL2.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-gilroy-medium text-base leading-6 text-[#333333] transition-colors hover:text-[#396a49]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2 — Contact Us (436px) */}
          <div className="lg:w-[436px] lg:flex-shrink-0 lg:pl-[10px]">
            <h3 className="mb-[28px] font-gilroy-medium text-[25px] leading-[30.625px] text-[#333333]">
              Contact Us
            </h3>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-[10px]">
                <span className="flex-shrink-0"><EmailIcon /></span>
                <a
                  href="mailto:support@agplus.net"
                  className="font-gilroy-medium text-base leading-7 text-[#333333] hover:text-[#396a49]"
                >
                  support@agplus.net
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-[10px]">
                <span className="flex-shrink-0"><PhoneIcon /></span>
                <a
                  href="tel:+15597320948"
                  className="font-gilroy-medium text-base leading-7 text-[#333333] hover:text-[#396a49]"
                >
                  +1 559-732-0948
                </a>
              </div>
              {/* Address */}
              <div className="flex items-start gap-[10px]">
                <span className="mt-[2px] flex-shrink-0"><LocationIcon /></span>
                <address className="font-gilroy-medium text-base not-italic leading-6 text-[#333333]">
                  The Agplus Network<br />
                  943 North Rono Street<br />
                  Visilia, CA 93291
                </address>
              </div>
            </div>
          </div>

          {/* Col 3 — Google Map (388px, fills remaining) */}
          <div className="h-[221px] overflow-hidden rounded-[8px] lg:ml-[10px] lg:h-auto lg:flex-1">
            <iframe
              src={MAP_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 221 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AgPlus Network location map"
            />
          </div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="border-t border-[#d0d0d0] py-5 text-center">
          <p className="font-gilroy-medium text-base text-[#666666]">
            © 1995-2026 The Agplus Network LLC. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

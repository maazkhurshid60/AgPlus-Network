import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

// ─── Heading ──────────────────────────────────────────────────────────────────
// Levels map 1:1 to the font scales extracted from Figma:
//   1 → hero h1      (Gilroy-Medium 42px, lh 50.946px, #333333)
//   2 → section h2   (Gilroy-Medium 60px, lh 72.78px,  #333333)
//   3 → card label   (Gilroy-Medium 24px, lh 29.112px, white)
//   4 → sub-heading  (Gilroy-Medium 20px, lh 1.21,     #333333)

const HEADING_STYLES = {
  1: 'font-gilroy-medium text-[42px] leading-[50.946px] text-[#333333]',
  2: 'font-gilroy-medium text-[60px] leading-[72.78px] text-[#333333]',
  3: 'font-gilroy-medium text-2xl leading-[29.112px] text-white',
  4: 'font-gilroy-medium text-xl leading-[1.21] text-[#333333]',
  5: 'font-gilroy-medium text-[36px] leading-[43.668px] text-[#333333]',
} as const

interface HeadingProps {
  level?: keyof typeof HEADING_STYLES
  children: React.ReactNode
  className?: string
}

export function Heading({ level = 1, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  return (
    <Tag className={`${HEADING_STYLES[level]} ${className}`}>
      {children}
    </Tag>
  )
}

// ─── Paragraph ────────────────────────────────────────────────────────────────
// Sizes map to Figma body-text scales:
//   xl  → hero subtext     (Gilroy-Regular 20px, lh 30px,   ls 0.4px, #666666)
//   lg  → secondary body   (Gilroy-Regular 18px, lh 1.6,    #666666)
//   base→ default body     (Gilroy-Regular 16px, lh 1.5,    #333333)
//   sm  → nav / caption    (Gilroy-Regular 14px, lh 16.8px, #333333)
//   xs  → footnote / legal (Gilroy-Regular 12px, lh 1.4,    #666666)

const PARAGRAPH_STYLES = {
  xl:   'font-gilroy text-[20px] leading-[30px] tracking-[0.4px] text-[#666666]',
  lg:   'font-gilroy text-lg leading-relaxed text-[#666666]',
  base: 'font-gilroy text-base leading-normal text-[#333333]',
  sm:   'font-gilroy text-sm leading-[16.8px] text-[#333333]',
  xs:   'font-gilroy text-xs leading-snug text-[#666666]',
} as const

interface ParagraphProps {
  size?: keyof typeof PARAGRAPH_STYLES
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
}

export function Paragraph({
  size = 'base',
  children,
  className = '',
  as: Tag = 'p',
}: ParagraphProps) {
  return (
    <Tag className={`${PARAGRAPH_STYLES[size]} ${className}`}>
      {children}
    </Tag>
  )
}

// ─── PrimaryButton ────────────────────────────────────────────────────────────
// Sizes extracted from Figma button instances:
//   lg → hero CTA   (h-[57px] min-w-[154px] px-8)
//   md → default    (h-[46px] min-w-[104px] px-6)
//   sm → compact    (h-[38px] px-5)
//   full → full-width (h-[46px] w-full)

const BUTTON_SIZES = {
  lg:   'h-[57px] min-w-[154px] px-8 text-base',
  md:   'h-[46px] min-w-[104px] px-6 text-base',
  sm:   'h-[38px] px-5 text-sm',
  full: 'h-[46px] w-full px-6 text-base',
} as const

const BUTTON_BASE =
  'inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-[#fff12d] font-gilroy-medium text-[#252525] transition-colors hover:bg-[#f5e020] active:scale-[0.98]'

type ButtonSize = keyof typeof BUTTON_SIZES

interface PrimaryButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  size?: ButtonSize
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

interface PrimaryButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
  size?: ButtonSize
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}

type PrimaryButtonProps = PrimaryButtonLinkProps | PrimaryButtonActionProps

export function PrimaryButton({
  children,
  size = 'md',
  icon,
  className = '',
  ...rest
}: PrimaryButtonProps) {
  const sizeClass = BUTTON_SIZES[size]
  const combined = `${BUTTON_BASE} ${sizeClass} ${className}`

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as PrimaryButtonLinkProps
    return (
      <Link href={href} className={combined} {...anchorRest}>
        {icon}
        {children}
      </Link>
    )
  }

  const { ...buttonRest } = rest as PrimaryButtonActionProps
  return (
    <button className={combined} {...buttonRest}>
      {icon}
      {children}
    </button>
  )
}

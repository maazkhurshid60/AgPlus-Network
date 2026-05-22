'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { PrimaryButton } from './Typography'

interface NavLink {
  label: string
  href: string
  active?: boolean
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', active: true },
  { label: 'Reports', href: '/reports' },
  { label: 'Membership', href: '/membership' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 8s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="8" r="2" stroke="#666666" strokeWidth="1.2" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2l12 12M6.5 6.6A2 2 0 0 0 9.4 9.5M5.2 4.2C3.6 5.1 2.3 6.7 1 8c1.7 2.4 4.1 5 7 5a7 7 0 0 0 3.8-1.2M8 3c2.9 0 5.3 2.6 7 5a13 13 0 0 1-1.6 2.1" stroke="#666666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : ''
        }`}
    >
      {/* ── Top bar: Logo + Inline login form ── */}
      <div className="border-b border-[#e2e2e2]">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-6 lg:h-[109px] lg:px-[80px]">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <svg width="161" height="48" viewBox="0 0 161 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect width="161" height="48" fill="url(#pattern0_23_2626)" />
              <defs>
                <pattern id="pattern0_23_2626" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_23_2626" transform="scale(0.0028667 0.00961538)" />
                </pattern>
                <image id="image0_23_2626" width="349" height="104" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>

          </Link>

          {/* Desktop: Inline login form — inputs + links + Login button */}
          {/* Layout: [412px inputs+links] [12px gap] [104px Login btn] */}
          <div className="hidden items-start gap-3 lg:flex">

            {/* Left column: two inputs stacked with links beneath */}
            <div className="flex flex-col gap-3">
              {/* Inputs row — each 200×46px, 12px gap */}
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="User name"
                  className="h-[46px] w-[200px] rounded-xl border border-[#e2e2e2] bg-[#f8f8f8] px-4 font-gilroy text-sm text-[#333333] outline-none transition-colors placeholder:text-[#999999] focus:border-[#396a49]"
                />
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="h-[46px] w-[200px] rounded-xl border border-[#e2e2e2] bg-[#f8f8f8] pl-4 pr-10 font-gilroy text-sm text-[#333333] outline-none transition-colors placeholder:text-[#999999] focus:border-[#396a49]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] transition-opacity hover:opacity-70"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>

              {/* Links row — centered under inputs, 24px gaps, 14px Gilroy-Regular */}
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="/signup"
                  className="font-gilroy text-sm text-[#333333] transition-colors hover:text-[#396a49]"
                >
                  Sign Up
                </Link>
                <Link
                  href="/forgot-password"
                  className="font-gilroy text-sm text-[#333333] transition-colors hover:text-[#396a49]"
                >
                  Forgot password?
                </Link>
                <Link
                  href="/free-trial"
                  className="font-gilroy text-sm text-[#333333] transition-colors hover:text-[#396a49]"
                >
                  Free trial
                </Link>
              </div>
            </div>

            {/* Login button — 104×46px, yellow, top-aligned */}
            <PrimaryButton type="button" size="md">
              Login
            </PrimaryButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex items-center justify-center p-1 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* ── Sub nav: Navigation links (desktop only) ── */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-[55px] max-w-[1440px] items-center justify-center px-[80px]">
          <nav className="flex items-center gap-[34px]" aria-label="Primary navigation">
            {NAV_LINKS.map((link) =>
              link.active ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-center border border-[#396a49] px-1 py-[2px]"
                  aria-current="page"
                >
                  <span className="bg-gradient-to-br from-[#396a49] to-[#fff12d] bg-clip-text font-gilroy-medium text-base leading-[1.21] text-transparent">
                    {link.label}
                  </span>
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-gilroy text-base text-[#333333] transition-colors hover:text-[#396a49]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full border-t border-[#e2e2e2] bg-white shadow-lg lg:hidden">
          <nav
            className="mx-auto flex max-w-[1440px] flex-col px-6 py-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`border-b border-[#e2e2e2] py-3 font-gilroy text-base last:border-0 ${link.active ? 'text-[#396a49]' : 'text-[#333333]'
                  }`}
                onClick={() => setMobileOpen(false)}
                aria-current={link.active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile login inputs */}
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="text"
                placeholder="User name"
                className="h-[46px] w-full rounded-xl border border-[#e2e2e2] bg-[#f8f8f8] px-4 font-gilroy text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#396a49]"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-[46px] w-full rounded-xl border border-[#e2e2e2] bg-[#f8f8f8] px-4 font-gilroy text-sm text-[#333333] outline-none placeholder:text-[#999999] focus:border-[#396a49]"
              />
              <div className="flex items-center justify-center gap-6">
                <Link href="/signup" className="font-gilroy text-sm text-[#333333]">Sign Up</Link>
                <Link href="/forgot-password" className="font-gilroy text-sm text-[#333333]">Forgot password?</Link>
                <Link href="/free-trial" className="font-gilroy text-sm text-[#333333]">Free trial</Link>
              </div>
              <PrimaryButton type="button" size="full">
                Login
              </PrimaryButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

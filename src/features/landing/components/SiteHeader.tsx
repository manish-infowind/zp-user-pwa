import { useState } from 'react'

import { DropdownMenu } from '@/components/common/DropdownMenu'
import { needHelpDropdownItems, servicesDropdownItems } from '@/features/landing/data/landingData'
import { setBookingIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

const linkBase =
  'text-muted no-underline transition-[color,transform] duration-200 ease-out hover:text-ink active:text-ink [touch-action:manipulation]'

function HeaderIcon({ children }: { children: React.ReactNode }) {
  return <span className="text-[#2B3037]">{children}</span>
}

type SiteHeaderProps = {
  /** White floating “pill” on lavender hero (Figma Doctor Theme). */
  variant?: 'default' | 'hero'
}

export function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const hero = variant === 'hero'

  return (
    <div
      className={cn(
        'sticky top-0 z-30',
        hero ? 'bg-transparent px-3 pb-2 pt-3 sm:px-6 sm:pt-4' : 'bg-[#fde7f1]',
      )}
    >
      <header
        className={cn(
          'mx-auto flex w-full items-center justify-between gap-3',
          hero
            ? 'max-w-[1280px] rounded-full border border-[#e8eaee]/90 bg-white px-4 py-2.5 shadow-[0_10px_40px_rgba(31,31,31,0.1)] sm:px-6 sm:py-3'
            : 'max-w-[1440px] px-4 py-3 sm:px-[clamp(1rem,3vw,2rem)]',
        )}
        id="home"
      >
        <a
          className="inline-flex min-w-0 shrink-0 items-center gap-2 text-ink no-underline sm:gap-3"
          href="#home"
          aria-label="ZappieCare home"
          onClick={closeMenu}
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent font-script text-xl text-white shadow-[0_12px_24px_rgba(248,80,1,0.22)]">
            A
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg font-bold uppercase tracking-[0.04em] text-[#1F2226]">
              ZappieCare
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B94A4]">
              Powered by ZappieCare
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          <DropdownMenu
            label="Services"
            items={servicesDropdownItems}
            leadingIcon={
              <HeaderIcon>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </HeaderIcon>
            }
            buttonClassName="text-sm text-[#2B3037] font-medium"
          />

          <a href="#offers" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#2B3037] no-underline">
            <HeaderIcon>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.121-7.121-2.121 2.121M8 16l-2.121 2.121m0-12.242L8 8m9.121 9.121L16 16" />
              </svg>
            </HeaderIcon>
            Offers
          </a>

          <a href="#booking" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#2B3037] no-underline">
            <HeaderIcon>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25" />
              </svg>
            </HeaderIcon>
            Book
          </a>

          <DropdownMenu
            label="Need Help?"
            items={needHelpDropdownItems}
            leadingIcon={
              <HeaderIcon>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M12 14a4 4 0 1 0-4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z" />
                </svg>
              </HeaderIcon>
            }
            buttonClassName="text-sm text-[#2B3037] font-medium"
          />

          <a href="#login" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#2B3037] no-underline">
            <HeaderIcon>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </HeaderIcon>
            Login/SignUp
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="#login" className="hidden lg:inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#2B3037] no-underline">
            <HeaderIcon>
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </HeaderIcon>
            Login/SignUp
          </a>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 [touch-action:manipulation] items-center justify-center rounded-xl border border-ink/15 bg-white/80 text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={cn(
          'lg:hidden border-t border-ink/[0.06] px-4 py-3',
          hero ? 'rounded-b-2xl border border-t-0 border-[#e8eaee]/90 bg-white shadow-md' : 'bg-[#fde7f1]',
          menuOpen ? 'block' : 'hidden',
        )}
        aria-label="Mobile menu"
      >
        <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
          <li>
            <a
              href="#offers"
              className={cn(linkBase, 'block min-h-11 rounded-lg px-3 py-3 text-base font-medium')}
              onClick={closeMenu}
            >
              Offers
            </a>
          </li>
          <li>
            <a
              href="#booking"
              className={cn(linkBase, 'block min-h-11 rounded-lg px-3 py-3 text-base font-medium')}
              onClick={closeMenu}
            >
              Book
            </a>
          </li>
          <li className="mt-1 rounded-xl border border-ink/10 bg-white/90 p-2">
            <p className="px-2 pb-1 text-xs font-bold uppercase tracking-wide text-muted">Services</p>
            <div className="flex flex-col">
              {servicesDropdownItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-ink no-underline hover:bg-cream [touch-action:manipulation]"
                  onClick={() => {
                    if ('bookingIntent' in it && it.bookingIntent) setBookingIntent(it.bookingIntent)
                    closeMenu()
                  }}
                >
                  {it.label}
                </a>
              ))}
            </div>
          </li>
          <li className="mt-2 rounded-xl border border-ink/10 bg-white/90 p-2">
            <p className="px-2 pb-1 text-xs font-bold uppercase tracking-wide text-muted">Need help?</p>
            <div className="flex flex-col">
              {needHelpDropdownItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-ink no-underline hover:bg-cream [touch-action:manipulation]"
                  onClick={closeMenu}
                >
                  {it.label}
                </a>
              ))}
            </div>
          </li>
          <li className="mt-2">
            <a
              href="#login"
              className={cn(linkBase, 'block min-h-11 rounded-lg px-3 py-3 text-base font-medium text-ink')}
              onClick={closeMenu}
            >
              Login/SignUp
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

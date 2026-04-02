import { footerColumns } from '@/features/landing/data/landingData'

const footerLink =
  'inline-flex min-h-10 items-center text-muted no-underline transition-[color,transform] duration-200 ease-out hover:text-ink active:text-ink [touch-action:manipulation]'

export function SiteFooter() {
  return (
    <footer className="mt-6 w-full min-w-0 rounded-t-3xl border border-ink/[0.08] bg-cream px-4 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-10 sm:mt-8 sm:px-[clamp(1rem,3vw,2rem)] sm:pb-8 sm:pt-12 md:pb-8">
      <div className="grid grid-cols-1 gap-8 min-[721px]:max-[1100px]:grid-cols-2 min-[1101px]:grid-cols-4 sm:gap-6">
        {footerColumns.map((column) => (
          <div key={column.title} className="min-w-0">
            <h3 className="mb-2 sm:mb-1.5">{column.title}</h3>
            <ul className="m-0 list-none space-y-2 p-0 sm:space-y-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#home" className={footerLink}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-ink/12 pt-6 min-[640px]:flex-row min-[640px]:items-center">
        <div className="pointer-events-none inline-flex min-w-0 items-center gap-2 text-ink sm:gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent font-script text-lg text-white shadow-[0_12px_24px_rgba(248,80,1,0.22)] sm:size-10 sm:text-xl">
            A
          </span>
          <span className="truncate font-display text-lg font-bold uppercase tracking-[0.04em] sm:text-[1.35rem]">
            ZappiCare
          </span>
        </div>
        <p className="max-w-prose text-pretty text-sm text-muted sm:text-base">
          Designed in React + Vite from the supplied Figma node references.
        </p>
      </div>
    </footer>
  )
}

import type { BookLabPackage } from '../types/labs.types'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

const bookCtaGreen =
  'inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-[#00A651] px-3.5 text-[0.9rem] font-semibold text-white shadow-sm transition hover:bg-[#009146] active:scale-[0.99] [touch-action:manipulation]'

type Props = {
  pkg: BookLabPackage
}

export function LabCard({ pkg }: Props) {
  return (
    <article className="standard-card border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-2xl">
      <div className="relative w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={pkg.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#D53F8C] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          Verified lab
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-tight text-[#121316] sm:text-[1rem]">{pkg.title}</h3>
          <span className="shrink-0 text-[0.82rem] font-semibold text-[#121316]">{pkg.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-[0.85rem] font-semibold text-[#0057ff]">{pkg.labName}</p>

        <p className="text-[0.75rem] font-semibold text-[#2b3037]">{pkg.testPackageTag}</p>

        <p className="text-[0.75rem] leading-snug text-[#5e616e] sm:text-[0.82rem]">{pkg.testsIncluded}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2.5 border-t border-[#eef0f2] pt-2.5">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[0.72rem] font-medium text-[#8b94a4] sm:text-[0.82rem]">
                ₹{formatFee(pkg.originalPrice)}
              </span>
              <span className="text-[1rem] font-medium text-[#121316] sm:text-[1.1rem]">₹{formatFee(pkg.price)}</span>
            </div>
            <p className="mt-0.5 text-[0.625rem] text-[#8b94a4] sm:text-[0.72rem]">{pkg.priceLabel ?? 'Test Price'}</p>
          </div>
        </div>

        <button type="button" className={bookCtaGreen}>
          Book now
        </button>
      </div>
    </article>
  )
}

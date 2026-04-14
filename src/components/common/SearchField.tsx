import React from 'react'

type SearchFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  options?: string[]
  icon: React.ReactNode
}

export function SearchField({
  label,
  value,
  onChange,
  options,
  icon,
}: SearchFieldProps) {
  return (
    <label className="flex min-h-[3.5rem] flex-col justify-center gap-1 rounded-2xl border border-[#eee5d8] bg-[#fbfaf6] px-3.5 py-2.5">
      <span className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#9c917f]">{label}</span>
      <span className="flex items-center gap-2 text-[0.9rem] font-semibold text-[#463e35]">
        <span className="text-[#9f8f7a]">{icon}</span>
        {options ? (
          <select
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="w-full border-0 bg-transparent p-0 text-[0.9rem] font-semibold text-[#463e35] outline-none"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="w-full border-0 bg-transparent p-0 text-[0.9rem] font-semibold text-[#463e35] outline-none"
          />
        )}
      </span>
    </label>
  )
}

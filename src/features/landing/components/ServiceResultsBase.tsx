import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ServiceResultsBaseProps = {
  sidebarContent: ReactNode
  topActions?: ReactNode
  children: ReactNode
  exploreLine?: string
  city?: string
  isLoading?: boolean
}

export function ServiceResultsBase({
  sidebarContent,
  topActions,
  children,
  exploreLine,
  city,
  isLoading,
}: ServiceResultsBaseProps) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
        {sidebarContent}
      </aside>

      {/* Main Content */}
      <div className="min-w-0 space-y-4">
        {/* Header / Info Line */}
        {exploreLine && (
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-xl font-black text-[#1F1F1F] md:text-2xl">
              {exploreLine} {city ? <span className="text-[#33579f]">{city}</span> : null}
            </h2>
          </div>
        )}

        {/* Top Actions (Sort, Filter Toggle, View Toggle) */}
        {topActions && (
          <div className="flex flex-wrap items-center gap-2">
            {topActions}
          </div>
        )}

        {/* Results Area */}
        <div className={cn('relative min-h-[400px]', isLoading && 'opacity-50 pointer-events-none')}>
          {children}
        </div>
      </div>
    </div>
  )
}

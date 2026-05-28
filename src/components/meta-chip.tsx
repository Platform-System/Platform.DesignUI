import * as React from 'react'
import { cn } from '../lib/cn'

export type MetaChipProps = React.ComponentProps<'div'>

export function MetaChip({ className, ...props }: MetaChipProps) {
  return (
    <div
      className={cn(
        'admin-meta-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5',
        className
      )}
      {...props}
    />
  )
}

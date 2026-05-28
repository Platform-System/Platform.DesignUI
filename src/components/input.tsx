import * as React from 'react'
import { cn } from '../lib/cn'

export type InputProps = React.ComponentProps<'input'> & {
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  wrapperClassName?: string
}

const inputBaseClassName =
  'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 rounded-md border border-transparent bg-[rgb(var(--store-surface-rgb)/0.84)] px-3 py-1 text-base text-foreground shadow-[0_10px_24px_rgb(0_0_0/0.06)] transition-[color,box-shadow,background-color,border-color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'

const inputFocusClassName =
  'focus-visible:border-transparent focus-visible:bg-[rgb(var(--store-surface-strong-rgb)/0.98)] focus-visible:shadow-[0_0_20px_rgb(var(--store-accent-rgb)/0.12)]'

const inputInvalidClassName =
  'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, wrapperClassName, ...props }, ref) => {
    const inputElement = (
      <input
        ref={ref}
        type={type}
        data-slot="input"
        className={cn(
          inputBaseClassName,
          inputFocusClassName,
          inputInvalidClassName,
          startAdornment && 'pl-11',
          endAdornment && 'pr-11',
          className
        )}
        {...props}
      />
    )

    if (!startAdornment && !endAdornment) {
      return inputElement
    }

    return (
      <div className={cn('relative flex items-center w-full', wrapperClassName)}>
        {startAdornment ? (
          <div className="pointer-events-none absolute left-4 flex items-center justify-center text-muted-foreground">
            {startAdornment}
          </div>
        ) : null}
        {inputElement}
        {endAdornment ? (
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center text-muted-foreground">
            {endAdornment}
          </div>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input, inputBaseClassName, inputFocusClassName, inputInvalidClassName }

import React from 'react'
import { CheckIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const checkboxWrapperVariants = cva('flex shrink-0 cursor-pointer select-none items-center gap-2', {
    variants: {
        labelPosition: {
            rowStart: 'flex-row',
            rowEnd: 'flex-row-reverse',
            colStart: 'flex-col',
            colEnd: 'flex-col-reverse',
        },
        disabled: {
            true: 'cursor-not-allowed opacity-50',
            false: '',
        },
    },
    defaultVariants: {
        labelPosition: 'rowEnd',
    },
})

export interface CheckboxProps {
    className?: string
    label?: string
    labelPosition?: 'rowStart' | 'rowEnd' | 'colStart' | 'colEnd'
    lineThrough?: boolean
    disabled?: boolean
    defaultChecked?: boolean
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            className,
            label,
            labelPosition = 'rowEnd',
            lineThrough = false,
            disabled = false,
            defaultChecked = false,
            checked,
            onChange,
        },
        ref,
    ) => {
        return (
            <label
                aria-label={label}
                aria-disabled={disabled}
                className={cn(checkboxWrapperVariants({ labelPosition, disabled, className }))}
            >
                <input
                    className="peer sr-only"
                    aria-disabled={disabled}
                    ref={ref}
                    type="checkbox"
                    disabled={disabled}
                    defaultChecked={defaultChecked}
                    checked={checked}
                    onChange={onChange}
                    aria-hidden="false"
                />

                <span
                    className={cn(
                        lineThrough &&
                            'transition-opacity peer-checked:line-through peer-checked:opacity-80',
                    )}
                >
                    {label}
                </span>

                <span className="not-sr-only h-5 w-5 shrink-0 rounded-sm border border-muted bg-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50 peer-checked:border-primary peer-checked:bg-primary peer-checked:*:opacity-100">
                    <CheckIcon className="h-full w-full opacity-0 transition-opacity" />
                </span>
            </label>
        )
    },
)

export { Checkbox }

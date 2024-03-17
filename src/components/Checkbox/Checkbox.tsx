import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const checkboxVariants = cva(
    'peer shrink-0 cursor-pointer rounded-sm border border-primary focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
    {
        variants: {
            size: {
                default: 'h-4 w-4',
                lg: 'h-6 w-6',
            },
            color: {
                default: 'bg-primary',
                secondary: 'text-secondary',
            },
        },
        defaultVariants: {
            size: 'default',
        },
    },
)

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
    ({ className, disabled, defaultChecked, checked, onCheckedChange }, ref) => {
        return (
            <CheckboxPrimitive.Root
                ref={ref}
                disabled={disabled}
                defaultChecked={defaultChecked}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className={cn(checkboxVariants({ className }))}
            >
                <CheckboxPrimitive.Indicator
                    className={cn(
                        'flex items-center justify-center text-current transition-colors',
                    )}
                >
                    <CheckIcon className="mt-[-1px] h-4 w-4" />
                </CheckboxPrimitive.Indicator>
            </CheckboxPrimitive.Root>
        )
    },
)

export { Checkbox }

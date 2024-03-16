import React from 'react'

import { cn } from '@/lib/utils'

export interface CheckboxProps {
    className?: string
    disabled?: boolean
    defaultChecked?: boolean
    checked?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, disabled, defaultChecked, checked, onChange }, ref) => {
        return (
            <input
                className={cn(className)}
                ref={ref}
                type="checkbox"
                disabled={disabled}
                defaultChecked={defaultChecked}
                checked={checked}
                onChange={onChange}
            />
        )
    },
)

export { Checkbox }

import React from 'react'

export interface LabelProps {
    children: React.ReactNode
    htmlFor?: string
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, htmlFor }, ref) => {
    return (
        <label ref={ref} htmlFor={htmlFor}>
            {children}
        </label>
    )
})

export { Label }

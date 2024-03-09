import { cn } from '@/lib/utils'

export interface LoadingSpinnerProps {
    size?: number
    strokeWidth?: number
    className?: string
    stop?: boolean
}

export function LoadingSpinner({
    className,
    size = 24,
    strokeWidth = 2,
    stop = false,
}: LoadingSpinnerProps): JSX.Element {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            data-icon="spinner"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(!stop && 'animate-spin', className)}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    )
}

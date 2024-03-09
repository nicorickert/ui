import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { LoadingSpinner } from './LoadingSpinner'

describe('LoadingSpinner', () => {
    it('should render', () => {
        const { container } = render(<LoadingSpinner />)
        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).toBeInTheDocument()
    })

    it('should change size if size prop is given', () => {
        const { container } = render(<LoadingSpinner size={48} />)
        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).toHaveAttribute('width', '48')
        expect(spinner).toHaveAttribute('height', '48')
    })

    it('should change stroke width if strokeWidth prop is given', () => {
        const { container } = render(<LoadingSpinner strokeWidth={1} />)
        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).toHaveAttribute('stroke-width', '1')
    })

    it('should stop animation if stop prop is given', () => {
        const { container } = render(<LoadingSpinner stop />)
        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).not.toHaveClass('animate-spin')
    })
})

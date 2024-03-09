import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
    it('should render the button', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('should have disabled and aria-disabled prop if disabled prop is given', () => {
        render(<Button disabled>I'm disabled</Button>)

        const button = screen.getByRole('button')

        expect(button).toHaveAttribute('disabled')
        expect(button).toHaveAttribute('aria-disabled')
    })

    it('should have loading state if loading prop is given', () => {
        const { container } = render(<Button loading>I'm loading</Button>)

        const button = screen.getByRole('button')

        // expect(button.childNodes).includes('')
        expect(button).toHaveAttribute('disabled')
        expect(button).toHaveAttribute('aria-disabled')
        expect(button).toHaveAttribute('aria-busy')

        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).toBeInTheDocument()
    })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '@/components/Button/Button'

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
})

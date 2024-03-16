import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
    it('should render the button', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('should have disabled and aria-disabled prop if disabled prop is given', () => {
        const onClick = vi.fn()
        render(
            <Button disabled onClick={onClick}>
                I'm disabled
            </Button>,
        )

        const button = screen.getByRole('button')

        expect(button).toHaveAttribute('disabled')
        expect(button).toHaveAttribute('aria-disabled')
        button.click()
        expect(onClick).not.toHaveBeenCalled()
    })

    it('should have loading state if loading prop is given', () => {
        const { container } = render(<Button loading>I'm loading</Button>)

        const button = screen.getByRole('button')

        expect(button).toHaveAttribute('disabled')
        expect(button).toHaveAttribute('aria-disabled')
        expect(button).toHaveAttribute('aria-busy')

        const spinner = container.querySelector('[data-icon="spinner"]')
        expect(spinner).toBeInTheDocument()
    })

    it('should call onClick function when clicked', () => {
        const onClick = vi.fn()
        render(<Button onClick={onClick}>Click me</Button>)

        const button = screen.getByRole('button')

        button.click()

        expect(onClick).toHaveBeenCalledTimes(1)
    })

    it('should have the given className', () => {
        render(<Button className="bg-red-500">Click me</Button>)
        expect(screen.getByRole('button')).toHaveClass('bg-red-500')
    })

    it('should have the given ref', () => {
        const ref = createRef<HTMLButtonElement>()
        render(<Button ref={ref} />)
        const button = screen.getByRole('button')
        expect(ref.current).toBe(button)
    })
})

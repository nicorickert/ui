import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
    it('should render with default value unchecked', () => {
        render(<Checkbox />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).not.toBeChecked()
    })

    it('should render with default value checked', () => {
        render(<Checkbox defaultChecked />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
    })

    it('should change value when clicked', () => {
        render(<Checkbox />)
        const checkbox = screen.getByRole('checkbox')

        checkbox.click()
        expect(checkbox).toBeChecked()

        checkbox.click()
        expect(checkbox).not.toBeChecked()
    })

    it('should call onChange function when value changes', () => {
        const onChange = vi.fn()
        render(<Checkbox onChange={onChange} />)
        const checkbox = screen.getByRole('checkbox')

        checkbox.click()

        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('should have the given controlled value', () => {
        render(<Checkbox checked />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
    })

    it('should be disabled if disabled prop is given and onChange should not be called', () => {
        const onChange = vi.fn()
        render(<Checkbox disabled onChange={onChange} />)

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeDisabled()

        checkbox.click()

        expect(onChange).not.toHaveBeenCalled()
    })

    it('should have the given className', () => {
        const { container } = render(<Checkbox className="bg-red-500" />)
        const label = container.querySelector('label')
        expect(label).toHaveClass('bg-red-500')
    })

    it('should have the given ref', () => {
        const ref = createRef<HTMLInputElement>()
        render(<Checkbox ref={ref} />)
        const checkbox = screen.getByRole('checkbox')
        expect(ref.current).toBe(checkbox)
    })
})

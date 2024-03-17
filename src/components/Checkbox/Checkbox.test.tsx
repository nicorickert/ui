import { createRef } from 'react'
import { act } from 'react-dom/test-utils'
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
        act(() => {
            checkbox.click()
        })
        expect(checkbox).toHaveAttribute('data-state', 'checked')
        act(() => {
            checkbox.click()
        })
        expect(checkbox).toHaveAttribute('data-state', 'unchecked')
    })

    it('should call onChange function when value changes', () => {
        const onChange = vi.fn()
        render(<Checkbox onCheckedChange={onChange} />)
        const checkbox = screen.getByRole('checkbox')
        act(() => {
            checkbox.click()
        })
        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('should have the given controlled value', () => {
        render(<Checkbox checked />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
    })

    it('should be disabled if disabled prop is given and onChange should not be called', () => {
        const onChange = vi.fn()
        render(<Checkbox disabled onCheckedChange={onChange} />)

        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeDisabled()

        act(() => {
            checkbox.click()
        })
        expect(onChange).not.toHaveBeenCalled()
    })

    it('should have the given className', () => {
        render(<Checkbox className="bg-red-500" />)
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toHaveClass('bg-red-500')
    })

    it('should have the given ref', () => {
        const ref = createRef<HTMLButtonElement>()
        render(<Checkbox ref={ref} />)
        const checkbox = screen.getByRole('checkbox')
        expect(ref.current).toBe(checkbox)
    })
})

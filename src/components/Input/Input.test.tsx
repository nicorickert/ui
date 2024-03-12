import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Input } from './Input'

describe('Input', () => {
    it('should render', () => {
        render(<Input />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('should have the given placeholder', () => {
        render(<Input placeholder="Type something" />)
        expect(screen.getByPlaceholderText('Type something')).toBeInTheDocument()
    })

    it('should write the given value', async () => {
        render(<Input />)
        const input = screen.getByRole('textbox')
        await userEvent.type(input, 'Hello')
        expect(input).toHaveValue('Hello')
        await userEvent.clear(input)
        expect(input).toHaveValue('')
    })

    it('should have the given value', () => {
        render(<Input value="Hello" readOnly />)
        expect(screen.getByDisplayValue('Hello')).toBeInTheDocument()
    })

    it('should have the given type', () => {
        const { container } = render(<Input type="password" />)
        const input = container.querySelector('input')
        expect(input).toHaveAttribute('type', 'password')
    })

    it('should have the given className', () => {
        render(<Input className="bg-red-500" />)
        expect(screen.getByRole('textbox')).toHaveClass('bg-red-500')
    })

    it('should be disabled if disabled prop is given', () => {
        render(<Input disabled />)
        expect(screen.getByRole('textbox')).toBeDisabled()
    })

    it('should have the given ref', () => {
        const ref = createRef<HTMLInputElement>()
        render(<Input ref={ref} />)
        expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })

    it('should have the given id', () => {
        render(<Input id="my-input" />)
        expect(screen.getByRole('textbox')).toHaveAttribute('id', 'my-input')
    })
})

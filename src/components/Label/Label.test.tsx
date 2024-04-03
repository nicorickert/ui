import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { Label } from './Label'

describe('Label', () => {
    it('should render label with the text', () => {
        render(<Label>Label</Label>)
        expect(screen.getByText('Label')).toBeInTheDocument()
    })

    it('should render label with the given children', () => {
        render(
            <Label>
                <input type="checkbox" />
                Label
            </Label>,
        )
        expect(screen.getByRole('checkbox')).toBeInTheDocument()
        expect(screen.getByText('Label')).toBeInTheDocument()
    })

    it('should focus the input when clicked', async () => {
        render(
            <>
                <Label htmlFor="test-input">Label</Label>
                <input id="test-input" type="text" />
            </>,
        )
        const input = screen.getByRole('textbox')
        const label = screen.getByText('Label')

        expect(input).not.toHaveFocus()

        userEvent.click(label)

        await waitFor(() => {
            expect(input).toHaveFocus()
        })
    })
})

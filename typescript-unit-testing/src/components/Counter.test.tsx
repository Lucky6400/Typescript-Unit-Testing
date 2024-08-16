import { fireEvent, render, screen } from "@testing-library/react"
import Counter from "./Counter"
import userEvent from '@testing-library/user-event'

describe('Testing the Counter comp', () => {
    test('renders the initial count', () => {
        render(<Counter/>);
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
    });

    test('increments the count', async () => {
        render(<Counter/>);
        const incButton = screen.getByText(/Increase/i);
        await userEvent.click(incButton);
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    })

    test('decrements the count', async () => {
        render(<Counter/>);
        const decButton = screen.getByText(/Decrease/i);
        await userEvent.click(decButton);
        expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
    });

    test('increments the count', async () => {
        render(<Counter/>);
        const incButton = screen.getByText(/Increase/i);
        fireEvent.click(incButton);
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
    })

    test('checks the non existent button', async () => {
        render(<Counter/>);
        const noButton = screen.queryByText(/Nothing/i);
        expect(noButton).toBeNull();
    })
})
import { render, screen } from '@testing-library/react'

describe('the tests', () => {
	test('they work', () => {
		expect(2 + 2).toEqual(4)
	})

	test('can test the dom', () => {
		render(<div>Hello, World</div>)
		expect(screen.getByText(/hello, world/i)).toBeInTheDocument()
	})
})

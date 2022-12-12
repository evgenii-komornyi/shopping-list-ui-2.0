import { render, screen } from '@testing-library/react';
import CartLayout from './cart-layout.component';

test('CartLayout test', () => {
	render(<CartLayout />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

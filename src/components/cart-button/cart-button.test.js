import { render, screen } from '@testing-library/react';
import CartButton from './cart-button.component';

test('CartButton test', () => {
	render(<CartButton />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

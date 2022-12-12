import { render, screen } from '@testing-library/react';
import CartItem from './cart-item.component';

test('CartItem test', () => {
	render(<CartItem />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

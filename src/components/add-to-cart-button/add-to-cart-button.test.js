import { render, screen } from '@testing-library/react';
import AddToCartButton from './add-to-cart-button.component';

test('AddToCartButton test', () => {
	render(<AddToCartButton />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

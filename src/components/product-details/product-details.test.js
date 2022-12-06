import { render, screen } from '@testing-library/react';
import ProductDetails from './product-details.component';

test('ProductDetails test', () => {
	render(<ProductDetails />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

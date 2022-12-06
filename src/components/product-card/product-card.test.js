import { render, screen } from '@testing-library/react';
import ProductCard from './product-card.component';

test('ProductCard test', () => {
	render(<ProductCard />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

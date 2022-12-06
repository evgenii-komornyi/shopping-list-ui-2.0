import { render, screen } from '@testing-library/react';
import ProductsByCategory from './products-by-category.component';

test('ProductsByCategory test', () => {
	render(<ProductsByCategory />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

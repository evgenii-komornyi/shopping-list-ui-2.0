import { render, screen } from '@testing-library/react';
import CategoryCard from './category-card.component';

test('CategoryCard test', () => {
	render(<CategoryCard />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

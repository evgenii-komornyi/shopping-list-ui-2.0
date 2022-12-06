import { render, screen } from '@testing-library/react';
import Carousel from './carousel.component';

test('Carousel test', () => {
	render(<Carousel />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

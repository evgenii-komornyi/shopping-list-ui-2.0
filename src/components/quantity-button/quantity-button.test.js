import { render, screen } from '@testing-library/react';
import QuantityButton from './quantity-button.component';

test('QuantityButton test', () => {
	render(<QuantityButton />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

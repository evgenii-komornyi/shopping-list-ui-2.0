import { render, screen } from '@testing-library/react';
import Skeletons from './skeletons.component';

test('Skeletons test', () => {
	render(<Skeletons />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

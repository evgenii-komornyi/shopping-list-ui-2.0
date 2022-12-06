import { render, screen } from '@testing-library/react';
import CustomBreadcrumbs from './custom-breadcrumbs.component';

test('CustomBreadcrumbs test', () => {
	render(<CustomBreadcrumbs />);
	const elementToTest = screen.getByText(/text/i);
	expect(elementToTest).toBeInTheDocument();
});

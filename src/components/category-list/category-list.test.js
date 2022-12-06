import { render, screen } from '@testing-library/react';
import { CategoryList } from './category-list.component';

test('CategroiesList test', () => {
    render(<CategoryList />);
    const elementToTest = screen.getByText(/text/i);
    expect(elementToTest).toBeInTheDocument();
});

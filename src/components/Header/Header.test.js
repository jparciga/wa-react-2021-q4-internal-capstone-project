import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

describe('Header', () => {
  test('Header has WizeShop title', () => {
    render(<Header />);
    const headerElement = screen.queryByText(/WizeShop/i);
    expect(headerElement).toBeInTheDocument();
  });
});

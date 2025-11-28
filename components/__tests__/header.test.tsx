import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../header';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('renders the site title', () => {
    render(<Header />);
    expect(screen.getByText(/TechCommunity/i)).toBeInTheDocument();
  });
});

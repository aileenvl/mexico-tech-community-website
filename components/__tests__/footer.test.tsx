import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../footer';

describe('Footer', () => {
  it('renders brand and platform links', () => {
    render(<Footer />);
    expect(screen.getAllByText(/TechCommunity/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Open Source/i)[0]).toBeInTheDocument();
  });
});

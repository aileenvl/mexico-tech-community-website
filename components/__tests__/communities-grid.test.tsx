import React from 'react';
import { render, screen } from '@testing-library/react';
import { CommunitiesGrid } from '../communities-grid';

const mockCommunities = [
  {
    id: 1,
    name: 'Test Community',
    category: 'Tech',
    description: 'A test community',
    members: 10,
    meetups: 2,
    image: '',
    links: { twitter: '', github: '', website: '' },
  },
];

describe('CommunitiesGrid', () => {
  it('renders community cards', () => {
    render(<CommunitiesGrid communities={mockCommunities} />);
    expect(screen.getAllByText(/Test Community/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
  });
});

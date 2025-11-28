import React from 'react';
import { render, screen } from '@testing-library/react';
import { CommunityCard } from '../community-card';

const mockCommunity = {
  id: '1',
  name: 'Test Community',
  nameEs: 'Comunidad de Prueba',
  description: 'A test community',
  descriptionEs: 'Una comunidad de prueba',
  focus: ['Tech', 'AI'],
  focusEs: ['Tecnología', 'IA'],
  members: 10,
  contacts: [],
  image: '',
  category: 'Tech',
  meetups: 2,
  links: {},
  state: 'Nuevo León',
  stateEs: 'Nuevo León',
  city: 'Monterrey',
};

describe('CommunityCard', () => {
  it('renders community name and tags', () => {
    render(<CommunityCard community={mockCommunity} language="es" />);
    expect(screen.getAllByText(/Comunidad de Prueba/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
  });
});

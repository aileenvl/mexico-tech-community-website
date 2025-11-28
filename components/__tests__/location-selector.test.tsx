
// Move mocks above imports
const mockStates = [
  { name: 'Nuevo León', nameEs: 'Nuevo León' },
  { name: 'Jalisco', nameEs: 'Jalisco' },
];

jest.mock('@/data/communities', () => ({
  MEXICAN_STATES: mockStates,
}));

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LocationSelector from '../location-selector';

describe('LocationSelector', () => {
  it('renders and allows state selection', () => {
    const onStateChange = jest.fn();
    render(
      <LocationSelector selectedState="Nuevo León" onStateChange={onStateChange} language="es" />
    );
    expect(screen.getByText(/Nuevo León/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/Jalisco/i)).toBeInTheDocument();
  });
});

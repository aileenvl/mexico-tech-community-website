import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../search-bar';

describe('SearchBar', () => {
  it('renders and updates value', () => {
    const onChange = jest.fn();
    render(
      <SearchBar placeholder="Search..." value="" onChange={onChange} />
    );
    const input = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalledWith('test');
  });
});

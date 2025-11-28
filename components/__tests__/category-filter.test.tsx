import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CategoryFilter } from '../category-filter';

describe('CategoryFilter', () => {
  it('renders categories and handles selection', () => {
    const categories = ['All', 'Tech', 'AI'];
    const onChange = jest.fn();
    render(
      <CategoryFilter categories={categories} selected="All" onChange={onChange} />
    );
    expect(screen.getByText(/Tech/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/AI/i));
    expect(onChange).toHaveBeenCalledWith('AI');
  });
});

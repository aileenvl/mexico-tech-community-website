import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../theme-toggle';

const setTheme = jest.fn();
let resolvedTheme = 'light';

jest.mock('next-themes', () => ({
  useTheme: () => ({ resolvedTheme, setTheme }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    setTheme.mockClear();
  });

  it('switches to dark when the current theme is light', () => {
    resolvedTheme = 'light';
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /dark theme/i });
    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });

  it('switches to light when the current theme is dark', () => {
    resolvedTheme = 'dark';
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /light theme/i });
    fireEvent.click(button);
    expect(setTheme).toHaveBeenCalledWith('light');
  });
});

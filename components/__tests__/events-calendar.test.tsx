import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EventsCalendar } from '../events-calendar';

const mockEvents = [
  {
    id: '1',
    title: 'Test Event',
    description: 'A test event',
    date: '2025-12-28',
    time: '18:00',
    location: 'Monterrey',
    community: 'Test Community',
    attendees: 10,
  },
];

describe('EventsCalendar', () => {
  it('renders event titles when selecting the event date', () => {
    render(<EventsCalendar events={mockEvents} />);
    const dayButton = screen.getByRole('button', { name: '28' });
    act(() => {
      fireEvent.click(dayButton);
    });
    expect(screen.getAllByText(/Test Event/i).length).toBeGreaterThan(0);
  });
});

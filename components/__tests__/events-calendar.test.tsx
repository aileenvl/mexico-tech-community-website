import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EventsCalendar } from '../events-calendar';

const mockEvents = [
  {
    id: '1',
    title: 'Test Event',
    description: 'A test event',
    date: '2025-11-28',
    time: '18:00',
    location: 'Monterrey',
    community: 'Test Community',
    attendees: 10,
  },
];

describe('EventsCalendar', () => {
  it('renders event titles', () => {
    render(<EventsCalendar events={mockEvents} />);
    expect(screen.getAllByText(/Test Event/i)[0]).toBeInTheDocument();
  });
});

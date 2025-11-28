import { eventsData } from '../events';

describe('eventsData', () => {
  it('should be an array and contain objects with required fields', () => {
    expect(Array.isArray(eventsData)).toBe(true);
    if (eventsData.length > 0) {
      const event = eventsData[0];
      expect(event).toHaveProperty('id');
      expect(event).toHaveProperty('title');
      expect(event).toHaveProperty('date');
      expect(event).toHaveProperty('community');
    }
  });
});

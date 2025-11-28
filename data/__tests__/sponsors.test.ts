import { sponsorsData } from '../sponsors';

describe('sponsorsData', () => {
  it('should be an array', () => {
    expect(Array.isArray(sponsorsData)).toBe(true);
  });
});

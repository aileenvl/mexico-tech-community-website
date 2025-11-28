import { communitiesData } from '../communities';

describe('communitiesData', () => {
  it('should be an array and contain objects with required fields', () => {
    expect(Array.isArray(communitiesData)).toBe(true);
    if (communitiesData.length > 0) {
      const community = communitiesData[0];
      expect(community).toHaveProperty('id');
      expect(community).toHaveProperty('name');
      expect(community).toHaveProperty('description');
      expect(community).toHaveProperty('focus');
    }
  });
});

// Mock navigator.geolocation for consistent test results
beforeAll(() => {
  const geolocationMock = {
    getCurrentPosition: jest.fn((success) => {
      success({
        coords: { latitude: 25.6866, longitude: -100.3161 },
      });
    }),
  };
  // @ts-ignore
  global.navigator.geolocation = geolocationMock;
});
import { renderHook } from '@testing-library/react';
import { useUserLocation } from '../use-user-location';

describe('useUserLocation', () => {
  it('returns default location initially', () => {
    const { result } = renderHook(() => useUserLocation());
    expect(result.current.state).toBe('Nuevo León');
    expect(result.current.detected).toBe(true);
    expect(result.current.loading).toBe(false);
  });
});

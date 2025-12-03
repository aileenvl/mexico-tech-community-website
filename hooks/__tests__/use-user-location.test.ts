// Ensure geolocation mock is set before any imports
// Only mock the geolocation property, not the entire navigator object
const mockCoords = {
  latitude: 25.6866,
  longitude: -100.3161,
  accuracy: 100,
  altitude: null,
  altitudeAccuracy: null,
  heading: null,
  speed: null,
  toJSON: () => ({
    latitude: 25.6866,
    longitude: -100.3161,
    accuracy: 100,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  }),
};

const mockPosition = {
  coords: mockCoords,
  timestamp: Date.now(),
  toJSON: () => ({
    coords: mockCoords,
    timestamp: Date.now(),
  }),
};

Object.defineProperty(global.navigator, 'geolocation', {
  value: {
    getCurrentPosition: jest.fn((success, error, options) => {
      success(mockPosition);
    }),
    watchPosition: jest.fn(),
    clearWatch: jest.fn(),
  },
  configurable: true,
});
// Mock navigator.geolocation for consistent test results
// Mock geolocation using Object.defineProperty to override read-only property
beforeAll(() => {
  // No direct assignment to global.navigator.geolocation
  // The geolocation property is already mocked above
});
import { renderHook } from '@testing-library/react';
import { useUserLocation } from '../use-user-location';

describe('useUserLocation', () => {
  it('returns default location initially', () => {
    const { result } = renderHook(() => useUserLocation());
    expect(result.current.state).toBe('Nuevo León');
    //locally this may fail if timezone is different but in the CI it should be consistent
    expect(result.current.detected).toBe(false); // Default is detected if timezone matches
    expect(result.current.loading).toBe(false);
  });
});

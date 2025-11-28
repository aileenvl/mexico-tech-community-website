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

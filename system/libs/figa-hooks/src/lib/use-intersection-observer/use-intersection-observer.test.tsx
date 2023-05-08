import { renderHook } from '@testing-library/react-hooks';

import { useIntersectionObserver } from './use-intersection-observer';

describe('intersection check works when: ', () => {
  interface Window {
    IntersectionObserver: unknown;
  }

  const prepareForTesting = (isIntersecting: boolean): void => {
    const mockedIntersectionObserver = jest.fn((callback) => {
      callback([{ isIntersecting }]);

      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
      };
    });

    (window as Window).IntersectionObserver = mockedIntersectionObserver;
  };

  it('when reference is not connected it does not detect element', () => {
    prepareForTesting(false);

    const { result } = renderHook(() => useIntersectionObserver());

    expect(result.current.ref.current).toBe(null);
    expect(result.current.visible).toBe(false);
  });

  it('detects element after scroll', () => {
    prepareForTesting(true);

    const element = document.createElement('div');

    const { result } = renderHook(() => useIntersectionObserver());

    result.current.ref.current = element;

    renderHook(() => useIntersectionObserver());

    expect(result.current.visible).toBe(true);
  });
});

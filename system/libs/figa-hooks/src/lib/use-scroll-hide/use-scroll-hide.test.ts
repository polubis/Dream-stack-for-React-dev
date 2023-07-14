import { renderHook } from '@testing-library/react';
import { useScrollHide } from './use-scroll-hide';

describe('Scroll can be hidden when: ', () => {
  it('assigns styles when mounts', () => {
    const { unmount } = renderHook(() => useScrollHide());

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('auto');
  });

  it('goes back to initially used style when unmounts', () => {
    document.body.style.overflow = 'scroll';

    const { unmount } = renderHook(() => useScrollHide());

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('scroll');
  });
});

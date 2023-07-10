import { act, renderHook } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('Toggle feature can be used when: ', () => {
  const DATA = { id: 1 };

  it('works when default setup', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.data).toBe(null);
    expect(result.current.isOpen).toBe(false);
  });

  it('allows to setup initial open state and data', () => {
    const { result } = renderHook(() => useToggle(true, DATA));

    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual(DATA);
  });

  it('works in full, real scenario', () => {
    const { result } = renderHook(() => useToggle(true, DATA));

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBe(null);

    act(() => {
      result.current.open(DATA);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual(DATA);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.data).toBe(null);

    act(() => {
      result.current.toggle(DATA);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.data).toEqual(DATA);

    act(() => {
      result.current.override({ id: 2 });
    });

    expect(result.current.data).toEqual({ id: 2 });
  });
});

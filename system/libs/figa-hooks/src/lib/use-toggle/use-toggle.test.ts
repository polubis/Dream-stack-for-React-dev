import { act, renderHook } from '@testing-library/react';
import { useToggle } from './use-toggle';

describe('Toggle feature can be used when: ', () => {
  const data = { id: 1 };

  it('works with default setup', () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.data).toBe(null);
    expect(result.current.opened).toBe(false);
    expect(result.current.closed).toBe(true);
  });

  it('allows to setup initial open state and data', () => {
    const { result } = renderHook(() => useToggle({ opened: true, data }));

    expect(result.current.opened).toBe(true);
    expect(result.current.closed).toBe(false);
    expect(result.current.data).toEqual(data);
  });

  it('works in full, real scenario', () => {
    const { result } = renderHook(() => useToggle({ opened: true, data }));

    act(() => {
      result.current.close();
    });

    expect(result.current.opened).toBe(false);
    expect(result.current.closed).toBe(true);
    expect(result.current.data).toBe(null);

    act(() => {
      result.current.open();
    });

    expect(result.current.opened).toBe(true);
    expect(result.current.closed).toBe(false);
    expect(result.current.data).toBe(null);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.opened).toBe(false);
    expect(result.current.closed).toBe(true);
    expect(result.current.data).toBe(null);

    act(() => {
      result.current.toggleWithData(data);
    });

    expect(result.current.opened).toBe(true);
    expect(result.current.closed).toBe(false);
    expect(result.current.data).toEqual(data);

    act(() => {
      result.current.set({ opened: false, data: { id: 2 } });
    });

    expect(result.current.data).toEqual({ id: 2 });
    expect(result.current.closed).toBe(true);
    expect(result.current.opened).toBe(false);

    act(() => {
      result.current.openWithData({ id: 3 });
    });

    expect(result.current.data).toEqual({ id: 3 });
    expect(result.current.closed).toBe(false);
    expect(result.current.opened).toBe(true);
  });
});

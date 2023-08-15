import { renderHook } from '@testing-library/react';
import { usePopover } from './use-popover';
import { act } from '@testing-library/react-hooks';

describe('Popover works when: ', () => {
  it('allows to manage popover mechanism', () => {
    const { result } = renderHook(() =>
      usePopover<HTMLDivElement, HTMLDivElement, HTMLDivElement>(10, true)
    );

    expect(result.current.popover.opened).toBe(true);

    act(() => {
      result.current.popover.toggle();
    });

    expect(result.current.popover.opened).toBe(false);
  });
});

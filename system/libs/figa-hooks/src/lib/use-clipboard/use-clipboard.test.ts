import { act, renderHook, waitFor } from '@testing-library/react';
import { useClipboard } from './use-clipboard';
import { copied, copying, ready, unsupported } from './states';
import type { ClipboardConfig } from './defs';

describe('Clipboard can be used when: ', () => {
  const clipboardFixture = (
    value?: Partial<Clipboard>,
    config?: ClipboardConfig
  ) => {
    const original = window.navigator.clipboard;

    Object.defineProperty(window.navigator, 'clipboard', {
      value,
      writable: true,
    });

    const { result } = renderHook(() => useClipboard(config));

    return {
      result,
      restore: () => {
        Object.defineProperty(window.navigator, 'clipboard', {
          value: original,
          writable: true,
        });
      },
    };
  };

  describe('according state is assigned', () => {
    it('if unsupported', () => {
      const { result, restore } = clipboardFixture(undefined);

      expect(result.current[0]).toEqual(unsupported());

      restore();
    });

    it('if supported', () => {
      const { result, restore } = clipboardFixture({
        read: jest.fn().mockResolvedValue(null),
      });

      expect(result.current[0]).toEqual(ready());

      restore();
    });
  });

  it('skips reset if configuration parameter for it is passed', async () => {
    const { result, restore } = clipboardFixture(
      {
        read: jest.fn().mockResolvedValue(null),
        writeText: jest.fn().mockResolvedValue(null),
      },
      { cleansAfter: null }
    );

    expect(result.current[0]).toEqual(ready());

    const value = 'my-value';

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toEqual(copying({ value }));

    await waitFor(() => {
      expect(result.current[0]).toEqual(copied({ value }));
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual(copied({ value }));
    });

    restore();
  });

  it('allows to copy value and resets after 200 ms', async () => {
    const { result, restore } = clipboardFixture(
      {
        read: jest.fn().mockResolvedValue(null),
        writeText: jest.fn().mockResolvedValue(null),
      },
      { cleansAfter: 200 }
    );

    expect(result.current[0]).toEqual(ready());

    const value = 'my-value';

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toEqual(copying({ value }));

    await waitFor(() => {
      expect(result.current[0]).toEqual(copied({ value }));
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual(ready());
    });

    restore();
  });
});

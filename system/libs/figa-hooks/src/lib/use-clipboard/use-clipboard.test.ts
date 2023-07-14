import { act, renderHook, waitFor } from '@testing-library/react';
import { useClipboard } from './use-clipboard';
import type {
  ClipboardConfig,
  Copied,
  Copying,
  Error,
  Ready,
  Unsupported,
} from './defs';

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

      expect(result.current[0]).toEqual({ is: 'unsupported' } as Unsupported);

      restore();
    });

    it('if supported', () => {
      const { result, restore } = clipboardFixture({
        writeText: jest.fn().mockResolvedValue(null),
      });

      expect(result.current[0]).toEqual({ is: 'ready' } as Ready);

      restore();
    });
  });

  it('skips reset if configuration parameter for it is passed', async () => {
    const { result, restore } = clipboardFixture(
      {
        writeText: jest.fn().mockResolvedValue(null),
      },
      { cleansAfter: null }
    );

    expect(result.current[0]).toEqual({ is: 'ready' } as Ready);

    const value = 'my-value';

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toEqual({ value, is: 'copying' } as Copying);

    await waitFor(() => {
      expect(result.current[0]).toEqual({ value, is: 'copied' } as Copied);
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ value, is: 'copied' } as Copied);
    });

    restore();
  });

  it('sets error data when something went wrong with copying', async () => {
    const { result, restore } = clipboardFixture({
      writeText: jest.fn().mockRejectedValue(null),
    });

    expect(result.current[0]).toEqual({ is: 'ready' } as Ready);

    const value = 'my-value';

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toEqual({ value, is: 'copying' } as Copying);

    await waitFor(() => {
      expect(result.current[0]).toEqual({ is: 'error' } as Error);
    });

    restore();
  });

  it('allows to copy value and resets after 200 ms', async () => {
    const { result, restore } = clipboardFixture(
      {
        writeText: jest.fn().mockResolvedValue(null),
      },
      { cleansAfter: 200 }
    );

    expect(result.current[0]).toEqual({ is: 'ready' } as Ready);

    const value = 'my-value';

    act(() => {
      result.current[1](value);
    });

    expect(result.current[0]).toEqual({ value, is: 'copying' } as Copying);

    await waitFor(() => {
      expect(result.current[0]).toEqual({ value, is: 'copied' } as Copied);
    });

    await waitFor(() => {
      expect(result.current[0]).toEqual({ is: 'ready' } as Ready);
    });

    restore();
  });
});

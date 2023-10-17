import { renderHook, waitFor, render, screen } from '@testing-library/react';
import { useElementSize } from './use-element-size';

describe('Element size can be detected when: ', () => {
  const height = 600;
  const width = 800;

  beforeEach(() => {
    global.ResizeObserver = class MockedResizeObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    };
  });

  const ComponentFixture = () => {
    const [state, ref] = useElementSize<HTMLDivElement>();
    return (
      <div ref={ref}>
        {state.status === 'detected'
          ? `detected: width: ${state.width}, height: ${state.height}`
          : state.status}
      </div>
    );
  };

  it('calculates size for typical HTML node', () => {
    render(<ComponentFixture />);
    screen.getByText(`detected: width: 0, height: 0`);
  });

  it('listens for resize of element', async () => {
    const observeSpy = jest.fn();

    global.ResizeObserver = class MockedResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        setTimeout(() => {
          cb(
            [
              {
                contentRect: {
                  height,
                  width,
                },
              },
            ] as ResizeObserverEntry[],
            this
          );
        }, 150);
      }

      observe = observeSpy;
      unobserve = jest.fn();
      disconnect = jest.fn();
    };

    render(<ComponentFixture />);

    await waitFor(() => {
      screen.getByText(`detected: width: ${width}, height: ${height}`);
    });
  });

  it('listens for resize for body', async () => {
    const observeSpy = jest.fn();

    global.ResizeObserver = class MockedResizeObserver {
      constructor(cb: ResizeObserverCallback) {
        setTimeout(() => {
          cb(
            [
              {
                contentRect: {
                  height,
                  width,
                },
              },
            ] as ResizeObserverEntry[],
            this
          );
        }, 150);
      }

      observe = observeSpy;
      unobserve = jest.fn();
      disconnect = jest.fn();
    };

    const { result } = renderHook(() => useElementSize());

    await waitFor(() => {
      expect(result.current[0]).toEqual({
        status: 'detected',
        height,
        width,
      });
    });
  });

  it('disconnects after unmount', () => {
    const disconnectSpy = jest.fn();
    global.ResizeObserver = class MockedResizeObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = disconnectSpy;
    };

    const { unmount } = renderHook(() => useElementSize());

    unmount();

    expect(disconnectSpy).toHaveBeenCalledTimes(1);
  });

  it('calculates size for body when mounted', () => {
    jest
      .spyOn(document.body, 'getBoundingClientRect')
      .mockReturnValue({ height, width } as DOMRect);

    const { result } = renderHook(() => useElementSize());

    expect(result.current[0]).toEqual({
      status: 'detected',
      height,
      width,
    });
  });
});

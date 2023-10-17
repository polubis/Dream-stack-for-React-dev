import { renderHook, waitFor, render, screen } from '@testing-library/react';
import { useElementSize } from './use-element-size';
import type { ElementSizeStateStatus, ElementSizeState } from './defs';

describe('Element size can be detected when: ', () => {
  describe('tracks and', () => {
    const originalObserver = global.ResizeObserver;
    let disconnectSpy: jest.Mock;
    let observeSpy: jest.Mock;

    const HEIGHT = 600;
    const WIDTH = 800;

    beforeEach(() => {
      disconnectSpy = jest.fn();
      observeSpy = jest.fn();

      global.ResizeObserver = class MockedResizeObserver {
        constructor(cb: ResizeObserverCallback) {
          setTimeout(() => {
            cb(
              [
                {
                  contentRect: {
                    height: HEIGHT,
                    width: WIDTH,
                  },
                },
              ] as ResizeObserverEntry[],
              this
            );
          }, 150);
        }

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        observe = observeSpy;

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        unobserve = () => {};

        // eslint-disable-next-line @typescript-eslint/no-empty-function
        disconnect = disconnectSpy;
      };
    });

    afterEach(() => {
      global.ResizeObserver = originalObserver;
    });

    it('updates state if listening body', async () => {
      const { result } = renderHook(() => useElementSize());

      expect(observeSpy).toHaveBeenCalledTimes(1);
      expect(observeSpy).toHaveBeenCalledWith(document.body);
      expect(result.current[0]).toEqual({
        status: 'undetected',
      } as ElementSizeState);

      await waitFor(() => {
        expect(result.current[0]).toEqual({
          status: 'detected',
          height: HEIGHT,
          width: WIDTH,
        } as ElementSizeState);
      });
    });

    it('updates state if listening native HTML element', async () => {
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

      render(<ComponentFixture />);

      const element = document.createElement('div');
      element.innerHTML = 'undetected' as ElementSizeStateStatus;

      expect(observeSpy).toHaveBeenCalledTimes(1);
      expect(observeSpy).toHaveBeenCalledWith(element);

      screen.getByText('undetected' as ElementSizeStateStatus);

      await waitFor(() => {
        screen.getByText(`detected: width: ${WIDTH}, height: ${HEIGHT}`);
      });
    });

    it('disconnects after unmount', () => {
      const { unmount } = renderHook(() => useElementSize());

      unmount();

      expect(disconnectSpy).toHaveBeenCalledTimes(1);
    });
  });
});

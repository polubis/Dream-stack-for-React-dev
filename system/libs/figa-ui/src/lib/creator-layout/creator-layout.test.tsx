import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CreatorLayout } from './creator-layout';
import { ThemeProvider } from '../theme-provider';
import type { CreatorLayoutProps } from './defs';

describe('Creator layout can be used when: ', () => {
  const HEIGHT = 600;
  const WIDTH = 800;

  const creatorLayoutFixture = (props?: Partial<CreatorLayoutProps>) => {
    const result = render(
      <ThemeProvider>
        <CreatorLayout
          navigation={() => <button>Navigation</button>}
          previewToolbox={() => <button>Preview Toolbox Button</button>}
          codeToolbox={() => <button>Code Toolbox Button</button>}
          {...props}
        >
          <div>Code content</div>
          <div>Preview content</div>
        </CreatorLayout>
      </ThemeProvider>
    );

    return result;
  };

  const resizeObserverFixture = (height = HEIGHT, width = WIDTH) => {
    const originalResizeObserver = global.ResizeObserver;
    const disconnectSpy = jest.fn();
    const observeSpy = jest.fn();

    const ResizeObserverMock = class MockedResizeObserver {
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

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      observe = observeSpy;

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      unobserve = () => {};

      // eslint-disable-next-line @typescript-eslint/no-empty-function
      disconnect = disconnectSpy;
    };

    return {
      disconnectSpy,
      observeSpy,
      mock: () => {
        global.ResizeObserver = ResizeObserverMock;
      },
      restore: () => {
        global.ResizeObserver = originalResizeObserver;
      },
    };
  };

  it('[FRAGILE] assigns classes', () => {
    const { mock, restore } = resizeObserverFixture();

    mock();

    const { container, asFragment } = creatorLayoutFixture({
      className: 'my-class',
    });

    const component = container.querySelector('.creator-layout');

    expect(component?.className).toContain(
      'creator-layout undetected my-class'
    );
    expect(asFragment()).toMatchSnapshot();

    restore();
  });

  it('skips content rendering if view is undetected', () => {
    const { mock, restore } = resizeObserverFixture();

    mock();

    creatorLayoutFixture();

    screen.getByText(/Navigation/);
    expect(screen.queryByText(/Preview Toolbox Button/)).toBeFalsy();

    restore();
  });

  it('renders preview, code and their toolboxes if there is enough width', async () => {
    const { mock, restore } = resizeObserverFixture(HEIGHT, 1500);

    mock();

    const { asFragment } = creatorLayoutFixture();

    await waitFor(() => {
      screen.getByText(/Preview Toolbox Button/);
      screen.getByText(/Code Toolbox Button/);
      screen.getByText(/Code content/);
      screen.getByText(/Preview content/);
    });

    expect(asFragment()).toMatchSnapshot();

    restore();
  });

  it('renders code and code toolbox by default on smaller devices', async () => {
    const { mock, restore } = resizeObserverFixture(HEIGHT, 500);

    mock();

    const { asFragment } = creatorLayoutFixture();

    await waitFor(() => {
      screen.getByText(/Code Toolbox Button/);
      screen.getByText(/Code content/);
      expect(screen.queryByText(/Preview content/)).toBeFalsy();
      expect(screen.queryByText(/Preview Toolbox Button/)).toBeFalsy();
    });

    expect(asFragment()).toMatchSnapshot();

    restore();
  });

  it('renders different views and allows to change view', async () => {
    const { mock, restore } = resizeObserverFixture(HEIGHT, 1500);

    mock();

    creatorLayoutFixture({
      navigation: ({ expandCode, expandBoth, expandPreview }) => (
        <>
          <button onClick={expandCode}>Expand code</button>
          <button onClick={expandBoth}>Expand both</button>
          <button onClick={expandPreview}>Expand preview</button>
        </>
      ),
    });

    await waitFor(() => {
      screen.getByText(/Expand code/);
      screen.getByText(/Expand both/);
      screen.getByText(/Expand preview/);
      screen.getByText(/Code content/);
      screen.getByText(/Preview content/);
      screen.getByText(/Preview Toolbox Button/);
    });

    fireEvent.click(screen.getByText(/Expand code/));

    await waitFor(() => {
      screen.getByText(/Code content/);
      expect(screen.queryByText(/Preview content/)).toBeFalsy();
      expect(screen.queryByText(/Preview Toolbox Button/)).toBeFalsy();
    });

    fireEvent.click(screen.getByText(/Expand preview/));

    await waitFor(() => {
      screen.getByText(/Preview content/);
      expect(screen.queryByText(/Code content/)).toBeFalsy();
      expect(screen.queryByText(/Code Toolbox Button/)).toBeFalsy();
    });

    fireEvent.click(screen.getByText(/Expand both/));

    await waitFor(() => {
      screen.getByText(/Expand code/);
      screen.getByText(/Expand both/);
      screen.getByText(/Expand preview/);
      screen.getByText(/Code content/);
      screen.getByText(/Preview content/);
      screen.getByText(/Preview Toolbox Button/);
    });

    restore();
  });
});

import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { useScroll } from './use-scroll';
import type { ScrollAxis, ScrollConfig, ScrollResult } from './defs';

describe('Scroll data detection works when:', () => {
  const getFixture = () => screen.getByTitle(/Fixture/);
  const getTagName = () => screen.getByTitle(/Tag name/);
  const testPrevScroll = (value: number) => screen.getByText('Prev: ' + value);
  const testCurrScroll = (value: number) => screen.getByText('Curr: ' + value);
  const testValue = (value: number) => screen.getByText('Value: ' + value);
  const testResult = (result: ScrollResult) =>
    expect(screen.getByTitle('Result').innerHTML).toBe(result);

  const Fixture = (props?: Partial<ScrollConfig> & { isWindow?: boolean }) => {
    const [state, ref] = useScroll<HTMLDivElement>(props);

    return (
      <div
        ref={props?.isWindow ? undefined : ref}
        title="Fixture"
        style={{
          height: '300px',
          width: '300px',
          [props?.axis === 'x' ? 'overflowX' : 'overflowY']: 'scroll',
        }}
      >
        <span title="Tag name">{ref.current?.tagName}</span>
        <div title="Result" style={{ height: '500px', width: '500px' }}>
          {state.is}
        </div>
        {state.is !== 'idle' && (
          <>
            <div>Prev: {state.prev}</div>
            <div>Curr: {state.curr}</div>
            <div>Value: {state.value}</div>
          </>
        )}
      </div>
    );
  };

  it('[FRAGILE] the initial, no operation state is assigned', () => {
    const { result } = renderHook(() => useScroll());
    expect(result.current).toMatchSnapshot();
  });

  it('[FRAGILE] allows to assign reference to any HTML element', () => {
    render(<Fixture />);
    expect(getTagName().tagName).toBe('SPAN');
  });

  it('triggers scroll callback', async () => {
    const spy = jest.fn();

    render(<Fixture isWindow onScroll={spy} />);

    expect(window.scrollY).toBe(0);
    testResult('idle');

    fireEvent.scroll(window, { target: { scrollY: 120 } });

    await waitFor(() => {
      expect(window.scrollY).toBe(120);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('window is used and state is changed during scrolling for', () => {
    const testScrollTracking = async (axis: ScrollAxis) => {
      const containerSizeKey = axis === 'y' ? 'innerHeight' : 'innerWidth';
      const scrollOffsetKey = axis === 'y' ? 'scrollY' : 'scrollX';
      const scrollSizeKey = axis === 'y' ? 'scrollHeight' : 'scrollWidth';
      const initScrollOffset = window[scrollOffsetKey];
      const initContainerSize = window[scrollOffsetKey];
      const initScrollSize = document.documentElement[scrollSizeKey];

      Object.defineProperty(window, scrollOffsetKey, { value: 0 });
      Object.defineProperty(window, containerSizeKey, { value: 970 });
      Object.defineProperty(document.documentElement, scrollSizeKey, {
        configurable: true,
        value: 2728,
      });

      render(<Fixture isWindow axis={axis} />);

      expect(window[scrollOffsetKey]).toBe(0);
      testResult('idle');

      fireEvent.scroll(window, { target: { [scrollOffsetKey]: 100 } });

      await waitFor(() => {
        expect(window[scrollOffsetKey]).toBe(100);
        testPrevScroll(0);
        testCurrScroll(100);
        testValue(5.69);
        testResult('progress');
      });

      fireEvent.scroll(window, { target: { [scrollOffsetKey]: 80 } });

      await waitFor(() => {
        expect(window[scrollOffsetKey]).toBe(80);
        testPrevScroll(100);
        testCurrScroll(80);
        testValue(4.55);
        testResult('regress');
      });

      fireEvent.scroll(window, { target: { [scrollOffsetKey]: 80 } });

      await waitFor(() => {
        expect(window[scrollOffsetKey]).toBe(80);
        testPrevScroll(80);
        testCurrScroll(80);
        testValue(4.55);
        testResult('unchanged');
      });

      Object.defineProperty(window, scrollOffsetKey, {
        value: initScrollOffset,
      });
      Object.defineProperty(window, containerSizeKey, {
        value: initContainerSize,
      });
      Object.defineProperty(document.documentElement, scrollSizeKey, {
        configurable: true,
        value: initScrollSize,
      });
    };

    it('x axis', async () => {
      await testScrollTracking('x');
    });

    it('y axios', async () => {
      await testScrollTracking('y');
    });
  });

  describe('reference element is used and state is changed during scrolling for', () => {
    const testScrollTracking = async (axis: ScrollAxis) => {
      const scrollOffsetKey = axis === 'y' ? 'scrollTop' : 'scrollLeft';

      render(<Fixture axis={axis} />);

      const element = getFixture();
      expect(element[scrollOffsetKey]).toBe(0);
      testResult('idle');

      fireEvent.scroll(element, { target: { [scrollOffsetKey]: 100 } });

      await waitFor(() => {
        expect(element[scrollOffsetKey]).toBe(100);
        testPrevScroll(0);
        testCurrScroll(100);
        testResult('progress');
      });

      fireEvent.scroll(element, { target: { [scrollOffsetKey]: 80 } });

      await waitFor(() => {
        expect(element[scrollOffsetKey]).toBe(80);
        testPrevScroll(100);
        testCurrScroll(80);
        testResult('regress');
      });

      fireEvent.scroll(element, { target: { [scrollOffsetKey]: 80 } });

      await waitFor(() => {
        expect(element[scrollOffsetKey]).toBe(80);
        testPrevScroll(80);
        testCurrScroll(80);
        testResult('unchanged');
      });
    };

    it('x axis', async () => {
      await testScrollTracking('x');
    });

    it('y axis', async () => {
      await testScrollTracking('y');
    });
  });
});

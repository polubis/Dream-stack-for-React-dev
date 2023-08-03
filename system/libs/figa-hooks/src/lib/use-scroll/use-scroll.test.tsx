import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { useScroll } from './use-scroll';
import type { ScrollConfig, ScrollResult } from './defs';

describe('Scroll data detection works when:', () => {
  const getFixture = () => screen.getByTitle(/Fixture/);
  const getTagName = () => screen.getByTitle(/Tag name/);
  const testPrevScroll = (value: number) => screen.getByText('Prev: ' + value);
  const testCurrScroll = (value: number) => screen.getByText('Curr: ' + value);
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
        <div title="Result" style={{ height: '500px', width: '300px' }}>
          {state.is}
        </div>
        {state.is !== 'idle' && (
          <>
            <div>Prev: {state.prev}</div>
            <div>Curr: {state.curr}</div>
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

  describe('window is used and state is changed during scrolling for', () => {
    const testScrollTracking = async (
      compareProperty: 'scrollX' | 'scrollY'
    ) => {
      const initScrollValue = window[compareProperty];
      Object.defineProperty(window, compareProperty, { value: 0 });

      render(
        <Fixture isWindow axis={compareProperty === 'scrollX' ? 'x' : 'y'} />
      );

      expect(window[compareProperty]).toBe(0);
      testResult('idle');

      fireEvent.scroll(window, { target: { [compareProperty]: 100 } });

      await waitFor(() => {
        expect(window[compareProperty]).toBe(100);
        testPrevScroll(0);
        testCurrScroll(100);
        testResult('progress');
      });

      fireEvent.scroll(window, { target: { [compareProperty]: 80 } });

      await waitFor(() => {
        expect(window[compareProperty]).toBe(80);
        testPrevScroll(100);
        testCurrScroll(80);
        testResult('regress');
      });

      fireEvent.scroll(window, { target: { [compareProperty]: 80 } });

      await waitFor(() => {
        expect(window[compareProperty]).toBe(80);
        testPrevScroll(80);
        testCurrScroll(80);
        testResult('unchanged');
      });

      Object.defineProperty(window, compareProperty, {
        value: initScrollValue,
      });
    };

    it('x axis', async () => {
      await testScrollTracking('scrollX');
    });

    it('y axios', async () => {
      await testScrollTracking('scrollY');
    });
  });

  describe('reference element is used and state is changed during scrolling for', () => {
    const testScrollTracking = async (
      compareProperty: 'scrollTop' | 'scrollLeft'
    ) => {
      render(<Fixture axis={compareProperty === 'scrollLeft' ? 'x' : 'y'} />);

      const element = getFixture();
      expect(element[compareProperty]).toBe(0);
      testResult('idle');

      fireEvent.scroll(element, { target: { [compareProperty]: 100 } });

      await waitFor(() => {
        expect(element[compareProperty]).toBe(100);
        testPrevScroll(0);
        testCurrScroll(100);
        testResult('progress');
      });

      fireEvent.scroll(element, { target: { [compareProperty]: 80 } });

      await waitFor(() => {
        expect(element[compareProperty]).toBe(80);
        testPrevScroll(100);
        testCurrScroll(80);
        testResult('regress');
      });

      fireEvent.scroll(element, { target: { [compareProperty]: 80 } });

      await waitFor(() => {
        expect(element[compareProperty]).toBe(80);
        testPrevScroll(80);
        testCurrScroll(80);
        testResult('unchanged');
      });
    };

    it('x axis', async () => {
      await testScrollTracking('scrollLeft');
    });

    it('y axis', async () => {
      await testScrollTracking('scrollTop');
    });
  });
});

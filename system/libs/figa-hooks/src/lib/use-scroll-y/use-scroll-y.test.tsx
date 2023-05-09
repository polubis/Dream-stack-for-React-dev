import type { ScrollState, ScrollStateDirection } from './defs';

import { renderHook } from '@testing-library/react-hooks';
import { useScrollY } from './use-scroll-y';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Scroll metadata detection works when', () => {
  it('initially reference value is null', () => {
    const { result } = renderHook(() => useScrollY());

    expect(result.current.ref.current).toBeNull();
  });

  it('there is a default state initially', () => {
    const { result } = renderHook(() => useScrollY());

    expect(result.current.state).toEqual({
      direction: 'idle',
    } as ScrollState);
  });

  it('can listen scrolling of HTML element', () => {
    const { result } = renderHook(() => useScrollY());

    expect(result.current.state).toEqual({
      direction: 'idle',
    } as ScrollState);
  });

  it('allows to use a reference object', () => {
    const Fixture = () => {
      const { ref } = useScrollY<HTMLDivElement>();

      return <div ref={ref}>{ref.current?.tagName}</div>;
    };

    const { rerender } = render(<Fixture />);

    expect(screen.queryByText('DIV')).toBeFalsy();

    rerender(<Fixture />);

    screen.getByText('DIV');
  });

  describe('for window', () => {
    const Fixture = () => {
      const { state } = useScrollY();

      return (
        <div>
          {state.direction}
          {state.direction !== 'idle' && (
            <>
              <div>Previous scroll: {state.previousScroll}</div>
              <div>Current scroll: {state.currentScroll}</div>
            </>
          )}
        </div>
      );
    };

    beforeEach(() => {
      Object.defineProperty(window, 'scrollY', { value: 0 });
    });

    it('calculates previous and current scroll value', async () => {
      render(<Fixture />);

      expect(screen.queryByText(`Previous scroll: 0`)).toBeFalsy();
      expect(screen.queryByText(`Current scroll: 0`)).toBeFalsy();

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      await waitFor(() => {
        screen.getByText(`Previous scroll: 0`);
        screen.getByText(`Current scroll: 100`);
      });
    });

    it('detects up scroll position', async () => {
      render(<Fixture />);

      screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });

      fireEvent.scroll(window, { target: { scrollY: 80 } });

      await waitFor(() => {
        screen.getByText('up' as ScrollStateDirection);
      });
    });

    it('detects down scroll position', async () => {
      render(<Fixture />);

      screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });
    });

    it('detects unchanged scroll position', async () => {
      render(<Fixture />);

      screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      await waitFor(() => {
        screen.getByText('unchanged' as ScrollStateDirection);
      });
    });
  });

  describe('for HTML element', () => {
    const Fixture = () => {
      const { ref, state } = useScrollY<HTMLDivElement>();

      return (
        <div ref={ref} style={{ height: '300px', overflowY: 'scroll' }}>
          {state.direction}
          {state.direction !== 'idle' && (
            <>
              <span>{`Previous scroll: ${state.previousScroll}`}</span>
              <span>{`Current scroll: ${state.currentScroll}`}</span>
            </>
          )}

          <div style={{ height: '500px', width: '10px' }} />
        </div>
      );
    };

    it('calculates previous and current scroll value', async () => {
      render(<Fixture />);

      const element = screen.getByText('idle' as ScrollStateDirection);

      expect(element.scrollTop).toBe(0);

      fireEvent.scroll(element, { target: { scrollTop: 100 } });

      await waitFor(() => {
        expect(screen.getByText('down' as ScrollStateDirection).scrollTop).toBe(
          100
        );
        screen.getByText(`Previous scroll: 0`);
        screen.getByText(`Current scroll: 100`);
      });
    });

    it('detects up scroll position', async () => {
      render(<Fixture />);

      const element = screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(element, { target: { scrollTop: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });

      fireEvent.scroll(element, { target: { scrollTop: 90 } });

      await waitFor(() => {
        screen.getByText('up' as ScrollStateDirection);
      });
    });

    it('detects down scroll position', async () => {
      render(<Fixture />);

      const element = screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(element, { target: { scrollTop: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });
    });

    it('detects unchanged scroll position', async () => {
      render(<Fixture />);

      const element = screen.getByText('idle' as ScrollStateDirection);

      fireEvent.scroll(element, { target: { scrollTop: 100 } });

      await waitFor(() => {
        screen.getByText('down' as ScrollStateDirection);
      });

      fireEvent.scroll(element, { target: { scrollTop: 100 } });

      await waitFor(() => {
        screen.getByText('unchanged' as ScrollStateDirection);
      });
    });
  });
});

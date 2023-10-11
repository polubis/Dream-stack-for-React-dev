import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react';
import { useScrollTo } from './use-scroll-to';

describe('Scroll to works when: ', () => {
  it('user is able to scroll to top for window', () => {
    const spy = jest.spyOn(window, 'scrollTo').mockImplementation(jest.fn());

    const { result } = renderHook(() => useScrollTo());

    act(() => {
      result.current[1].toTop('smooth');
    });

    expect(spy).toHaveBeenCalledWith({ behavior: 'smooth', top: 0 });

    act(() => {
      result.current[1].toTop();
    });

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith({ behavior: undefined, top: 0 });
  });

  it('user is able to scroll to top for HTML element', async () => {
    const Fixture = () => {
      const [ref, { toTop }] = useScrollTo<HTMLDivElement>();

      return (
        <div
          ref={ref}
          title="Fixture"
          style={{
            height: '300px',
            width: '300px',
            overflowY: 'scroll',
          }}
        >
          <div title="Result" style={{ height: '500px', width: '500px' }}>
            Content
          </div>
          <button onClick={() => toTop('instant')}>Scroll to top</button>
        </div>
      );
    };

    render(<Fixture />);

    expect(screen.getByTitle(/Fixture/).scrollTop).toBe(0);

    fireEvent.scroll(screen.getByTitle(/Fixture/), {
      target: {
        scrollTop: 200,
      },
    });

    await waitFor(() => {
      expect(screen.getByTitle(/Fixture/).scrollTop).toBe(200);
    });

    fireEvent.click(screen.getByText(/Scroll to top/));

    await waitFor(() => {
      expect(screen.getByTitle(/Fixture/).scrollTop).toBe(0);
    });
  });
});

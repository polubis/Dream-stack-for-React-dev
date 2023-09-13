import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
} from '@testing-library/react';
import { useScrollHide } from './use-scroll-hide';

describe('Scroll can be hidden when: ', () => {
  it('works with element', () => {
    const Fixture = () => {
      const [ref, hide, show] = useScrollHide<HTMLDivElement>();

      return (
        <div
          style={{
            height: '300px',
            overflow: 'scroll',
          }}
          ref={ref}
        >
          <div title="Result" style={{ height: '500px' }} />
          Content
          <button onClick={show}>Show</button>
          <button onClick={hide}>Hide</button>
        </div>
      );
    };

    render(<Fixture />);

    const element = screen.getByText(/Content/);

    expect(element.style.overflow).toBe('hidden');

    fireEvent.click(screen.getByText(/Show/));

    expect(element.style.overflow).toBe('scroll');

    fireEvent.click(screen.getByText(/Hide/));

    expect(element.style.overflow).toBe('hidden');
  });

  it('works with window', () => {
    const documentOverflow = document.body.style.overflow;

    const { unmount, result } = renderHook(() => useScrollHide());

    expect(document.body.style.overflow).toBe('hidden');

    act(() => {
      const [, , show] = result.current;
      show();
    });

    expect(document.body.style.overflow).toBe('');

    act(() => {
      const [, hide] = result.current;
      hide();
    });

    expect(document.body.style.overflow).toBe('hidden');

    unmount();

    expect(document.body.style.overflow).toBe('');

    document.body.style.overflow = documentOverflow;
  });
});

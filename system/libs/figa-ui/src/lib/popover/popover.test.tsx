import { fireEvent, render, screen } from '@testing-library/react';
import { Popover } from './popover';

describe('Popover can be used when', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Popover className="my-class" trigger={() => <button>Click</button>}>
        {() => <div>Content</div>}
      </Popover>
    );

    const component = container.querySelector('.popover');

    expect(component?.className).toContain('popover my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to open content initially', () => {
    render(
      <Popover initialOpen trigger={() => <button>Click</button>}>
        {() => <div>Content</div>}
      </Popover>
    );

    screen.getByText(/Content/);
  });

  it('opens content', () => {
    render(
      <Popover
        trigger={({ toggle }) => <button onClick={toggle}>Click</button>}
      >
        {({ toggle }) => <div onClick={toggle}>Content</div>}
      </Popover>
    );

    fireEvent.click(screen.getByText(/Click/));

    screen.getByText(/Content/);
  });

  it('closes content', () => {
    render(
      <Popover initialOpen trigger={() => <button>Click</button>}>
        {({ toggle }) => <div onClick={toggle}>Content</div>}
      </Popover>
    );

    fireEvent.click(screen.getByText(/Content/));

    expect(screen.queryByText(/Content/)).toBeFalsy();
  });

  it('[FRAGILE] shifts popover content to left/right and top/bottom', () => {
    const initialWidth = window.innerWidth;
    const initialHeight = window.innerHeight;

    window.innerWidth = 900;
    window.innerHeight = 800;

    const { asFragment } = render(
      <Popover
        trigger={({ toggle }) => (
          <button style={{ width: '150px', height: '100px' }} onClick={toggle}>
            Click
          </button>
        )}
      >
        {({ toggle }) => (
          <div
            style={{
              height: '200px',
              width: '200px',
            }}
            onClick={toggle}
          >
            Content
          </div>
        )}
      </Popover>
    );

    fireEvent.click(screen.getByText(/Click/));

    expect(asFragment()).toMatchSnapshot();

    window.innerWidth = initialWidth;
    window.innerHeight = initialHeight;
  });
});

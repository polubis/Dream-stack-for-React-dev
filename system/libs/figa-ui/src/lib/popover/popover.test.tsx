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
});

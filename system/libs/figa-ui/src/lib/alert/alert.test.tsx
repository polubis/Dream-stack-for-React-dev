import { fireEvent, render, screen } from '@testing-library/react';
import { Alert } from './alert';
import { ALERT_TYPES, ALERT_VARIANTS } from './consts';

describe('Alert can be used when: ', () => {
  it('[FRAGILE] works with default setup', () => {
    const { asFragment } = render(<Alert>My text</Alert>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Alert className="my-class">My text</Alert>
    );

    const component = container.querySelector('.alert');

    expect(component?.className).toContain('alert info filled my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes when fixed and trimmed', () => {
    const { container, asFragment } = render(
      <Alert className="my-class" fixed trimmed>
        My text
      </Alert>
    );

    const component = container.querySelector('.alert');

    expect(component?.className).toContain(
      'alert info filled fixed trimmed my-class'
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders text', () => {
    render(<Alert>My text</Alert>);

    screen.getByText(/My text/);
  });

  it('allows to pass other native props', () => {
    render(<Alert title="Alert">My text</Alert>);

    screen.getByTitle(/Alert/);
  });

  it('allows to attach event handlers', () => {
    const clickSpy = jest.fn();

    render(<Alert onClick={clickSpy}>My text</Alert>);

    fireEvent.click(screen.getByText(/My text/));

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('[FRAGILE] allows to setup max width and other styles', () => {
    const { container } = render(
      <Alert maxWidth="300px" style={{ maxWidth: '100px', cursor: 'pointer' }}>
        My text
      </Alert>
    );

    const el = container.querySelector('.alert') as HTMLDivElement;

    expect(el.style.maxWidth).toBe('300px');
    expect(el.style.cursor).toBe('pointer');
  });

  it('[FRAGILE] assigns type classes', () => {
    ALERT_TYPES.forEach((type) => {
      const { container, asFragment } = render(
        <Alert type={type}>My text</Alert>
      );

      const el = container.querySelector('.' + type) as HTMLDivElement;

      expect(el.className).toContain(type);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('[FRAGILE] assigns variant classes', () => {
    ALERT_VARIANTS.forEach((variant) => {
      const { container, asFragment } = render(
        <Alert variant={variant}>My text</Alert>
      );

      const el = container.querySelector('.' + variant) as HTMLDivElement;

      expect(el.className).toContain(variant);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

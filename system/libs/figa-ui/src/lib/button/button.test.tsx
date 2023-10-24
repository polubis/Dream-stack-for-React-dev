import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button can be used when', () => {
  it('[FRAGILE] renders with default props', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders content', () => {
    render(
      <Button>
        Click Me! <b>please</b>
      </Button>
    );

    screen.getByText(/Click Me!/);
    screen.getByText(/please/);
  });

  it('[FRAGILE] assigns class names by properties', () => {
    const { container } = render(
      <Button
        className="my-button"
        shape="rounded"
        equal
        size={2}
        variant="outlined"
        motive="secondary"
      />
    );

    const button = container.querySelector('.button');

    expect(button?.className).toBe(
      'button size-2 rounded outlined secondary equal my-button'
    );
  });

  it('injects native button properties', () => {
    render(<Button role="button">Click me!</Button>);

    screen.getByRole('button');
  });

  it('handles events', () => {
    const onClickSpy = jest.fn();

    render(<Button onClick={onClickSpy}>Click me!</Button>);

    fireEvent.click(screen.getByText(/Click me!/));
    fireEvent.click(screen.getByText(/Click me!/));

    expect(onClickSpy).toHaveBeenCalledTimes(2);
  });

  it('allows to make button disabled', () => {
    const onClickSpy = jest.fn();

    render(
      <Button disabled onClick={onClickSpy}>
        Click me!
      </Button>
    );

    fireEvent.click(screen.getByText(/Click me!/));

    expect(onClickSpy).toHaveBeenCalledTimes(0);
  });

  it('makes button disabled if loading', () => {
    const onClickSpy = jest.fn();

    render(
      <Button loading onClick={onClickSpy}>
        Click me!
      </Button>
    );

    fireEvent.click(screen.getByText(/Click me!/));

    expect(onClickSpy).toHaveBeenCalledTimes(0);
  });

  it('hides text and displays loader if loading', () => {
    const { asFragment } = render(<Button loading>Click me!</Button>);

    expect(asFragment()).toMatchSnapshot();
  });
});

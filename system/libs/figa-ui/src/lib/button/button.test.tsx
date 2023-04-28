import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe(Button.name, () => {
  it('renders with default props', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with custom props', () => {
    const { asFragment } = render(
      <Button
        className="my-button"
        shape="rounded"
        size={2}
        variant="outlined"
        motive="secondary"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles onClick event', () => {
    const onClickSpy = jest.fn();

    render(<Button onClick={onClickSpy}>Click me!</Button>);

    fireEvent.click(screen.getByText(/Click me!/));
    fireEvent.click(screen.getByText(/Click me!/));

    expect(onClickSpy).toHaveBeenCalledTimes(2);
  });
});

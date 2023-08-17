import { fireEvent, render, screen } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(<Checkbox className="my-class" />);

    const component = container.querySelector('.checkbox');

    expect(component?.className).toContain('checkbox my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to reverse the checkbox label and input', () => {
    const { asFragment } = render(<Checkbox reversed />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to pass custom id', () => {
    const { asFragment } = render(<Checkbox id="my-id" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] skips label rendering if not passed', () => {
    const { asFragment } = render(<Checkbox />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to attach custom event handlers to checkbox input', () => {
    const spy = jest.fn();

    render(<Checkbox label="my-label" onChange={spy} />);

    fireEvent.click(screen.getByText(/my-label/));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

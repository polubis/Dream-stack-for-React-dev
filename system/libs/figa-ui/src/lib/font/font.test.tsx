import { fireEvent, render, screen } from '@testing-library/react';
import { Font } from './font';

describe('Font can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <Font className="my-class" variant="h5" bold italic trim>
        My content inside
      </Font>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to use other than default element', () => {
    const { container } = render(
      <Font variant="h5" element="span">
        My content inside
      </Font>
    );

    const font = container.querySelector('.font');

    expect(font?.tagName).toBe('SPAN');
  });

  it('allows to pass any other properties', () => {
    const spy = jest.fn();

    render(
      <Font variant="h5" onClick={spy}>
        My content inside
      </Font>
    );

    fireEvent.click(screen.getByText(/My content inside/));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

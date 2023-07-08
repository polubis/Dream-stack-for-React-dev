import { fireEvent, render, screen } from '@testing-library/react';
import { Field } from './field';

describe('Field can be used when: ', () => {
  it('[FRAGILE] assigns classes if error passed', () => {
    const { asFragment } = render(
      <Field className="my-class" error="My error" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes if no error passed', () => {
    const { asFragment } = render(
      <Field className="my-class" hint="My content" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass any other native property', () => {
    const spy = jest.fn();

    const { asFragment } = render(
      <Field
        hint="My content"
        maxWidth="300px"
        minWidth="200px"
        spacing={[200, 200, 200, 200]}
        onClick={spy}
      />
    );

    fireEvent.click(screen.getByText(/My content/));

    expect(asFragment()).toMatchSnapshot();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Badge can be used when: ', () => {
  it('[FRAGILE] works with default setup', () => {
    const { asFragment } = render(<Badge>My content inside</Badge>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <Badge className="my-class" variant="outlined" motive="secondary">
        My content inside
      </Badge>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass other native properties', () => {
    const spy = jest.fn();

    render(<Badge onClick={spy}>My content inside</Badge>);

    fireEvent.click(screen.getByText(/My content inside/));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

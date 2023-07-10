import { fireEvent, render, screen } from '@testing-library/react';
import { Thumbnail } from './thumbnail';

describe('Thumbnail can be used when: ', () => {
  const SRC =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMoD_dTTKX7ZPPEdDaSFDzOfKk7WNfPDq8w&usqp=CAU';

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <Thumbnail
        className="my-class"
        src={SRC}
        title="My thumbnail"
        alt="My thumbnail"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass native image properties', () => {
    const spy = jest.fn();

    render(
      <Thumbnail
        src={SRC}
        title="My thumbnail"
        alt="My thumbnail"
        onClick={spy}
      />
    );

    fireEvent.click(screen.getByAltText(/My thumbnail/));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('allows to use own image', () => {
    render(
      <Thumbnail
        src={SRC}
        title="My thumbnail"
        alt="My thumbnail"
        img={(props) => <img alt={props.alt} src={props.src} />}
      />
    );

    screen.getByAltText(/My thumbnail/);
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { Image } from './image';

describe('Image can be used when: ', () => {
  const SRC = 'https://localhost:3000/';

  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Image className="my-class" alt="My image" src={SRC} />
    );

    const component = container.querySelector('.image');

    expect(component?.className).toContain('image my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('assigns alt text', () => {
    render(<Image alt="My image" src={SRC} />);

    screen.getByAltText(/My image/);
  });

  it('allows to pass max width and height', () => {
    render(
      <Image maxHeight="200px" maxWidth="400px" alt="My image" src={SRC} />
    );

    expect(screen.getByAltText(/My image/).style.maxHeight).toBe('200px');
    expect(screen.getByAltText(/My image/).style.maxWidth).toBe('400px');
  });

  it('[FRAGILE] allows to set lazy attribute for image', () => {
    const { asFragment } = render(<Image lazy alt="My image" src={SRC} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass custom properties connected with picture element', () => {
    const spy = jest.fn();

    render(<Image alt="My image" src={SRC} onClick={spy} />);

    fireEvent.click(screen.getByAltText(/My image/));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

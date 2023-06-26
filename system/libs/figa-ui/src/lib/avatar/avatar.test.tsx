import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Avatar can be used when: ', () => {
  const SRC = 'https://media-cldnry.s-nbcnews.com';
  const ALT = 'My image';
  const CLASS_NAME = 'my-class';

  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Avatar className={CLASS_NAME} alt={ALT} src={SRC} />
    );

    const figure = container.querySelector('.avatar');

    expect(figure?.className).toContain('avatar medium rounded ' + CLASS_NAME);

    const img = container.querySelector('.avatar-image');

    expect(img?.className).toContain('avatar-image');

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to use custom image element', () => {
    const { asFragment } = render(
      // eslint-disable-next-line jsx-a11y/alt-text
      <Avatar alt={ALT} src={SRC} renderImage={(props) => <img {...props} />} />
    );

    screen.getByAltText(ALT);
    expect(asFragment()).toMatchSnapshot();
  });

  it('assigns alt attribute to default rendered image', () => {
    render(<Avatar alt={ALT} src={SRC} />);

    screen.getByAltText(ALT);
  });

  it('allows to pass other props for container element', () => {
    render(<Avatar alt={ALT} src={SRC} title="Title" />);

    screen.getByTitle(/Title/);
  });
});

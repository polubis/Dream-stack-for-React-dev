import { render, screen } from '@testing-library/react';
import { Avatars } from './avatars';
import { Avatar } from '../avatar/avatar';

describe('Avatars can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { container, asFragment } = render(
      <Avatars className="my-class" to={1}>
        <Avatar src="https://" alt="image" />
        <Avatar src="https://" alt="image" />
      </Avatars>
    );

    const component = container.querySelector('.avatars');

    expect(component?.className).toContain('avatars my-class');
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders counter badge', () => {
    render(
      <Avatars to={1}>
        <Avatar src="https://" alt="image" />
        <Avatar src="https://" alt="image" />
      </Avatars>
    );

    screen.getByText('+1');
  });

  it('[FRAGILE] calculates offset for children elements', () => {
    const { asFragment } = render(
      <Avatars size="big" to={3}>
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
      </Avatars>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('skips counter badge render if the children count is equal to given limit', () => {
    render(
      <Avatars size="big" to={2}>
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
      </Avatars>
    );

    expect(screen.queryByText('+')).toBeFalsy();
  });

  it('skips counter badge render if the children count is less than given limit', () => {
    render(
      <Avatars size="big" to={1}>
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
      </Avatars>
    );

    expect(screen.queryByText('+')).toBeFalsy();
  });

  it('allows to pass other native HTML element props to container', () => {
    render(
      <Avatars size="big" to={1} title="My title">
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
      </Avatars>
    );

    screen.getByTitle(/My title/);
  });

  it('[FRAGILE] sets default size', () => {
    const { container } = render(
      <Avatars to={1}>
        <Avatar src="https://" alt="image" size="big" />
        <Avatar src="https://" alt="image" size="big" />
      </Avatars>
    );

    const component = container.querySelector('.avatars');

    expect(component?.className).toBe('avatars rounded');
  });

  it('[FRAGILE] injects properties to avatar component', () => {
    const { asFragment } = render(
      <Avatars to={1} size="medium" shape="rectangle">
        <Avatar src="https://" alt="image" size="big" shape="rounded" />
        <Avatar src="https://" alt="image" size="big" shape="rounded" />
      </Avatars>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

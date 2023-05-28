import { render } from '@testing-library/react';
import { Icon } from './icon';
import type { IconProps } from './defs';

describe('Icon can be used when', () => {
  const iconFixture = (props: Partial<IconProps> = {}) => {
    const result = render(
      <Icon {...props}>
        <path d="M13.0001 20H11.0001V8L5.50008 13.5L4.08008 12.08L12.0001 4.16L19.9201 12.08L18.5001 13.5L13.0001 8V20Z" />
      </Icon>
    );

    return result;
  };

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = iconFixture({ className: 'my-class' });

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders path with given size', () => {
    const { asFragment } = iconFixture({ className: 'my-class', size: 36 });

    expect(asFragment()).toMatchSnapshot();
  });
});

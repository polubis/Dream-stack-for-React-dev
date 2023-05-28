import { render } from '@testing-library/react';

import { LogoGraphic } from './logo-graphic';

describe('Logo graphic can be used when', () => {
  it('[FRAGILE] renders logo with size', () => {
    const { asFragment } = render(
      <LogoGraphic className="my-class" size={52} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

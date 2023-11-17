import { render } from '@testing-library/react';
import { Placeholder } from './placeholder';

describe('Placeholder can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <Placeholder className="my-class" full variant="outlined" />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Blockquote } from './blockquote';

describe('Blockquote can be used when', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(
      <Blockquote variant="b2" className="my-class">
        My text
      </Blockquote>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Divider } from './divider';

describe('Divider can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = render(<Divider className="my-class" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] can be used in y axis and allows to pass box properties', () => {
    const { asFragment } = render(
      <Divider
        axis="y"
        motive="primary"
        padding={[200, 200, 200, 200]}
        margin={[200, 200, 200, 200]}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

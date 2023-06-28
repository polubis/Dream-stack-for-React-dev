import { render } from '@testing-library/react';
import { Loader } from './loader';
import { LOADER_SIZES, LOADER_VARIANTS } from './consts';

describe('Loader can be used when: ', () => {
  it('[FRAGILE] allows to add custom class', () => {
    const { asFragment } = render(<Loader className="my-class" />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(<Loader />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with all sizes', () => {
    LOADER_SIZES.forEach((size) => {
      const { asFragment } = render(<Loader size={size} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('renders with all variants', () => {
    LOADER_VARIANTS.forEach((variant) => {
      const { asFragment } = render(<Loader variant={variant} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

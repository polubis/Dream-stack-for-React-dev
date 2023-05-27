import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer can be used when', () => {
  const footerFixture = () => {
    const result = render(
      <Footer
        logo={<div>Logo</div>}
        socials={<div>I</div>}
        blocks={
          <>
            <div>A</div>
            <div>B</div>
            <div>C</div>
          </>
        }
      />
    );

    return result;
  };

  it('[FRAGILE] renders with classes', () => {
    const { asFragment } = footerFixture();

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders blocks, socials and logo', () => {
    footerFixture();

    screen.getByText('A');
    screen.getByText('B');
    screen.getByText('C');
    screen.getByText('I');
    screen.getByText('Logo');
  });
});

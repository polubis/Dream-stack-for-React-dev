import { render, screen } from '@testing-library/react';

import { Navigation } from './navigation';

describe('Navigation can be used when', () => {
  const LINKS = [<div key={0}>Link 1</div>, <div key={1}>Link 2</div>];
  const ACTION = <div>Action</div>;
  const LOGO = <div>Logo</div>;

  it('allows to render logo, links and action components as nodes', () => {
    render(<Navigation action={ACTION} logo={LOGO} links={LINKS} />);

    screen.getByText(/Link 1/);
    screen.getByText(/Link 2/);
    screen.getByText(/Logo/);
    screen.getByText(/Logo/);
  });

  it('[FRAGILE] has the corresponding classes and DOM nodes generated', () => {
    const { asFragment } = render(
      <Navigation action={ACTION} logo={LOGO} links={LINKS} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { Navigation } from './navigation';

describe('Navigation can be used when', () => {
  const LINKS = [
    <a href="https://google.com" key={0}>
      Link 1
    </a>,
    <a href="https://google.com" key={1}>
      Link 2
    </a>,
  ];
  const ACTION = <div>Action</div>;
  const LOGO = <div>Logo</div>;

  it('[FRAGILE] allows to render logo, links and action components as nodes', () => {
    const { asFragment } = render(
      <Navigation
        className="my-class"
        action={ACTION}
        logo={LOGO}
        links={LINKS}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to toggle mobile menu', () => {
    const { asFragment } = render(
      <Navigation action={ACTION} logo={LOGO} links={LINKS} />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByTitle(/Open/));

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(screen.getByTitle(/Close/));

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to toggle mobile menu by reactive API', async () => {
    const { container } = render(
      <Navigation action={ACTION} logo={LOGO} links={LINKS} />
    );

    expect(container.querySelector('.navigation-mobile.opened')).toBeFalsy();

    act(() => {
      Navigation.toggle(true);
    });

    await waitFor(() => {
      expect(container.querySelector('.navigation-mobile.opened')).toBeTruthy();
    });

    act(() => {
      Navigation.toggle(false);
    });

    await waitFor(() => {
      expect(container.querySelector('.navigation-mobile.opened')).toBeFalsy();
    });
  });
});

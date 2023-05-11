import { render, screen } from '@testing-library/react';

import { Logo } from './logo';

describe('Logo can be used when', () => {
  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(<Logo />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] has the corresponding classes generated', () => {
    const { container } = render(<Logo className="my-class" />);

    const logo = container.querySelector('.logo');

    expect(logo?.className).toBe('logo my-class');
  });

  it('renders company name by default', () => {
    render(<Logo className="my-class" />);

    screen.getByText(/Green/);
    screen.getByText(/On/);
    screen.getByText(/Software/);
  });

  it('allows to pass custom text', () => {
    render(<Logo className="my-class" parts={['My', 'Custom', 'App']} />);

    screen.getByText(/My/);
    screen.getByText(/Custom/);
    screen.getByText(/App/);
  });

  it('allows to pass custom graphic node', () => {
    render(<Logo graphic={<div>My graphic</div>} />);

    screen.getByText(/My graphic/);
  });
});

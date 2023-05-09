import { render, screen } from '@testing-library/react';
import { Link } from './link';

describe('Link can be used when', () => {
  it('[FRAGILE] renders with default props', () => {
    const { asFragment } = render(
      <Link variant="h5">
        <a href="/">Link</a>
      </Link>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] allows to pass classes', () => {
    render(
      <Link className="class1 class2" variant="h2">
        <a href="/">Link</a>
      </Link>
    );

    const link = screen.getByText(/Link/);
    expect(link.parentElement?.className).toContain('class1 class2');
  });

  it('[FRAGILE] the parent node is a span', () => {
    render(
      <Link variant="h2">
        <a href="/">Link</a>
      </Link>
    );

    const link = screen.getByText(/Link/);
    expect(link.parentElement?.tagName).toBe('SPAN');
  });
});

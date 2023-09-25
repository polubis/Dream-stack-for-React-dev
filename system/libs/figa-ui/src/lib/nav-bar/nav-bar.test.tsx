import { render } from '@testing-library/react';
import { NavBar } from './nav-bar';
import { ScrollReturn, useScroll } from '@system/figa-hooks';

jest.mock('@system/figa-hooks', () => ({
  useScroll: jest.fn(),
}));

describe('Navbar can be used when: ', () => {
  it('[FRAGILE] assigns classes', () => {
    (useScroll as jest.Mock).mockImplementation(
      (): ScrollReturn => [{ is: 'idle' }, { current: null }]
    );

    const { asFragment } = render(
      <NavBar className="my-class">
        <div>Content</div>
      </NavBar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] shows navbar when user scrolled more than 20% of page', async () => {
    (useScroll as jest.Mock).mockImplementation(
      (): ScrollReturn => [
        { is: 'progress', curr: 200, prev: 180, value: 21 },
        { current: null },
      ]
    );

    const { container } = render(<NavBar>Content</NavBar>);

    expect(container.querySelector('.out')).toBeTruthy();
  });
});

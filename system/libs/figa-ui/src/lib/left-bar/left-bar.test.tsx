import { render, screen } from '@testing-library/react';
import { useScrollY, type UseScrollYReturn } from '@system/figa-hooks';

import { LeftBar } from './left-bar';

jest.mock('@system/figa-hooks', () => ({
  useScrollY: jest.fn(),
}));

describe('Left bar can be used when', () => {
  const leftBarFixture = (useScrollYReturn: Omit<UseScrollYReturn, 'ref'>) => {
    (useScrollY as jest.Mock).mockImplementationOnce(() => useScrollYReturn);

    const result = render(
      <LeftBar className="my-class">
        <div>A</div>
        <div>B</div>
      </LeftBar>
    );

    return result;
  };

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = leftBarFixture({
      state: {
        direction: 'idle',
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] bar is visible when nothing happened', () => {
    const { container } = leftBarFixture({
      state: {
        direction: 'idle',
      },
    });

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar visible');
  });

  it('[FRAGILE] bar is hidden when scrolling down', () => {
    const { container } = leftBarFixture({
      state: {
        direction: 'down',
        previousScroll: 0,
        currentScroll: 100,
      },
    });

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar hidden');
  });

  it('[FRAGILE] bar is visible when scrolling up', () => {
    const { container } = leftBarFixture({
      state: {
        direction: 'up',
        previousScroll: 0,
        currentScroll: 100,
      },
    });

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar visible');
  });
});

import { render, screen } from '@testing-library/react';
import { useScroll, type ScrollReturn } from '@system/figa-hooks';

import { LeftBar } from './left-bar';

jest.mock('@system/figa-hooks', () => ({
  useScroll: jest.fn(),
}));

describe('Left bar can be used when: ', () => {
  const leftBarFixture = (returnsValue: ScrollReturn) => {
    (useScroll as jest.Mock).mockImplementationOnce(() => returnsValue);

    const result = render(
      <LeftBar className="my-class">
        <div>A</div>
        <div>B</div>
      </LeftBar>
    );

    return result;
  };

  it('[FRAGILE] assigns classes', () => {
    const { asFragment } = leftBarFixture([
      {
        is: 'idle',
      },
      { current: null },
    ]);

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] bar is visible when nothing happened', () => {
    const { container } = leftBarFixture([
      {
        is: 'idle',
      },
      { current: null },
    ]);

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar visible');
  });

  it('[FRAGILE] bar is hidden when scrolling down', () => {
    const { container } = leftBarFixture([
      {
        is: 'progress',
        prev: 0,
        curr: 100,
      },
      { current: null },
    ]);

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar hidden');
  });

  it('[FRAGILE] bar is visible when scrolling up', () => {
    const { container } = leftBarFixture([
      {
        is: 'regress',
        prev: 0,
        curr: 100,
      },
      { current: null },
    ]);

    screen.getByText('A');
    screen.getByText('B');

    expect(
      (container.querySelector('.left-bar') as HTMLElement).className
    ).toBe('left-bar visible');
  });
});

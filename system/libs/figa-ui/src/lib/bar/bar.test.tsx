import { render } from '@testing-library/react';
import { Bar } from './bar';

describe('Bar can be used when: ', () => {
  it('[FRAGILE] assigns default classes', () => {
    const { asFragment } = render(
      <Bar className="my-class">
        <button>A</button>
        <button>B</button>
      </Bar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] assigns given positions', () => {
    const { asFragment } = render(
      <Bar top right>
        <button>A</button>
      </Bar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('[FRAGILE] can be hidden', () => {
    const { asFragment } = render(
      <Bar hidden>
        <button>A</button>
      </Bar>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

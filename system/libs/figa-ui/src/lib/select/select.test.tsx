import type { SelectOption } from './defs';

import { render, fireEvent, screen } from '@testing-library/react';
import { Select } from './select';
import React from 'react';

describe('select can be used when: ', () => {
  jest.spyOn(React, 'useId').mockImplementation(() => ':r0:');

  beforeEach(() => {
    global.ResizeObserver = class MockedResizeObserver {
      observe = jest.fn();
      unobserve = jest.fn();
      disconnect = jest.fn();
    };
  });

  const OPTIONS: SelectOption[] = [
    {
      key: '0',
      child: <div>Child 0</div>,
    },
    {
      key: '1',
      child: <div>Child 1</div>,
    },
  ];

  it('[FRAGILE] renders with default props', () => {
    const container = render(
      <Select
        className="my-class"
        placeholder="placeholder"
        options={[]}
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('renders with default placeholder', () => {
    render(
      <Select placeholder="placeholder" options={[]} onChange={jest.fn()} />
    );

    screen.getByText(/placeholder/);
  });

  it('displays options initially', () => {
    render(<Select options={OPTIONS} initialOpen onChange={jest.fn()} />);

    screen.getByText(/Child 0/);
    screen.getByText(/Child 1/);
  });

  it('[FRAGILE] toggles option menu and selects item', async () => {
    const container = render(
      <Select
        value={OPTIONS[0].key}
        options={OPTIONS}
        placeholder="Trigger"
        onChange={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText(/Child 0/));

    expect(container).toMatchSnapshot();

    fireEvent.click(screen.getByText(/Child 1/));

    expect(container).toMatchSnapshot();
  });
});

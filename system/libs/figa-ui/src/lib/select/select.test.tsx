import type { SelectOption } from './defs';

import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import { Select } from './select';

describe('select can be used when: ', () => {
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
    const { asFragment } = render(<Select options={[]} onChange={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to pass custom placeholder', () => {
    render(
      <Select placeholder="placeholder" options={[]} onChange={jest.fn()} />
    );

    screen.getByText(/placeholder/);
  });

  it('options are hidden by default', () => {
    render(<Select options={OPTIONS} onChange={jest.fn()} />);

    expect(screen.queryByText(/Child 0/)).toBeFalsy();
    expect(screen.queryByText(/Child 1/)).toBeFalsy();
  });

  it('displays options initially', () => {
    render(<Select options={OPTIONS} initialOpen onChange={jest.fn()} />);

    screen.getByText(/Child 0/);
    screen.getByText(/Child 1/);
  });

  it('opens option menu after click', () => {
    const Fixture = () => {
      const [value, setValue] = useState('');

      return (
        <Select
          value={value}
          options={OPTIONS}
          placeholder="Trigger"
          onChange={setValue}
        />
      );
    };

    render(<Fixture />);

    fireEvent.click(screen.getByText(/Trigger/));

    screen.getByText(/Child 0/);
    screen.getByText(/Child 1/);
  });

  it('closes menu after element choose', () => {
    const Fixture = () => {
      const [value, setValue] = useState('');

      return (
        <Select
          value={value}
          options={OPTIONS}
          placeholder="Trigger"
          onChange={setValue}
        />
      );
    };

    render(<Fixture />);

    fireEvent.click(screen.getByText(/Trigger/));

    screen.getByText(/Child 0/);
    screen.getByText(/Child 1/);

    fireEvent.click(screen.getByText(/Child 0/));

    screen.getByText(/Child 0/);
    expect(screen.queryByText(/Child 1/)).toBeFalsy();
  });

  it('closes menu after outside click', () => {
    const Fixture = () => {
      const [value, setValue] = useState('');

      return (
        <>
          <button>Click outside</button>

          <Select
            value={value}
            options={OPTIONS}
            placeholder="Trigger"
            onChange={setValue}
          />
        </>
      );
    };

    render(<Fixture />);

    fireEvent.click(screen.getByText(/Trigger/));

    screen.getByText(/Child 0/);
    screen.getByText(/Child 1/);

    fireEvent.click(screen.getByText(/Click outside/));

    screen.getByText(/Trigger/);
  });

  describe('[FRAGILE] assigns correct HTML metadata when', () => {
    it('opened', () => {
      const { asFragment } = render(
        <Select options={OPTIONS} initialOpen onChange={jest.fn()} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('closed', () => {
      const { asFragment } = render(
        <Select options={OPTIONS} onChange={jest.fn()} />
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it('element is choosed', () => {
      const { asFragment } = render(
        <Select options={OPTIONS} placeholder="Trigger" onChange={jest.fn()} />
      );

      fireEvent.click(screen.getByText(/Trigger/));

      expect(asFragment()).toMatchSnapshot();
    });
  });
});

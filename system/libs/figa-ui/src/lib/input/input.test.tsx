import type { ChangeEvent } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './input';

describe('User is able to user input when', () => {
  const PLACEHOLDER = 'type...';

  it('[FRAGILE] renders with default setup', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to use placeholder', () => {
    render(<Input placeholder={PLACEHOLDER} />);

    screen.getByPlaceholderText(PLACEHOLDER);
  });

  it('renders loader if loading', () => {
    const { asFragment } = render(<Input placeholder={PLACEHOLDER} loading />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('makes input disabled', () => {
    const { asFragment } = render(<Input placeholder={PLACEHOLDER} disabled />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders error icon if invalid', () => {
    const { asFragment } = render(<Input placeholder={PLACEHOLDER} invalid />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('assigns classes when additional options passed', () => {
    const { asFragment } = render(
      <Input
        placeholder={PLACEHOLDER}
        className="my-input"
        disabled
        loading
        invalid
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('allows to use native input properties', () => {
    const onChangeSpy = jest.fn();

    render(<Input placeholder={PLACEHOLDER} onChange={onChangeSpy} />);

    fireEvent.change(screen.getByPlaceholderText(PLACEHOLDER), {
      target: { value: 'value' },
    } as ChangeEvent<HTMLInputElement>);

    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('assigns classes', () => {
    render(<Input className="my-class" placeholder={PLACEHOLDER} />);

    const element = screen.getByPlaceholderText(PLACEHOLDER);

    expect(element.parentElement?.className).toBe('input filled my-class');
  });
});

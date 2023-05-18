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

    expect(element.parentElement?.className).toBe('input my-class');
  });
});

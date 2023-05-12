import type { EmojiPickerProps } from './defs';

import { render, fireEvent, screen } from '@testing-library/react';

import { EmojiPicker } from './emoji-picker';
import { EmojiPickerData } from './defs';
import { EMOJI_DATA } from './consts';

describe('Emoji picker can be used when', () => {
  const TITLE: EmojiPickerProps['title'] = 'Pick your emoji';
  const DATA: EmojiPickerData = [{ emoji: '💀', name: 'skull' }];

  it('renders default emojis', () => {
    render(<EmojiPicker title={TITLE} onSelect={jest.fn()} />);

    screen.getByText(TITLE);
    screen.getByText(EMOJI_DATA[0].emoji);
  });

  it('allows to use own emoji data', () => {
    render(<EmojiPicker title={TITLE} data={DATA} onSelect={jest.fn()} />);

    screen.getByText(DATA[0].emoji);
  });

  it('renders emoji list items with data attribute', () => {
    render(<EmojiPicker data={DATA} title={TITLE} onSelect={jest.fn()} />);

    const element = screen.getByText(DATA[0].emoji);

    expect(element.dataset.emoji).toBe(DATA[0].emoji);
  });

  it('classes are created', () => {
    render(
      <EmojiPicker title={TITLE} className="my-class" onSelect={jest.fn()} />
    );

    const element = screen.getByText(TITLE);

    expect(element.parentElement?.className).toBe('emoji-picker my-class');
  });

  it('allows to react on emoji select', () => {
    const selectSpy = jest.fn();

    render(<EmojiPicker title={TITLE} data={DATA} onSelect={selectSpy} />);

    fireEvent.click(screen.getByText(DATA[0].emoji));

    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy).toHaveBeenCalledWith(DATA[0].emoji);
  });
});

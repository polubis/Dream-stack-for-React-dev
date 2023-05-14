import type { EmojiPickerProps } from './defs';

import { render, fireEvent, screen } from '@testing-library/react';

import { EmojiPicker } from './emoji-picker';
import { EmojiPickerData } from './defs';
import { EMOJI_DATA } from './consts';

describe('Emoji picker can be used when', () => {
  const TITLE: EmojiPickerProps['title'] = 'Pick your emoji';
  const DATA: EmojiPickerData = [{ emoji: '💀', name: 'skull' }];

  // It's added to reduce duplication of code in each test.
  const emojiPickerFixture = (props: Partial<EmojiPickerProps> = {}) => {
    const result = render(
      <EmojiPicker title={TITLE} onSelect={jest.fn()} {...props} />
    );

    return result;
  };

  it('renders default emojis', () => {
    emojiPickerFixture();

    screen.getByText(TITLE);
    screen.getByText(EMOJI_DATA[0].emoji);
  });

  it('allows to use own emoji data', () => {
    emojiPickerFixture({ data: DATA });

    screen.getByText(DATA[0].emoji);
  });

  it('renders emoji list items with data attribute', () => {
    emojiPickerFixture({ data: DATA });

    const element = screen.getByText(DATA[0].emoji);

    expect(element.dataset.emoji).toBe(DATA[0].emoji);
  });

  it('classes are created', () => {
    emojiPickerFixture({ className: 'my-class' });

    const element = screen.getByText(TITLE);

    expect(element.parentElement?.className).toBe('emoji-picker my-class');
  });

  it('allows to react on emoji select', () => {
    const selectSpy = jest.fn();

    emojiPickerFixture({ data: DATA, onSelect: selectSpy });

    fireEvent.click(screen.getByText(DATA[0].emoji));

    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy).toHaveBeenCalledWith(DATA[0].emoji);
  });
});

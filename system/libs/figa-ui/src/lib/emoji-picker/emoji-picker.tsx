import type { MouseEventHandler } from 'react';
import type { EmojiPickerProps } from './defs';

import { Modal } from '../modal';
import { Font } from '../font';
import { EMOJI_DATA } from './consts';
import { Button } from '../button';

const EmojiPicker = ({
  className,
  title,
  data = EMOJI_DATA,
  onSelect,
}: EmojiPickerProps) => {
  const handleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    onSelect(e.currentTarget.getAttribute('data-emoji')!);
  };

  const formattedClassName = className ? ` ${className}` : '';

  return (
    <Modal>
      <div className={`emoji-picker${formattedClassName}`}>
        <Font className="emoji-picker-header" variant="h6">
          {title}
        </Font>
        <div className="emoji-picker-list">
          {data.map((item) => (
            <Button
              variant="outlined"
              key={item.emoji}
              data-emoji={item.emoji}
              onClick={handleSelect}
            >
              {item.emoji}
            </Button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export { EmojiPicker };
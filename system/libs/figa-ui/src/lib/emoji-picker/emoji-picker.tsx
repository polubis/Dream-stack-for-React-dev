import type { MouseEventHandler } from 'react';
import type { EmojiPickerProps } from './defs';

import { Modal } from '../modal';
import { Font } from '../font';
import { EMOJI_DATA } from './consts';
import { Button } from '../button';
import c from 'classnames';

const EmojiPicker = ({
  className,
  title,
  data = EMOJI_DATA,
  onSelect,
}: EmojiPickerProps) => {
  const handleSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onSelect(e.currentTarget.getAttribute('data-emoji')!);
  };

  return (
    <Modal>
      <div className={c('emoji-picker', className)}>
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

type Emoji = string;

type EmojiPickerDataItem = {
  emoji: Emoji;
  name: string;
}

type EmojiPickerData = EmojiPickerDataItem[];

type EmojiPickerProps = {
  className?: string;
  data?: EmojiPickerData;
  title: string;
  onSelect: (emoji: Emoji) => void;
}

export type { EmojiPickerProps, EmojiPickerDataItem, EmojiPickerData, Emoji };

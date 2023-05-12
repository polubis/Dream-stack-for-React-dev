type Emoji = string;

interface EmojiPickerDataItem {
  emoji: Emoji;
  name: string;
}

type EmojiPickerData = EmojiPickerDataItem[];

interface EmojiPickerProps {
  className?: string;
  data?: EmojiPickerData;
  title: string;
  onSelect: (emoji: Emoji) => void;
}

export type { EmojiPickerProps, EmojiPickerDataItem, EmojiPickerData, Emoji };

interface CodeProps {
  className?: string;
  children: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

interface SetupConfig
  extends Pick<CodeProps, 'children' | 'readonly' | 'onChange'> {
  parent: Element;
}

export type { CodeProps, SetupConfig };

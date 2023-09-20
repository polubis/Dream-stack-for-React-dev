type CodeProps = {
  className?: string;
  children: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

type SetupConfig
= Pick<CodeProps, 'children' | 'readonly' | 'onChange'> & {
  parent: Element;
}

export type { CodeProps, SetupConfig };

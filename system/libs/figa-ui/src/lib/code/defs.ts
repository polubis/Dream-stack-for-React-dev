interface CodeProps {
  className?: string;
  children: string;
  readonly?: boolean;
}

interface SetupConfig extends Pick<CodeProps, 'children' | 'readonly'> {
  parent: Element;
}

export type { CodeProps, SetupConfig };

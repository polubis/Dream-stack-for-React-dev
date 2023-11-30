type CodeLang = 'js' | 'html' | 'md' | 'css';

interface CodeProps {
  className?: string;
  children: string;
  readonly?: boolean;
  lang?: CodeLang;
  wrapLines?: boolean;
  onChange?: (value: string) => void;
}

interface SetupConfig {
  children: CodeProps['children'];
  readonly: CodeProps['readonly'];
  lang: CodeLang;
  wrapLines: CodeProps['wrapLines'];
  parent: Element;
  onChange?: CodeProps['onChange'];
}

export type { CodeProps, SetupConfig, CodeLang };

import type { Theme } from '../theme-provider';

type CodeLang = 'js' | 'md';

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
  theme: Theme['code'];
  onChange?: CodeProps['onChange'];
}

export type { CodeProps, SetupConfig, CodeLang };

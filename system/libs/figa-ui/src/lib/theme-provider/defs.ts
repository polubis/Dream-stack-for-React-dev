import type { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

interface Tokens {
  backdrop: {
    50: string;
  };
  radius: {
    50: string;
  };
  z: {
    50: string;
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
    500: string;
  };
  common: {
    black: string;
    white: string;
  };
  dark: {
    50: string;
  };
  padding: {
    50: string;
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
    500: string;
  };
}

interface Theme {
  font: {
    color: string;
  };
  background: {
    body: string;
  };
  modal: {
    border: string;
    background: string;
    backdrop: string;
  };
}

type ThemeKey = 'dark' | 'light';
type Themes = Record<ThemeKey, Theme>;
type ThemesList = [ThemeKey, Theme][];

interface ThemeProviderValue {
  key: ThemeKey;
  theme: Theme;
  themes: Themes;
  themesList: ThemesList;
  setTheme: (key: ThemeKey) => void;
}

type UnsafeThemeProviderValue = ThemeProviderValue | null;

type GetDefaultValue = (
  value?: Partial<Pick<ThemeProviderValue, 'key' | 'setTheme'>>
) => ThemeProviderValue;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export type {
  ThemeProviderProps,
  Theme,
  ThemeProviderValue,
  UnsafeThemeProviderValue,
  ThemeKey,
  Tokens,
  Themes,
  ThemesList,
  GetDefaultValue,
};

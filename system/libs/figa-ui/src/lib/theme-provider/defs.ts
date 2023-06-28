import type { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

type ViewportValue = number;

interface Viewport {
  smallMobile: ViewportValue;
  mobile: ViewportValue;
  tablet: ViewportValue;
  laptop: ViewportValue;
  desktop: ViewportValue;
}

type Spacing = {
  0: string;
  25: string;
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
  550: string;
  600: string;
  650: string;
  700: string;
  750: string;
  800: string;
  850: string;
  900: string;
  950: string;
  1000: string;
  1500: string;
  2000: string;
};

type SpacingKey = keyof Spacing;

interface Palette {
  50: string;
  100: string;
  150: string;
  200: string;
  250: string;
}

interface ButtonSetup {
  color: string;
  bg: string;
  borderColor?: string;
  outlineColor: string;
}

interface Tokens {
  shadow: {
    50: string;
  };
  width: {
    50: string;
  };
  backdrop: {
    50: string;
  };
  radius: {
    50: string;
    1000: string;
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
    100: string;
    150: string;
  };
  light: {
    50: string;
    100: string;
    150: string;
  };
  red: {
    50: string;
    100: string;
    150: string;
  };
  blue: {
    200: string;
    600: string;
    650: string;
  };
  green: {
    50: string;
    100: string;
    150: string;
    200: string;
  };
  gray: {
    0: string;
    50: string;
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
  };
  yellow: {
    50: string;
    100: string;
  };
  purple: {
    50: string;
    100: string;
  };
  spacing: Spacing;
  primary: Palette;
  secondary: Palette;
}

interface Theme {
  font: {
    default: {
      color: string;
    };
    primary: {
      color: string;
    };
  };
  body: {
    bg: string;
  };
  alert: {
    outlined: {
      info: {
        color: string;
      };
      ok: {
        color: string;
      };
      error: {
        color: string;
      };
      warn: {
        color: string;
      };
    };
    filled: {
      info: {
        bg: string;
        color: string;
      };
      ok: {
        bg: string;
        color: string;
      };
      error: {
        bg: string;
        color: string;
      };
      warn: {
        bg: string;
        color: string;
      };
    };
  };
  modal: {
    border: string;
    bg: string;
    backdrop: string;
  };
  button: {
    outlined: {
      primary: ButtonSetup;
    };
    filled: {
      primary: ButtonSetup;
    };
  };
  select: {
    bg: string;
    color: string;
    placeholderColor: string;
    hoverBg: string;
    optionSeparator: string;
    optionActiveColor: string;
  };
  navigation: {
    bg: string;
    borderColor: string;
  };
  logo: {
    text: {
      first: string;
      second: string;
      last: string;
    };
    bg: {
      first: {
        from: string;
        to: string;
      };
      second: {
        from: string;
        to: string;
      };
      last: {
        from: string;
        to: string;
      };
    };
  };
  progressCircle: {
    bg: string;
  };
  input: {
    bg: string;
    color: string;
    placeholderColor: string;
  };
  box: {
    bg: string;
    borderColor: string;
  };
  footer: {
    bg: string;
    borderColor: string;
  };
  codeBlock: {
    header: {
      bg: string;
      dots: {
        first: {
          bg: string;
        };
        second: {
          bg: string;
        };
        third: {
          bg: string;
        };
      };
    };
    content: {
      bg: string;
    };
  };
  list: {
    marker: {
      bg: string;
    };
  };
  blockquote: {
    bg: string;
    borderColor: string;
  };
  loader: {
    primary: string;
    secondary: string;
  };
  avatars: {
    restCounter: {
      bg: string;
      color: string;
    };
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
  Spacing,
  Palette,
  SpacingKey,
  Viewport,
  ViewportValue,
};

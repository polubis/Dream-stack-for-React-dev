import type { ReactNode } from 'react';

type ThemeProviderProps  ={
  children: ReactNode;
}

type ViewportValue = number;

type Viewport  ={
  smallMobile: ViewportValue;
  mobile: ViewportValue;
  tablet: ViewportValue;
  laptop: ViewportValue;
  desktop: ViewportValue;
}

type Spacing = Readonly<{
  0: string;
  25: string;
  50: string;
  75: string;
  100: string;
  125: string;
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
  1750: string;
  2000: string;
  4000: string;
}>;

type SpacingKey = keyof Spacing;

type Palette  ={
  50: string;
  100: string;
  150: string;
  200: string;
  250: string;
}

type ButtonSetup  ={
  color: string;
  bg: string;
  borderColor?: string;
  outlineColor: string;
}

type Tokens = {
  shadow: {
    50: string;
  };
  width: {
    50: string;
  };
  backdrop: {
    50: string;
    100: string;
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
    250: string;
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
    500: string;
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

type Theme  ={
  outline: {
    color: string;
  };
  switch: {
    bg: string;
    color: string;
    active: {
      bg: string;
    };
  };
  radio: {
    borderColor: string;
    active: {
      bg: string;
      borderColor: string;
    };
  };
  checkbox: {
    borderColor: string;
    checked: {
      borderColor: string;
      color: string;
      bg: string;
    };
  };
  tabs: {
    filled: {
      bg: string;
      active: {
        borderColor: string;
      };
    };
  };
  chips: {
    borderColor: string;
    color: string;
    active: {
      borderColor: string;
      color: string;
    };
  };
  font: {
    default: {
      color: string;
    };
    primary: {
      color: string;
    };
  };
  badge: {
    outlined: {
      primary: {
        borderColor: string;
        color: string;
      };
      secondary: {
        borderColor: string;
        color: string;
      };
      ok: {
        borderColor: string;
        color: string;
      };
      casual: {
        borderColor: string;
        color: string;
      };
    };
    filled: {
      primary: {
        bg: string;
        color: string;
      };
      secondary: {
        bg: string;
        color: string;
      };
      ok: {
        bg: string;
        color: string;
      };
      casual: {
        bg: string;
        color: string;
      };
    };
  };
  thumbnail: {
    bg: string;
    color: string;
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
      secondary: ButtonSetup;
    };
    filled: {
      primary: ButtonSetup;
      secondary: ButtonSetup;
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
    filled: {
      bg: string;
      color: string;
      placeholderColor: string;
    };
    outlined: {
      borderColor: string;
      color: string;
      placeholderColor: string;
    };
    empty: {
      color: string;
      placeholderColor: string;
    };
    invalid: string;
  };
  box: {
    filled: {
      bg: string;
    };
    outlined: {
      borderColor: string;
      bg: string;
    };
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
  creatorLayout: {
    bg: string;
    borderColor: string;
  };
  field: {
    invalid: {
      color: string;
    };
    hint: {
      color: string;
    };
  };
  filePicker: {
    outline: {
      color: string;
    };
    invalid: {
      color: string;
      outline: string;
    };
  };
}

type ThemeKey = 'dark' | 'light';
type Themes = Record<ThemeKey, Theme>;
type ThemesList = [ThemeKey, Theme][];

type ThemeProviderValue  ={
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
  // eslint-disable-next-line @typescript-eslint/no-empty-type
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

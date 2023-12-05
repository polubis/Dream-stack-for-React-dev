import type {
  ThemeKey,
  ThemeProviderProps,
  ThemeProviderValue,
  ThemesList,
  UnsafeThemeProviderValue,
  GetDefaultValue,
} from './defs';

import { useState, createContext, useMemo, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from './setup';
import { GlobalStyle } from './global-style';

const Ctx = createContext<UnsafeThemeProviderValue>(null);

const defaultKey = 'dark' as ThemeKey;

const getDefaultValue: GetDefaultValue = ({
  key = defaultKey,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme = () => {},
} = {}) => ({
  key,
  setTheme,
  themes,
  theme: themes[key],
  themesList: Object.entries(themes) as ThemesList,
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [key, setKey] = useState(defaultKey);

  const value: ThemeProviderValue = useMemo(
    () =>
      getDefaultValue({
        key,
        setTheme: setKey,
      }),
    [key]
  );

  return (
    <Ctx.Provider value={value}>
      <StyledThemeProvider theme={value.theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </Ctx.Provider>
  );
};

const useThemeProvider = (): ThemeProviderValue => {
  const ctx = useContext(Ctx);

  return ctx ? ctx : getDefaultValue();
};

export { ThemeProvider, useThemeProvider };

import styled from 'styled-components';
import { tokens, useThemeProvider } from '../theme-provider';
import type { ThemeKey } from '../theme-provider';
import type { SandboxProps } from './defs';
import { column, row } from '../shared';

const Container = styled.div`
  ${column()}
`;

const Header = styled.header`
  ${row()}
  margin-bottom: ${tokens.spacing[150]};
`;

const Sandbox = ({ children }: SandboxProps) => {
  const ctx = useThemeProvider();

  return (
    <Container>
      <Header>
        <select
          value={ctx.key}
          placeholder="Pick theme..."
          onChange={(e) => ctx.setTheme(e.target.value as ThemeKey)}
        >
          {ctx.themesList.map(([themeKey]) => (
            <option key={themeKey} value={themeKey}>
              {themeKey}
            </option>
          ))}
        </select>
      </Header>

      {children}
    </Container>
  );
};

export { Sandbox };

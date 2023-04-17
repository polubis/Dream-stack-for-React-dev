import styled from 'styled-components';
import { useThemeProvider } from '../theme-provider';
import type { ThemeKey } from '../theme-provider';
import type { SandboxProps } from './defs';

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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
          {ctx.themesList.map(([themeKey], idx) => (
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

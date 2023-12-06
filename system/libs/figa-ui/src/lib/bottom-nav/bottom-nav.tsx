import styled from 'styled-components';
import type { BottomNavItemProps, BottomNavProps } from './defs';
import { tokens } from '../theme-provider';
import { center, size, streched } from '../shared';
import { Font } from '../font';
import c from 'classnames';
import { Button } from '../button';

const Container = styled.nav`
  ${streched('fixed')}
  top: unset;
  display: flex;
  background: ${(props) => props.theme.nav.bg};
  border-top: ${tokens.spacing[25]} solid
    ${(props) => props.theme.nav.borderColor};

  ul {
    display: flex;
    margin: 0 auto;
    padding: ${tokens.spacing[150]} ${tokens.spacing[250]};
    overflow-x: auto;

    & > * {
      border-radius: ${tokens.radius[50]};
      flex-shrink: 0;

      .button {
        ${center('column')}

        .font {
          margin-top: ${tokens.spacing[50]};
        }
      }
    }
  }
`;

const BottomNav = ({ className, children }: BottomNavProps) => {
  return (
    <Container className={c('bottom-nav', className)}>
      <ul>{children}</ul>
    </Container>
  );
};

BottomNav.Item = ({ className, icon, text }: BottomNavItemProps) => {
  return (
    <li className={c('bottom-nav-item', className)}>
      <Button variant="ghost" motive="tertiary">
        {icon}
        <Font variant="b3">{text}</Font>
      </Button>
    </li>
  );
};

export { BottomNav };

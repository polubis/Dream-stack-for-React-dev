import styled from 'styled-components';
import type { NavProps } from './defs';
import c from 'classnames';
import { M_DOWN, T_DOWN, tokens } from '../theme-provider';
import { row } from '../shared';

const Container = styled.nav`
  display: grid;
  width: 100%;
  align-items: center;
  gap: ${tokens.spacing[500]};
  grid-template-columns: 1fr 3fr 1fr;
  height: ${tokens.spacing[1000]};

  .nav-links-wrapper {
    ${row()}
    width: 100%;
    overflow-x: auto;

    .nav-links {
      ${row()}
      padding: ${tokens.spacing[250]} ${tokens.spacing[200]};
      margin: 0 auto;

      & > *:not(:first-child) {
        margin: 0 0 0 ${tokens.spacing[150]};
      }

      .divider {
        margin: ${0} ${tokens.spacing[150]} 0 ${tokens.spacing[450]};
      }
    }
  }

  .nav-actions {
    ${row()}
    justify-self: end;

    & > *:not(:first-child) {
      margin: 0 0 0 ${tokens.spacing[150]};
    }
  }

  @media ${T_DOWN} {
    grid-template-columns: 1fr auto auto;
    gap: ${tokens.spacing[150]};

    .nav-links-wrapper {
      display: none;
    }

    .nav-actions {
      justify-self: center;
    }
  }

  @media ${M_DOWN} {
    grid-template-columns: 1fr auto;

    .nav-links-wrapper {
      display: none;
    }
  }
`;

const Nav = ({ className, children, actions, logo }: NavProps) => {
  return (
    <Container className={c('nav', className)}>
      <div className="nav-logo">{logo}</div>
      <div className="nav-links-wrapper">
        <div className="nav-links">{children}</div>
      </div>
      <div className="nav-actions">{actions}</div>
    </Container>
  );
};

export { Nav };

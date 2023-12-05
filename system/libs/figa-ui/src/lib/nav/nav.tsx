import styled from 'styled-components';
import type { NavProps } from './defs';
import c from 'classnames';
import { M_DOWN, T_DOWN, tokens } from '../theme-provider';
import { row } from '../shared';
import { Button } from '../button';
import { HamburgerIcon } from '../icon';
import { useToggle } from '@system/figa-hooks';
import { Link, type LinkProps } from '../link';
import { NavMobile } from './nav-mobile';
import { Divider } from '../divider';

const Container = styled.nav`
  display: grid;
  width: 100%;
  align-items: center;
  gap: ${tokens.spacing[500]};
  grid-template-columns: 1fr 3fr 1fr;
  height: ${tokens.spacing[1000]};

  .nav-mobile {
    display: none;
  }

  .nav-links-wrapper {
    ${row()}
    width: 100%;
    overflow-x: auto;

    .nav-links {
      ${row()}
      padding: ${tokens.spacing[250]} ${tokens.spacing[200]};
      margin: 0 auto;

      & > *:not(:first-child) {
        margin: 0 0 0 ${tokens.spacing[300]};
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

    .nav-mobile {
      display: block;
    }
  }

  @media ${M_DOWN} {
    grid-template-columns: 1fr auto auto;

    .nav-links-wrapper {
      display: none;
    }

    .nav-mobile {
      justify-self: flex-end;
    }
  }
`;

const Nav = ({ className, children, actions, logo }: NavProps) => {
  const toggler = useToggle();

  return (
    <>
      {toggler.opened && (
        <NavMobile actions={actions} onClose={toggler.close}>
          {children}
        </NavMobile>
      )}
      <Container className={c('nav', className)}>
        <div className="nav-logo">{logo}</div>
        <div className="nav-links-wrapper">
          <ul className="nav-links">{children}</ul>
        </div>
        <div className="nav-actions">{actions}</div>
        <div className="nav-mobile">
          <Button
            className="nav-mobile-trigger"
            size={2}
            title="Open"
            shape="rounded"
            onClick={toggler.open}
          >
            <HamburgerIcon />
          </Button>
        </div>
      </Container>
    </>
  );
};

Nav.Divider = () => <Divider axis="y" />;
Nav.Link = (props: LinkProps) => (
  <li>
    <Link {...props} />
  </li>
);

export { Nav };

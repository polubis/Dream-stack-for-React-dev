import styled from 'styled-components';
import type { NavMobileProps } from './defs';
import { Button } from '../button';
import { CloseIcon } from '../icon';
import { column, row, size, streched } from '../shared';
import { tokens } from '../theme-provider';
import { usePortal, useScrollHide } from '@system/figa-hooks';

const Container = styled.div`
  ${streched('fixed')}
  ${column()}
  background: ${(props) => props.theme.nav.bg};
  z-index: ${tokens.z[400]};
  height: 100vh;

  .nav-mobile-header {
    ${row()}
    flex-shrink: 0;
    height: ${tokens.spacing[1000]};
    border-bottom: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};

    .nav-mobile-close {
      margin: 0 ${tokens.spacing[250]} 0 auto;
    }
  }

  .nav-mobile-actions {
    ${row()}
    justify-content: flex-end;
    flex-shrink: 0;
    border-top: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};
    height: ${tokens.spacing[1000]};
    padding: 0 ${tokens.spacing[250]};

    & > *:not(:last-child) {
      margin-right: ${tokens.spacing[200]};
    }
  }

  .nav-mobile-links-wrapper {
    display: flex;
    height: 100%;
    overflow-y: auto;
  }

  .nav-mobile-links {
    ${column()}
    padding: ${tokens.spacing[250]};
    margin: auto;

    & > *:not(:first-child) {
      margin: ${tokens.spacing[300]} 0 0 0;
      text-align: center;
    }

    .divider {
      margin: ${tokens.spacing[450]} auto ${tokens.spacing[150]} auto;

      & > * {
        ${size(tokens.spacing[25], tokens.spacing[250])}
      }
    }
  }
`;

const NavMobile = ({ actions, children, onClose }: NavMobileProps) => {
  useScrollHide();
  const { render } = usePortal();

  return render(
    <Container className="nav-mobile">
      <header className="nav-mobile-header">
        <Button
          className="nav-mobile-close"
          size={2}
          title="Close"
          shape="rounded"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </header>
      <div className="nav-mobile-links-wrapper">
        <ul className="nav-mobile-links">{children}</ul>
      </div>
      <footer className="nav-mobile-actions">{actions}</footer>
    </Container>
  );
};

export { NavMobile };

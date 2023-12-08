import { useScroll, useToggle } from '@system/figa-hooks';
import type { LayoutProps } from './defs';

import c from 'classnames';
import styled from 'styled-components';
import { column, row, streched } from '../shared';
import { T_UP, tokens } from '../theme-provider';

const Container = styled.div`
  ${column()}
  padding-top: ${tokens.spacing[1000]};

  &.asided {
    .layout-content {
      padding: 0;
      display: flex;
      min-height: calc(100vh - ${tokens.spacing[1000]});
      max-width: 100vw;

      & > * {
        width: 100%;
      }

      & > *:first-child {
        border-right: ${tokens.spacing[25]} solid
          ${(props) => props.theme.nav.borderColor};
        background: ${(props) => props.theme.nav.bg};
        width: ${tokens.spacing[1000]};
        padding: ${tokens.spacing[350]} 0;
      }

      & > *:last-child {
        padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
      }
    }

    &.opened {
      .layout-content {
        & > *:first-child {
          width: 300px;
          padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
        }

        & > *:last-child {
          padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
        }
      }
    }
  }

  .layout-content {
    padding: ${tokens.spacing[350]} ${tokens.spacing[250]};
    display: flex;
    min-height: calc(100vh - 100px);
    max-width: 100vw;

    & > * {
      width: 100%;
    }
  }

  &.off-padding {
    .layout-content {
      padding: 0;
    }

    &.asided {
      .layout-content {
        & > *:last-child {
          padding: 0;
        }
      }
    }
  }

  .layout-top-nav {
    ${row()}
    ${streched('fixed')}
        bottom: unset;
    border-bottom: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};
    background: ${(props) => props.theme.nav.bg};
    padding: 0 ${tokens.spacing[250]};
    z-index: ${tokens.z[200]};
    height: ${tokens.spacing[1000]};
    transform: translateY(0px);
    transition: 0.93s transform cubic-bezier(0.19, 1, 0.22, 1);

    &.out {
      transform: translateY(-${tokens.spacing[1000]});
    }
  }

  .layout-bottom-nav {
    ${streched('fixed')}
    top: unset;
    display: flex;
    z-index: ${tokens.z[200]};
    background: ${(props) => props.theme.nav.bg};
    border-top: ${tokens.spacing[25]} solid
      ${(props) => props.theme.nav.borderColor};
    transform: translateY(0px);
    transition: 0.93s transform cubic-bezier(0.19, 1, 0.22, 1);

    @media ${T_UP} {
      display: none;
    }

    &.out {
      transform: translateY(${tokens.spacing[1000]});
    }

    & > div {
      display: flex;
      margin: 0 auto;
      padding: ${tokens.spacing[150]} ${tokens.spacing[100]};
      overflow-x: auto;

      & > * {
        border-radius: ${tokens.radius[50]};
        flex-shrink: 0;

        &:not(:last-child) {
          margin-right: ${tokens.spacing[200]};
        }
      }
    }
  }
`;

const Layout = ({
  className,
  children,
  topNav,
  bottomNav,
  footer,
  offPadding,
  sidebar,
}: LayoutProps) => {
  const toggler = useToggle({ opened: !!sidebar });
  const [scroll] = useScroll({ delay: 50 });
  const out = scroll.is === 'progress';

  return (
    <Container
      className={c(
        'layout',
        className,
        { asided: !!sidebar },
        { opened: toggler.opened },
        { 'off-padding': offPadding }
      )}
    >
      <header
        className={c('layout-top-nav', {
          out,
        })}
      >
        {topNav}
      </header>
      <main className="layout-content">
        {sidebar && (
          <aside className="layout-content-sidebar">{sidebar(toggler)}</aside>
        )}
        {children}
      </main>
      <footer className="layout-footer">{footer}</footer>
      <nav className={c('layout-bottom-nav', { out })}>
        <div>{bottomNav}</div>
      </nav>
    </Container>
  );
};

export { Layout };

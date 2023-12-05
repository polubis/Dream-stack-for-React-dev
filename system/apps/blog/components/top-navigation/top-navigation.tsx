import styled from 'styled-components';
import {
  Logo,
  Link as FigaUILink,
  Divider,
  tokens,
  row,
  T_DOWN,
  Button,
  L_DOWN,
} from '@system/figa-ui';
import { Link } from '../link';
import { useLang } from '../../dk';
import { useAuthStore } from '../../store/auth';
import { UserPopover } from '../main-layout/user-popover';
import { useSignInStore } from '../../store/sign-in';

const Container = styled.nav`
  display: grid;
  align-items: center;
  width: 100%;
  gap: ${tokens.spacing[500]};
  grid-template-columns: 1fr 3fr 1fr;

  ul {
    ${row()}
    justify-content: center;

    & > *:not(:first-child) {
      margin: 0 0 0 ${tokens.spacing[300]};
    }

    .divider {
      margin: ${0} ${tokens.spacing[150]} 0 ${tokens.spacing[450]};
    }
  }

  .top-navigation-signed-in-user-section,
  .top-navigation-not-signed-in-user-section {
    ${row()}
    justify-self: end;

    & > * {
      &:not(:first-child) {
        margin-left: ${tokens.spacing[150]};
      }
    }
  }

  @media ${L_DOWN} {
    .top-navigation-not-signed-in-user-section {
      display: none;
    }
  }

  @media ${T_DOWN} {
    grid-template-columns: 1fr 1fr;
    gap: ${tokens.spacing[250]};

    ul {
      display: none;
    }
  }
`;

const TopNavigation = () => {
  const lang = useLang();
  const authStore = useAuthStore();
  const signInStore = useSignInStore();

  return (
    <Container>
      <Logo />
      <ul>
        <li>
          <FigaUILink variant="h6">
            <Link title="Articles" href={`/${lang}/articles/`}>
              Articles
            </Link>
          </FigaUILink>
        </li>
        <Divider axis="y" />
        <li>
          <FigaUILink variant="h6">
            <Link title="Creator" href={`/${lang}/articles-creator/`}>
              Creator
            </Link>
          </FigaUILink>
        </li>
      </ul>
      {authStore.is === 'authorized' && (
        <div className="top-navigation-signed-in-user-section">
          <UserPopover />
        </div>
      )}
      {authStore.is !== 'authorized' && (
        <div className="top-navigation-not-signed-in-user-section">
          {authStore.is === 'idle' && (
            <>
              <Button size={2} disabled>
                Register
              </Button>
              <Button size={2} disabled>
                Sign In
              </Button>
            </>
          )}
          {authStore.is === 'unauthorized' && (
            <>
              <Link title="Register" href={`/${lang}/register/`}>
                <Button size={2}>Register</Button>
              </Link>
              {signInStore.is === 'busy' ? (
                <Button size={2} loading>
                  Sign In
                </Button>
              ) : (
                <Link title="Sign In" href={`/${lang}/sign-in/`}>
                  <Button size={2}>Sign In</Button>
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export { TopNavigation };

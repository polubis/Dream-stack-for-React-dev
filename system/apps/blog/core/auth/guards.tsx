import { auth_selectors } from '../../store/auth';
import type { GuardProps } from './models';

const AdminsOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_selectors.useState();
  const isAdmin = auth_selectors.useIsAdmin();

  if (authStore.key === 'idle') {
    return null;
  }

  return <>{isAdmin ? children : fallback}</>;
};

const SignedInOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_selectors.useState();
  const authorized = auth_selectors.useIsAuthorized();

  if (authStore.key === 'idle') {
    return null;
  }

  return <>{authorized ? children : fallback}</>;
};

const NotSignedInOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_selectors.useState();
  const authorized = auth_selectors.useIsAuthorized();

  if (authStore.key === 'idle') {
    return null;
  }

  return <>{authorized ? fallback : children}</>;
};

export { AdminsOnly, SignedInOnly, NotSignedInOnly };

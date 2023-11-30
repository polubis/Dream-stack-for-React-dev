import { auth_store_selectors } from '../../store/auth';
import type { GuardProps } from './models';

const AdminsOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_store_selectors.useState();
  const isAdmin = auth_store_selectors.useIsAdmin();

  if (authStore.is === 'idle') {
    return null;
  }

  return <>{isAdmin ? children : fallback}</>;
};

const SignedInOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_store_selectors.useState();
  const authorized = auth_store_selectors.useIsAuthorized();

  if (authStore.is === 'idle') {
    return null;
  }

  return <>{authorized ? children : fallback}</>;
};

const NotSignedInOnly = ({ children, fallback = null }: GuardProps) => {
  const authStore = auth_store_selectors.useState();
  const authorized = auth_store_selectors.useIsAuthorized();

  if (authStore.is === 'idle') {
    return null;
  }

  return <>{authorized ? fallback : children}</>;
};

export { AdminsOnly, SignedInOnly, NotSignedInOnly };

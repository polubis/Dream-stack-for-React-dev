import { auth_selectors, checkIsAdmin, useAuthStore } from '../../store/auth';
import type { GuardProps } from './models';

const AdminsOnly = ({ children, fallback }: GuardProps) => {
  const isAdmin = useAuthStore(checkIsAdmin);
  return <>{isAdmin ? children : fallback ?? null}</>;
};

const SignedInOnly = ({ children, fallback }: GuardProps) => {
  const authorized = auth_selectors.useIsAuthorized();

  return <>{authorized ? children : fallback ?? null}</>;
};

export { AdminsOnly, SignedInOnly };

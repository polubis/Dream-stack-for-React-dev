import { checkIsAdmin, useAuthStore } from '../../store/auth';
import type { GuardProps } from './models';

const AdminsOnly = ({ children, Fallback }: GuardProps) => {
  const isAdmin = useAuthStore(checkIsAdmin);
  return <>{isAdmin ? children : Fallback ?? null}</>;
};

export { AdminsOnly };

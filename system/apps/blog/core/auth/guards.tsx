import { checkIsAdmin, useAuthStore } from '../../store/auth';
import type { GuardProps } from './models';

const AdminsOnly = ({ children, fallback }: GuardProps) => {
  const isAdmin = useAuthStore(checkIsAdmin);
  return <>{isAdmin ? children : fallback ?? null}</>;
};

export { AdminsOnly };

import { AdminsOnly } from '../../../core';
import { AdminView } from '../../../views/admin';

const AdminPage = () => {
  return (
    <AdminsOnly>
      <AdminView />
    </AdminsOnly>
  );
};

export default AdminPage;

import AdminTemplate from '../../../Templates/AdminTemplate';
import './Users.scss';
import UserList from '../../../Components/UserList/UserList';

const Users = () => {
  return (
    <AdminTemplate>

      <UserList />

    </AdminTemplate>
  );
}

export default Users;
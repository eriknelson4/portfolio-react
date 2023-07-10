import { useState, useEffect } from 'react';
import { useUI } from '../../Context/UIContext';
import { Modal } from '../Modals/Modal';
import Pagination from '../Pagination/Pagination';
import UserRow from './UserRow';
import EditUserModal from '../EditUserModal/EditUserModal';
import axios from 'axios';
import schema from '../..//Data/UserTableSchema.json';
import './UserList.scss';

const Admin = () => {
  const { handleModal } = useUI();

  const [ users, setUsers ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ usersPerPage, setUsersPerPage ] = useState(10);
  const [ filter, setFilter ] = useState('');
  const [ editID, setEditID ] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('/userData.json');
      setUsers(res.data);
    }

    fetchUsers();
  }, []);

  let filteredUsers = users.filter((item) => {
    for (const key in item) {
      if (item[key].toString().toLowerCase().includes(filter)) { return item; }
    }
  });

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const editUserData = (id) => {
    setEditID(id);
    handleModal('edit-user-modal', true);
  }

  console.log('current page: ' + currentPage);

  return (
    <>
      <div className="user-list">

        <h2>Users</h2>

        <input
          className="filter"
          onChange={ (e) => { setFilter(e.target.value.toLowerCase()) } }
          value={ filter }
          type="text">
        </input>

        <Pagination
          usersPerPage={ usersPerPage }
          setUsersPerPage={ setUsersPerPage }
          currentPage={ currentPage }
          totalUsers={ filteredUsers.length }
          paginate={ paginate }
        />

        <table>
          <thead>
            <tr>
              {
                schema.map((heading) => (
                  <th key={ `heading-${heading.field}` }>{ heading.label }</th>
                ))
              }
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              currentUsers.map((user, i) => (
                <UserRow
                  user={ user }
                  key={ i }
                  index={ i }
                  editUserData={ editUserData }
                  schema={ schema }
                />
              ))
            }
          </tbody>
        </table>

      </div>

      <Modal id="edit-user-modal">
        <EditUserModal userID={ editID } />
      </Modal>
    </>
  );
}

export default Admin;
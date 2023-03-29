import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import { useUI } from '../../Context/UIContext';
import { Modal } from '../Modals/Modal';
import EditUserModal from '../EditUserModal/EditUserModal';
import axios from 'axios';
import { MdOutlineEdit } from 'react-icons/md';
import './Admin.scss';

const Admin = () => {
  const { handleModal } = useUI();

  const [ users, setUsers ] = useState([]);
  // const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ usersPerPage, setUsersPerPage ] = useState(10);
  const [ filter, setFilter ] = useState('');
  const [ editID, setEditID ] = useState(0);

  const schema = [
    { field:'id', label:'ID' },
    { field:'user_role', label:'User Role' },
    { field:'first_name', label:'First Name' },
    { field:'last_name', label:'Last Name' },
    { field:'email', label:'E-Mail' },
    { field:'ip_address', label:'IP Address' },
    { field:'date_created', label:'Created' },
    { field:'last_logged_in', label:'Last Log-in' },
  ]

  useEffect(() => {
    const fetchUsers = async () => {
      // setLoading(true);
      const res = await axios.get('/userData.json');
      setUsers(res.data);
      // setLoading(false);
    }

    fetchUsers();
  }, [currentPage, usersPerPage, filter]);

  let filteredUsers = users.filter((item) => {
    for (const key in item) {
      if (item[key].toString().includes(filter)) { return item; }
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

  return (
    <>
      <div className="user-list">

        <input className="filter" onChange={ (e) => { setFilter(e.currentTarget.value) } } value={ filter } type="text" />

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
                schema.map((heading) => {
                  return (
                    <th key={ `heading-${heading.field}` }>{ heading.label }</th>
                  )
                })
              }
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {
              currentUsers.map((user, i) => {
                return (
                  <tr key={ `row-${user.id}` }>
                    {
                      schema.map((field) => {
                        return (
                          <td key={ `cell-${field.field}` }>{ user[field.field] }</td>
                        )
                      })
                    }
                    <td>
                      <button onClick={ () => { editUserData(user.id) } }><MdOutlineEdit /></button>
                    </td>
                  </tr>
                )
              })
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
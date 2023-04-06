import { useUI } from '../../Context/UIContext';

export const EditUserModal = ({ userID }) => {
  const { handleModal, setUserRole, updateUser, deleteUser } = useUI();

  return (
    <>
      <h3>Edit User Data: { userID }</h3>

      <p>Coming soon.</p>

      {/* <div className="button-collection">
        <button onClick={ () => { updateUser('update') } } className="block solid">Update</button>
        <button onClick={ () => { deleteUser('delete'); handleModal('user-modal') } } className="block solid">Delete</button>
      </div> */}
    </>
  )
}

export default EditUserModal;
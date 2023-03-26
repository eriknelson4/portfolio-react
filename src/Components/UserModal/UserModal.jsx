import { useUI } from '../../Context/UIContext';

export const UserModal = () => {
  const { handleModal, setUserRole } = useUI();

  return (
    <>
      <h3>Switch User Role</h3>
      <button onClick={ () => { setUserRole('guest'); handleModal('user-modal') } } className="block solid">Guest</button>
      <button onClick={ () => { setUserRole('user'); handleModal('user-modal') } } className="block solid">User</button>
      <button onClick={ () => { setUserRole('admin'); handleModal('user-modal') } } className="block solid">Admin</button>
    </>
  )
}
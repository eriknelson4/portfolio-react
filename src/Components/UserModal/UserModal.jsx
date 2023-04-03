import { useUI } from '../../Context/UIContext';

export const UserModal = () => {
  const { handleModal, setUserRole } = useUI();

  const passRole = (role) => {
    console.log('UserModal: ', role);
    setUserRole(role);
  }

  return (
    <>
      <h3>Switch User Role</h3>

      <p>This website simulates multiple user roles and API calls. There no actual backend service. This website is a demonstration of what I am able to do with React.</p>

      <p>The code for this site is availble in a public GitHub respository here.</p>

      <div className="button-collection">
        <button onClick={ () => { passRole('guest'); handleModal('user-modal') } } className="block solid">Guest</button>
        <button onClick={ () => { passRole('user'); handleModal('user-modal') } } className="block solid">User</button>
        <button onClick={ () => { passRole('admin'); handleModal('user-modal') } } className="block solid">Admin</button>
      </div>
    </>
  )
}
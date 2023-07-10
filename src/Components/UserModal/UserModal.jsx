import { useUI } from '../../Context/UIContext';

export const UserModal = () => {
  const { setUserRole } = useUI();

  return (
    <>
      <h3>Switch User Role</h3>

      <p>This website simulates multiple user roles. There is no actual backend service. The part of the website is a demonstration of some standard working components in React.</p>

      <p>The code for this site is availble in a <a rel="nofollow noopener" href="https://github.com/eriknelson4/portfolio-react" target="_blank">public GitHub respository</a>.</p>

      <div className="button-collection">
        <button onClick={ () => { setUserRole('guest'); } } className="block solid">Guest</button>
        <button onClick={ () => { setUserRole('user'); } } className="block solid">User</button>
        <button onClick={ () => { setUserRole('admin'); } } className="block solid">Admin</button>
      </div>
    </>
  )
}
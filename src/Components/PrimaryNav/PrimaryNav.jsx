import { useUI } from '../../Context/UIContext';
import UserGlyph from '../../Components/UserGlyph/UserGlyph';
import { NavLink } from 'react-router-dom';
import './PrimaryNav.scss';
import { Modal } from '../Modals/Modal';
import { UserModal } from '../UserModal/UserModal';

const PrimaryNav = () => {
  const { userRole, primaryNavOptions, handleModal } = useUI();

  return (
    <>
      <nav className="primary-nav">
        <ul>
          {
            primaryNavOptions.map((item, i) => {
              if (item.roles.includes(userRole)) {
                return (
                  <li key={ i }>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={ item.url }>{item.title}</NavLink>
                  </li>
                )
              }
            })
          }
          <UserGlyph handleModal={ handleModal }/>
        </ul>
      </nav>
      <Modal id="user-modal">
        <UserModal />
      </Modal>
    </>
  )
}

export default PrimaryNav;
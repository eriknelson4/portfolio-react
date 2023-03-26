import { useUI } from '../../Context/UIContext';
import UserGlyph from '../../Components/UserGlyph/UserGlyph';
import { Link } from 'react-router-dom';
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
                    <Link to={ item.url }>{item.title}</Link>
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
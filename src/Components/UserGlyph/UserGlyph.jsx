import { useState } from 'react';
import { useUI } from '../../Context/UIContext';
import Modal from '../Modals/Modal';
import { UserModal } from '../UserModal/UserModal';
import './UserGlyph.scss';

const UserGlyph = () => {
  const { userRole } = useUI();
  const [ modalState, setModalState ] = useState(false);

  return (
    <>
      <li>
        <button onClick={() => { setModalState(true) }} className={ userRole + " pill" }>{ userRole }</button>
      </li>

      <Modal modalState={ modalState } setModalState={ setModalState } id="user-modal">
        <UserModal setModalState={ setModalState } />
      </Modal>
    </>
  );
}

export default UserGlyph;
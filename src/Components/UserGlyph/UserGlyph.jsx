import { useUI } from '../../Context/UIContext';
import './UserGlyph.scss';

const UserGlyph = ({ handleModal }) => {
  const { userRole } = useUI();

  return (
    <li>
      <button onClick={() => { handleModal('user-modal', true) }} className={ userRole + " pill" }>{ userRole }</button>
    </li>
  );
}

export default UserGlyph;
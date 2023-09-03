import { useUI } from '../../Context/UIContext';
import './UserGlyph.scss';

const UserGlyph = ({ setModalOpen }) => {
  const { userRole } = useUI();

  return (
    <li>
      <button onClick={() => { setModalOpen(true) }} className={ `${userRole} pill` }>{ userRole }</button>
    </li>
  );
}

export default UserGlyph;
import { useUI } from '../../Context/UIContext';
import './UserGlyph.scss';

const UserGlyph = () => {
  const { userRole } = useUI();

  return (
    <li>
      <button className={ userRole + " pill" }>{ userRole }</button>
    </li>
  );
}

export default UserGlyph;
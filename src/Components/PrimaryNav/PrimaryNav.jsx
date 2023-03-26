import { useUI } from '../../Context/UIContext';
import UserGlyph from '../../Components/UserGlyph/UserGlyph';
import { Link } from 'react-router-dom';
import './PrimaryNav.scss';

const PrimaryNav = () => {
  const { userRole, primaryNavOptions } = useUI();

  return (
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
        <UserGlyph />
      </ul>
    </nav>
  )
}

export default PrimaryNav;
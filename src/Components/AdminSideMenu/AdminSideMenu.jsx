import { NavLink } from 'react-router-dom';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { CiSettings, CiBoxList } from 'react-icons/ci';
import './AdminSideMenu.scss';

const sideNavItems = [
  {
    icon: <AiOutlineHome />,
    url: '/admin'
  },
  {
    icon: <AiOutlineUser />,
    url: '/admin/users'
  },
  {
    icon: <CiSettings />,
    url: '/admin/settings'
  },
  {
    icon: <CiBoxList />,
    url: '/admin/items'
  }
]

const AdminSideMenu = () => {
  return (
    <nav className="admin-side-menu">
      {
        sideNavItems.map((item, i) =>
          <NavLink
            key={ `admin-side-nav-${ i }` }
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            to={ item.url }
            end>
            { item.icon }
          </NavLink>
        )
      }
    </nav>
  );
}

export default AdminSideMenu;
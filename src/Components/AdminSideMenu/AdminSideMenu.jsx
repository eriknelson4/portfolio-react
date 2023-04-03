import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { CiSettings, CiBoxList } from 'react-icons/ci';
import './AdminSideMenu.scss';

const sideNavItems = [
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
          <NavLink key={ `admin-side-nav-${ i }`} className={ `side-menu-item ${({ isActive }) => (isActive ? 'active' : 'inactive')}` } to={ item.url }>{item.icon}</NavLink>
        )
      }

      {/* <div className="side-menu-item">
        <AiOutlineUser />
      </div>
      <div className="side-menu-item">
        <CiSettings />
      </div>
      <div className="side-menu-item">
        <CiBoxList />
      </div> */}
    </nav>
  );
}

export default AdminSideMenu;
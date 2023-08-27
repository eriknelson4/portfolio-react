import { useState, useEffect } from 'react';
import { useUI } from '../../Context/UIContext';
import primaryNavOptions from '../../Data/PrimaryNav.json';
import UserGlyph from '../../Components/UserGlyph/UserGlyph';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import './PrimaryNav.scss';

const PrimaryNav = () => {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const { userRole } = useUI();

  const updateAria = () => {
    let hidden = false;
    if (window.innerWidth < 768 && !menuOpen) { hidden = true; }
    document.querySelector('.primary-nav').setAttribute('aria-hidden', hidden);
  }

  useEffect(() => {
    window.addEventListener('resize', updateAria);
    updateAria();
  }, []);

  useEffect(() => {
    updateAria();
  }, [menuOpen]);

  return (
    <>
      <button onClick={ ()=> { setMenuOpen(true); } }className="mobile-menu-open">
        <GiHamburgerMenu />
      </button>
      <nav className="primary-nav">
        <button onClick={ ()=> { setMenuOpen(false); } } className="mobile-menu-close">
          <IoMdClose />
        </button>
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
          <UserGlyph/>
        </ul>
      </nav>
    </>
  )
}

export default PrimaryNav;
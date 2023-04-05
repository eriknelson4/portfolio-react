import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PrimaryNav from "../Components/PrimaryNav/PrimaryNav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/footer";
import AdminSideMenu from "../Components/AdminSideMenu/AdminSideMenu";
import './AdminTemplate.scss';

const AdminTemplate = ({ id, children }) => {

  let location = useLocation();

  useEffect(() => {

    let id;

    switch(location.pathname) {
      case '/':
        id = 0;
        break;
      case '/skills':
        id = 1;
        break;
      case '/portfolio':
        id = 2;
        break;
      case '/contact':
        id = 3;
        break;
      case '/admin':
        id = 4;
        break;
      default:
        id = 0;
        break;
    }

    document.querySelector('body').setAttribute('data-color', id);

  }, [location])

  return (
    <>
      <PrimaryNav />
      <Header />
      <main className="admin" id={ id }>
        <AdminSideMenu />
        <section className="main-content">
          { children }
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AdminTemplate;
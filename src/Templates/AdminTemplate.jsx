import PrimaryNav from "../Components/PrimaryNav/PrimaryNav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/footer";
import AdminSideMenu from "../Components/AdminSideMenu/AdminSideMenu";
import './AdminTemplate.scss';

const AdminTemplate = ({ id, children }) => {

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
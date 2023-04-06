import AdminTemplate from '../../Templates/AdminTemplate';
import './Admin.scss';

const Admin = () => {
  return (
    <AdminTemplate>

      <section className="admin-content">

        <h2>Admin</h2>

        <section className="columns">

          <h3>What is this section?</h3>

          <p>There is no back-end for this website. There are no logins or users. This area is where I experiment using React to build different components. It could easily be adapted for checking credentials against a back-end service, but for now it's just a demo, and most definitely a work-in-progress.</p>

          <p>No modifications to the data are saved (except maybe to local storage). This is just a place for testing.</p>

          <p>Everything here is built with plain React. React Router, Axios, and React Icons are the only exceptions. No big state management systems like Redux can be found here. Just context (though you might see some Zustand later).</p>

          <p>The code for this entire website is available on <a rel="noopener noreferrer" href="https://github.com/eriknelson4/portfolio-react" target="_blank">GitHub</a>. The code may not always be pretty (it is, in some sense, where I come to try things out and build things for fun), but I try to keep it as organized as possible. It is an ongoing catalog of what I've learned to do with React and front-end development in general.</p>

          <p>More random things will be added to the site as I get around to it! Welcome!</p>

        </section>

      </section>

    </AdminTemplate>
  );
}

export default Admin;
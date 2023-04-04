import AdminTemplate from '../../Templates/AdminTemplate';
import './Admin.scss';

const Admin = () => {
  return (
    <AdminTemplate>

      <section className="admin-content">

        <h2>Admin</h2>

        <section className="columns">

          <h3>What is this section?</h3>

          <p>There is no back end for this website. There is no login or users. This area is where I experiment using React to build different components.</p>

          <p>All the data is hosted locally. Nothing is saved (except maybe to local storage). This is just a place to look around,</p>

          <p>Everything here is built with React. React Router, Axios, and React Icons are the only exceptions. No big state management systems like Redux can be found here. Just context (though you might see some Zustand later).</p>

          <p>The code for this entire website is available on GitHub. The code may not always be pretty (it is, in some sense, where I come to try things out), but I try to keep it as organized as possible. It is an ongoing catalog of what I've learned to do with React and front-end development in general.</p>

          <p>More random things will be added to the site as I get around to it! Welcome!</p>

        </section>

      </section>

    </AdminTemplate>
  );
}

export default Admin;
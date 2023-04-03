import Standard from '../../Templates/Standard';
import './NotFound.scss';

const NotFound = () => {
  return (
    <Standard>
      <section className="not-found-404">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for cannot be found.</p>
        <p>Please try another page.</p>
      </section>
    </Standard>
  );
}

export default NotFound;
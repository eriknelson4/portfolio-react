import PrimaryNav from "../Components/PrimaryNav/PrimaryNav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/footer";

const Standard = ({ id, children }) => {
  return (
    <>
      <PrimaryNav />
      <Header />
      <main id={ id }>
        { children }
      </main>
      <Footer />
    </>
  );
}

export default Standard;
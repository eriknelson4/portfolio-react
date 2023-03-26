import PrimaryNav from "../Components/PrimaryNav/PrimaryNav";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/footer";

const Standard = ({ children }) => {
  return (
    <>
      <PrimaryNav />
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  );
}

export default Standard;
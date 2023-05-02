import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header";
import People from "./components/People/People.jsx";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Hero from "./components/hero/Hero";
import styles from "./styles/app.module.scss";

const App = () => {

  //don't forget to add font link in index.html
  return(
  
    <div className={`bg-primary ${styles.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Works />
      <Portfolio />
      <People />
      <Footer />

    </div>


  );
};

export default App;

import './Main.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolios';

function Main({ loggedIn }) {
  return (
    <>
      <Header isLoggedIn={loggedIn} />
      <main>
        <Promo />
        <NavTab />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;

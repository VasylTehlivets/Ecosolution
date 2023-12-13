// import logo from './logo.svg';
import "./App.css";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./pages/Header/Header";
import HeaderMobile from "./pages/Header/HeaderMobile";
import Contact from "./pages/Contact/Contact";
import Main from "./pages/Main/Main";
import Values from "./pages/Values/Values";
import Electricity from "./pages/Electricity/Electricity";
import FAQSection from "./pages/FAQ/FAQSection";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1279px)",
  // });
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    // <div>
    //   <HeaderMobile />
    // </div>
    <div className="App">
      {/* {isMobile && <HeaderMobile />}
      {isTablet && <HeaderMobile />}
      {!isMobile && !isTablet && <Header />} */}
      {isMobile && <HeaderMobile />}
      {isDesktop && <Header />}
      <Main />
      <Values />
      <Electricity />
      <FAQSection />
      <Contact />
    </div>
  );
};

export default App;

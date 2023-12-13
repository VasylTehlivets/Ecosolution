import React, { useState } from "react";
import "./HeaderMobile.css";
import { ReactComponent as BurgerIcon } from "../../assets/burger-icon.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo-icon.svg";
import BurgerMenu from "../Burger/BurgerMenu";

const HeaderMobile = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
    // setBurgerMenuOpen((prevOpen) => !prevOpen);
  };
  return (
    <header className="header-mobile">
      <div className="logo">
        <LogoIcon className="iconlogo" />
        <div className="word">ecosolution</div>
        <div className="slogan">
          <span className="slogan-green">GREEN</span>ERGY
          <br />
          FOR LIFE
        </div>
      </div>
      {/* <button className="burger-menu">
        <BurgerIcon />
      </button> */}
      <button className="burger-menu-button" onClick={toggleBurgerMenu}>
        <BurgerIcon />
      </button>
      <BurgerMenu isOpen={burgerMenuOpen} onClose={toggleBurgerMenu} />
    </header>
  );
};

export default HeaderMobile;

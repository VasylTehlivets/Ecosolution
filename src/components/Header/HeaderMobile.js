import React from "react";
import "./HeaderMobile.css";
import { ReactComponent as BurgerIcon } from "../../assets/burger-icon.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo-icon.svg";

const HeaderMobile = () => {
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
      <button className="burger-menu">
        <BurgerIcon />
      </button>
    </header>
  );
};

export default HeaderMobile;

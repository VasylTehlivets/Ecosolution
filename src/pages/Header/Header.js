import React, { useEffect, useState } from "react";
import "./Header.css";
import { ReactComponent as BurgerIcon } from "../../assets/burger-icon.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo-icon.svg";
import { Link as ScrollLink } from "react-scroll";
import BurgerMenu from "../Burger/BurgerMenu";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        const scrolled = window.scrollY > 20;
        if (scrolled) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  return (
    // <header className="header">
    //   <a href="#" className="logo">
    //     Logo
    //   </a>
    //   <nav className="burger-menu">Burger Menu</nav>
    //   <a href="#" className="get-in-touch">
    //     Get in touch
    //   </a>
    // </header>
    <header className="header">
      <div className="logo">
        <LogoIcon className="iconlogo" />
        <div className="word">ecosolution</div>
        <div className="slogan">
          <span className="slogan-green">GREEN</span>ERGY
          <br />
          FOR LIFE
        </div>
      </div>
      {/* <button className="burger-menu"> */}
      <button className="burger-menu" onClick={toggleBurgerMenu}>
        <BurgerIcon />
      </button>
      <BurgerMenu isOpen={burgerMenuOpen} onClose={toggleBurgerMenu} />
      <ScrollLink to="contact" smooth={true} duration={500}>
        Get in touch
      </ScrollLink>
    </header>
  );
};

export default Header;

// import React from "react";
// // import "./BurgerMenu.css";
// import { Link, animateScroll as scroll } from "react-scroll";

// const BurgerMenu = ({ isOpen, onClose }) => {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//     onClose(); // Закриваємо бургер-меню після кліку на пункт
//   };

//   return (
//     <div className={`burger-menu ${isOpen ? "open" : ""}`}>
//       <div className="burger-close" onClick={onClose}>
//         &#10005;
//       </div>
//       <nav className="burger-nav">
//         <Link to="main" smooth={true} duration={500} onClick={scrollToTop}>
//           Main
//         </Link>
//         <Link to="value" smooth={true} duration={500} onClick={onClose}>
//           About
//         </Link>
//         <Link to="case" smooth={true} duration={500} onClick={onClose}>
//           Cases
//         </Link>
//         <Link to="FAQ" smooth={true} duration={500} onClick={onClose}>
//           FAQ
//         </Link>
//         <Link to="contact" smooth={true} duration={500} onClick={onClose}>
//           Contact Us
//         </Link>
//         {/* Додайте інші пункти меню відповідно до вашого макету */}
//       </nav>
//       <div className="social-icons">{/* Додайте іконки соцмереж */}</div>
//     </div>
//   );
// };

// export default BurgerMenu;

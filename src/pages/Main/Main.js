import React from "react";
import "./Main.css";
import { Link as ScrollLink } from "react-scroll";

const Main = () => {
  return (
    <div id="main">
      <h1>
        RENEWABLE ENERGY <br /> For any task
      </h1>
      <p>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      {/* <button>Learn more</button> */}
      <ScrollLink to="case" smooth={true} duration={500}>
        Learn more
      </ScrollLink>
    </div>
  );
};

export default Main;

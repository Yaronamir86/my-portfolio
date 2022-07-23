import React from "react";
import "./Header.css";
import CTA from "../../CTA";
import ME from "../../assets/assets/me1.png";
import HeaderSocials from "../HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i'm</h5>
        <h1>yaron amir</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default header;

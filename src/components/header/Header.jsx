import React from "react";
import "./header.css";
import CallToAction from "./CallToAction";
import Socials from "./Socials";
import Me from "../../assets/me.png";
const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Osama Ahmed </h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CallToAction />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <Socials />
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

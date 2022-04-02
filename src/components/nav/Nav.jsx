import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { GiEgyptianProfile } from "react-icons/gi";
const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActive("#header")}
        className={active === "#header" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <FaRegHandshake />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <GiEgyptianProfile />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <MdAlternateEmail />
      </a>
    </nav>
  );
};

export default Nav;

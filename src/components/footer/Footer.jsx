import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Osama
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
        <a
          href="https://twitter.com/mentaloverflow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Osama Ahmed. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

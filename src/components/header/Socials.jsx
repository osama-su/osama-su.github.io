import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/osama-su"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <BsTwitter />
      </a>
    </div>
  );
};

export default Socials;

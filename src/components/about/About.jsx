import React from "react";
import "./about.css";
import ME from "../../assets/about-me.jpg";
import { FaProjectDiagram } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";
import CallToAction from "../header/CallToAction";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaProjectDiagram className="about-card-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className="about-card-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about-card">
              <BsFolderCheck className="about-card-icon" />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, similique doloremque! Cupiditate animi corporis
            possimus similique sequi distinctio, cum saepe dicta. Ullam
            perspiciatis quam eos molestias voluptates velit, harum magnam?
          </p>
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default About;

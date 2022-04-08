import React from "react";
import "./experience.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaVuejs,
  FaPhp,
  FaNodeJs,
  FaLaravel,
} from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb } from "react-icons/si";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaHtml5 className="exp-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <FaCss3 className="exp-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <SiJavascript className="exp-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <FaReact className="exp-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <FaVuejs className="exp-icon" />
              <div>
                <h4>VueJS</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <FaNodeJs className="exp-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <FaPhp className="exp-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <SiMysql className="exp-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <SiMongodb className="exp-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
            <article className="experience-details">
              <FaLaravel className="exp-icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Exper</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

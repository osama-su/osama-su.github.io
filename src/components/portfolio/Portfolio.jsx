import React from "react";
import "./portfolio.css";
import Two048Clone from "../../assets/2048-clone.png";
import PortfolioV01 from "../../assets/portfolio-v0.1.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Two048Clone} alt="2048 Clone" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com/osama-su/2048-clone" className="btn">
              Github
            </a>
            <a
              href="https://osamaahmed.me/2048-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PortfolioV01} alt="Portfolio v0.1" />
          </div>
          <h3>Project Title</h3>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/osama-su/portfolio-v0.1"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://osamaahmed.me/portfolio-v0.1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

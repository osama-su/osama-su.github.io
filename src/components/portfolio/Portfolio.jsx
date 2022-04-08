import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image"></div>
          <h3>Project Title</h3>
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
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image"></div>
          <h3>Project Title</h3>
          <a href="https://github.com/osama-su/portfolio-v0.1" className="btn">
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
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./portfolio.css";
import Two048Clone from "../../assets/2048-clone.png";
import PortfolioV01 from "../../assets/portfolio-v0.1.png";

const data = [
  {
    id: 1,
    title: "2048 Clone",
    image: Two048Clone,
    havesource: true,
    sourcecode: "https://github.com/osama-su/2048-clone",
    liveDemo: "https://osamaahmed.me/2048-clone",
  },
  {
    id: 2,
    title: "Portfolio v0.1",
    image: PortfolioV01,
    havesource: true,
    sourcecode: "https://github.com/osama-su/portfolio-v0.1",
    liveDemo: "https://osamaahmed.me/portfolio-v0.1",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {data.map(({ id, title, image, havesource, sourcecode, liveDemo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt="2048 Clone" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                {havesource ? (
                  <a
                    href={sourcecode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Source Code
                  </a>
                ) : (
                  () => null
                )}

                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

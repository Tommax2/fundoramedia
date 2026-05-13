import React from "react";
import LazyBackground from "./LazyBackground";

function DiscoverSection({ id, categories, selectedCategory, onCategory, title, cards, onViewAll, subtitle }) {
  const spotlight = cards[0];
  const hasCards = cards.length > 0;
  const toneBackground = {
    blue: "linear-gradient(140deg, #4f67c8, #25387f)",
    leaf: "linear-gradient(140deg, #2f8b67, #1a4f3b)",
    gold: "linear-gradient(140deg, #d7a64a, #99661e)",
    rust: "linear-gradient(140deg, #be6a56, #7a3324)"
  };

  return (
    <section className="discover reveal" id={id}>
      <div className="toolbar">
        <div className="pills">
          {categories.map((category) => (
            <button key={category} className={`pill ${selectedCategory === category ? "on" : ""}`} onClick={() => onCategory(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="main main-rich">
        <div className="section-head">
          <div>
            <h3>{title}</h3>
            <p>{subtitle || "Projects we've delivered results for"}</p>
          </div>
          <div className="section-head-actions">
            <div className="portfolio-switch" role="group" aria-label="Portfolio switch">
              <span className="portfolio-switch-active">Client work</span>
              <button type="button" onClick={onViewAll}>Our services</button>
            </div>
          </div>
        </div>

        {hasCards ? (
          <>
            <article className="spotlight">
              <LazyBackground
                className={`spotlight-media ${spotlight.tone}`}
                image={spotlight.image}
                overlay="linear-gradient(150deg, rgba(0,0,0,.2), rgba(0,0,0,.5))"
                fallback={toneBackground[spotlight.tone]}
              />
              <div className="spotlight-body">
                <span>{spotlight.tag}</span>
                <h4>{spotlight.title}</h4>
                <p>{spotlight.meta}</p>
                <span className="portfolio-result-pill">{spotlight.result}</span>
              </div>
              <div className="portfolio-service-chip">{spotlight.service}</div>
            </article>

            <div className="grid">
              {cards.map((card, index) => (
                <article className="card" key={card.title} style={{ animationDelay: `${index * 70}ms` }}>
                  <LazyBackground
                    className={`thumb ${card.tone}`}
                    image={card.image}
                    overlay="linear-gradient(155deg, rgba(0,0,0,.15), rgba(0,0,0,.45))"
                    fallback={toneBackground[card.tone]}
                  >
                    <em>{card.tag}</em>
                  </LazyBackground>
                  <div className="card-body">
                    <h4>{card.title}</h4>
                    <p>{card.meta}</p>
                    <span className="portfolio-result-pill sm">{card.result}</span>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="no-results">
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default DiscoverSection;

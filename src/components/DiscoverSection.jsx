import React from "react";
import LazyBackground from "./LazyBackground";

function DiscoverSection({ id, categories, selectedCategory, onCategory, title, cards, onViewAll }) {
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
            <p>Curated projects with strong supporter activity</p>
          </div>
          <div className="section-head-actions">
            <span className="live-pill">Live now</span>
            <button onClick={onViewAll}>View all</button>
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
                <div className="meter">
                  <i style={{ width: `${spotlight.progress}%` }} />
                </div>
                <small className="pulse-text">Momentum is rising this hour</small>
              </div>
              <strong>{spotlight.value}</strong>
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
                    <div className="meter">
                      <i style={{ width: `${card.progress}%` }} />
                    </div>
                    <div className="meta-row">
                      <strong>{card.progress}% funded</strong>
                      <span>{card.value}</span>
                    </div>
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

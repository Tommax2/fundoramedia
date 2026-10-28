import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import ModeSwitcher from "../components/ModeSwitcher";
import DiscoverSection from "../components/DiscoverSection";
import BookPromotionSection from "../components/BookPromotionSection";
import MarketingServicesSection from "../components/MarketingServicesSection";
import ConsultationSection from "../components/ConsultationSection";
import Footer from "../components/Footer";
import { BOOK_CATEGORIES, BOOK_CARDS } from "../data/constants";

function ServicesPage() {
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const [bookCategory, setBookCategory] = useState("All genres");
  const handleTabChange = (id) => {
    setTab(id);
    localStorage.setItem("fundora_tab", id);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 60);
    return () => window.clearTimeout(timer);
  }, [tab]);

  const filteredBookCards =
    bookCategory === "All genres"
      ? BOOK_CARDS
      : BOOK_CARDS.filter((c) => c.tag === bookCategory);

  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
      <TopNav />
      <section className="flow-intro">
        <p className="eyebrow">Find the right support</p>
        <h1>A clear path from idea to growth</h1>
        <p className="flow-intro-copy">
          Choose what you are building, explore the services that fit, then book a free review with our team.
        </p>
        <ol className="flow-steps" aria-label="How it works">
          <li className="is-current"><strong>Choose your focus</strong><small>Book or campaign</small></li>
          <li><strong>Review services</strong><small>Find the right support</small></li>
          <li><strong>Plan next steps</strong><small>Book a free review</small></li>
        </ol>
        <ModeSwitcher tab={tab} onChange={handleTabChange} />
      </section>

      {tab === "book" && (
        <>
          <DiscoverSection
            id="book-discover"
            categories={BOOK_CATEGORIES}
            selectedCategory={bookCategory}
            onCategory={setBookCategory}
            title="Highly rated"
            subtitle="Authors and books we've promoted"
            cards={filteredBookCards}
            onViewAll={() =>
              document.getElementById("book-services")?.scrollIntoView({ behavior: "smooth" })
            }
          />
          <BookPromotionSection />
          <ConsultationSection tab={tab} />
        </>
      )}

      {tab === "marketing" && (
        <>
          <MarketingServicesSection />
          <ConsultationSection tab={tab} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default ServicesPage;

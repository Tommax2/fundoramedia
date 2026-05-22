import React, { useEffect, useState } from "react";
import ConsultationSection from "./components/ConsultationSection";
import DiscoverSection from "./components/DiscoverSection";
import BookPromotionSection from "./components/BookPromotionSection";
import BookPackagesSection from "./components/BookPackagesSection";
import MarketingServicesSection from "./components/MarketingServicesSection";
import MarketingPackagesSection from "./components/MarketingPackagesSection";
import BlogTeaser from "./components/BlogTeaser";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopNav from "./components/TopNav";
import { BOOK_CARDS, BOOK_CATEGORIES, TABS } from "./data/constants";

function App() {
  const [tab, setTab] = useState("book");
  const [bookCategory, setBookCategory] = useState("All genres");

  const getPackageSectionId = (tabId) => {
    if (tabId === "book") return "book-packages";
    return "marketing-packages";
  };

  const filteredBookCards = bookCategory === "All genres"
    ? BOOK_CARDS
    : BOOK_CARDS.filter((c) => c.tag === bookCategory);

  useEffect(() => {
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

    const items = document.querySelectorAll(".reveal");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [tab]);

  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
        <TopNav tabs={TABS} tab={tab} onTabChange={setTab} onLaunch={() => document.getElementById(getPackageSectionId(tab))?.scrollIntoView({ behavior: "smooth" })} />

        <HeroSection
          tab={tab}
          onStart={() => document.getElementById(getPackageSectionId(tab))?.scrollIntoView({ behavior: "smooth" })}
        />

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
              onViewAll={() => document.getElementById("book-services")?.scrollIntoView({ behavior: "smooth" })}
            />
            <BookPromotionSection />
            <ConsultationSection tab={tab} />
            <BookPackagesSection />
          </>
        )}

        {tab === "marketing" && (
          <>
            <MarketingServicesSection />
            <ConsultationSection tab={tab} />
            <MarketingPackagesSection />
          </>
        )}

        <TestimonialsSection />
        <AboutSection />
        <BlogTeaser />
        <FaqSection />
        <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import CrowdfundingPackagesSection from "./components/CrowdfundingPackagesSection";
import CrowdfundingServicesSection from "./components/CrowdfundingServicesSection";
import ConsultationSection from "./components/ConsultationSection";
import DiscoverSection from "./components/DiscoverSection";
import BookPromotionSection from "./components/BookPromotionSection";
import BookPackagesSection from "./components/BookPackagesSection";
import BlogTeaser from "./components/BlogTeaser";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopNav from "./components/TopNav";
import { BOOK_CARDS, BOOK_CATEGORIES, FUND_CARDS, FUND_CATEGORIES, TABS } from "./data/constants";

function App() {
  const [tab, setTab] = useState("fund");
  const [fundCategory, setFundCategory] = useState("All");
  const [bookCategory, setBookCategory] = useState("All genres");

  const getPackageSectionId = (tabId) => (tabId === "fund" ? "crowd-packages" : "book-packages");

  const filteredFundCards = fundCategory === "All"
    ? FUND_CARDS
    : FUND_CARDS.filter((c) => c.tag === fundCategory);

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
      <div className="app-card">
        <TopNav tabs={TABS} tab={tab} onTabChange={setTab} onLaunch={() => document.getElementById(getPackageSectionId(tab))?.scrollIntoView({ behavior: "smooth" })} />

        <HeroSection
          tab={tab}
          onStart={() => document.getElementById(getPackageSectionId(tab))?.scrollIntoView({ behavior: "smooth" })}
          onExplore={() => document.getElementById(tab === "fund" ? "fund-discover" : "book-discover")?.scrollIntoView({ behavior: "smooth" })}
        />

        {tab === "fund" && (
          <>
            <DiscoverSection
              id="fund-discover"
              searchPlaceholder="Search campaigns..."
              categories={FUND_CATEGORIES}
              selectedCategory={fundCategory}
              onCategory={setFundCategory}
              title="Featured client work"
              cards={filteredFundCards}
              onViewAll={() => document.getElementById("crowd-services")?.scrollIntoView({ behavior: "smooth" })}
            />
            <CrowdfundingServicesSection />
            <ConsultationSection tab={tab} />
            <CrowdfundingPackagesSection />
          </>
        )}

        {tab === "book" && (
          <>
            <DiscoverSection
              id="book-discover"
              searchPlaceholder="Search books or authors..."
              categories={BOOK_CATEGORIES}
              selectedCategory={bookCategory}
              onCategory={setBookCategory}
              title="Highly rated"
              cards={filteredBookCards}
              onViewAll={() => document.getElementById("book-services")?.scrollIntoView({ behavior: "smooth" })}
            />
            <BookPromotionSection />
            <ConsultationSection tab={tab} />
            <BookPackagesSection />
          </>
        )}

        <BlogTeaser />
        <Footer />
      </div>
    </div>
  );
}

export default App;


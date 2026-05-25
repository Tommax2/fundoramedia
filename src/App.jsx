import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ConsultationSection from "./components/ConsultationSection";
import DiscoverSection from "./components/DiscoverSection";
import BookPromotionSection from "./components/BookPromotionSection";
import BookPackagesSection from "./components/BookPackagesSection";
import MarketingServicesSection from "./components/MarketingServicesSection";
import MarketingPackagesSection from "./components/MarketingPackagesSection";
import BlogSection from "./components/BlogSection";
import FaqSection from "./components/FaqSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopNav from "./components/TopNav";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import { BOOK_CARDS, BOOK_CATEGORIES, TABS } from "./data/constants";

function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function RevealObserver({ tab }) {
  const location = useLocation();

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
      const items = document.querySelectorAll(".reveal");
      items.forEach((item) => observer.observe(item));
      return () => observer.disconnect();
    }, 60);

    return () => window.clearTimeout(timer);
  }, [tab, location.pathname]);

  return null;
}

function App() {
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const [bookCategory, setBookCategory] = useState("All genres");

  const getPackageSectionId = (tabId) => {
    if (tabId === "book") return "book-packages";
    return "marketing-packages";
  };

  const filteredBookCards = bookCategory === "All genres"
    ? BOOK_CARDS
    : BOOK_CARDS.filter((c) => c.tag === bookCategory);

  const handleTabChange = (nextTab) => {
    setTab(nextTab);
    localStorage.setItem("fundora_tab", nextTab);
  };

  return (
    <BrowserRouter>
      <HashScrollHandler />
      <RevealObserver tab={tab} />
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slugOrId" element={<BlogPostPage />} />
        <Route path="*" element={
          <div className="app-shell">
            <div className="ambient a1" />
            <div className="ambient a2" />
            <TopNav tabs={TABS} tab={tab} onTabChange={handleTabChange} onLaunch={() => document.getElementById(getPackageSectionId(tab))?.scrollIntoView({ behavior: "smooth" })} />

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
            <BlogSection />
            <FaqSection />
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

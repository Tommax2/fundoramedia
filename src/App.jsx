import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import TopNav from "./components/TopNav";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import { TABS } from "./data/constants";

function HashScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      return undefined;
    }

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

function HomePage() {
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const navigate = useNavigate();

  const handleTabChange = (id) => {
    setTab(id);
    localStorage.setItem("fundora_tab", id);
  };

  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
      <TopNav
        tabs={TABS}
        tab={tab}
        onTabChange={handleTabChange}
        onLaunch={() => navigate("/packages")}
      />
      <HeroSection tab={tab} onStart={() => navigate("/packages")} />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <HashScrollHandler />
      <RevealObserver tab={null} />
      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slugOrId" element={<BlogPostPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

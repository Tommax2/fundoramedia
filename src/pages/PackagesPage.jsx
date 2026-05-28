import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import BookPackagesSection from "../components/BookPackagesSection";
import MarketingPackagesSection from "../components/MarketingPackagesSection";
import Footer from "../components/Footer";
import { TABS } from "../data/constants";

function PackagesPage() {
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
  const navigate = useNavigate();

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

      {tab === "book" && <BookPackagesSection />}
      {tab === "marketing" && <MarketingPackagesSection />}

      <Footer />
    </div>
  );
}

export default PackagesPage;

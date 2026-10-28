import { useState, useEffect } from "react";
import TopNav from "../components/TopNav";
import ModeSwitcher from "../components/ModeSwitcher";
import BookPackagesSection from "../components/BookPackagesSection";
import MarketingPackagesSection from "../components/MarketingPackagesSection";
import Footer from "../components/Footer";

function PackagesPage() {
  const [tab, setTab] = useState(() => localStorage.getItem("fundora_tab") || "book");
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
      <TopNav />
      <ModeSwitcher tab={tab} onChange={handleTabChange} />

      {tab === "book" && <BookPackagesSection />}
      {tab === "marketing" && <MarketingPackagesSection />}

      <Footer />
    </div>
  );
}

export default PackagesPage;

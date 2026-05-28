import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { TABS } from "../data/constants";

function AboutPage() {
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
      <AboutSection />
      <Footer />
    </div>
  );
}

export default AboutPage;

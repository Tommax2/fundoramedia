import TopNav from "../components/TopNav";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <div className="app-shell">
      <div className="ambient a1" />
      <div className="ambient a2" />
      <TopNav />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default AboutPage;

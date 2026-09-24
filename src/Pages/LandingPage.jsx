import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import Categories from "../components/Categories";
import AboutUs from "../components/AboutUs";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Categories />
        <AboutUs />
        <Process />
        <CTASection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

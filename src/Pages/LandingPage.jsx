import { lazy, Suspense } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero";

const TrustBadges = lazy(() => import("../components/TrustBadges"));
const Categories = lazy(() => import("../components/Categories"));
const AboutUs = lazy(() => import("../components/AboutUs"));
const Process = lazy(() => import("../components/Process"));
const CTASection = lazy(() => import("../components/CTASection"));
const Footer = lazy(() => import("../components/Footer"));
const WhatsAppButton = lazy(() => import("../components/WhatsAppButton"));

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <TrustBadges />
          <Categories />
          <AboutUs />
          <Process />
          <CTASection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <WhatsAppButton />
        <Footer />
      </Suspense>
    </div>
  );
}
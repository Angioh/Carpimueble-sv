import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import LandingPage from "./Pages/LandingPage";
import Privacidad from "./Pages/Privacidad";
import AvisoCookies from "./Pages/AvisoCookies";
import ScrollToHash from "./components/ScrollToHash";

export default function App() {
  return (
    <HelmetProvider> 
      <Router>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/politica-cookies" element={<AvisoCookies />} />
        </Routes>
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const location = useLocation();
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      AOS.refreshHard();
    }, 60); // 60ms delay
    return () => clearTimeout(timeout);
  }, [location]);

  if (!showContent) return null;

  return (
    <Layout key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Layout>
  );
}

export default App;

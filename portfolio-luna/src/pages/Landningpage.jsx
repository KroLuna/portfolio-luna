import { NavBar } from "../../components/NavBar";

import { Footer } from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom"; // For rendering nested routes

import { useRef } from "react";

export const LandingPage = () => {
  return (
    <div>
      <NavBar onLogoClick={addSplat} />

      <Hero />
      <div className="outlet-wrapper">
        <Outlet /> {/* This is where the content will change */}
      </div>
      <Footer />
    </div>
  );
};

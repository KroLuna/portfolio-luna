import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom"; // For rendering nested routes

// import { useRef } from "react";

export const Landingpage = () => {
  return (
    <div>
      <div className="content-wrap">
        {/* <Navbar onLogoClick={addSplat} /> */}
        <Navbar />
        <div className="outlet-wrapper">
          <Outlet /> {/* This is where the content will change */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

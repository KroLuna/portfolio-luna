import "./Navbar.css";
import Hamburger from "../assets/hamburger-black.png";
// import Logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar-wrapper">
      {/* <img src={Logo} alt="Menu" className="logo" onClick={onLogoClick} /> */}
      <div className="nav-links">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/post-story" className="nav-item">
          About me
        </Link>
        <Link to="/story-list" className="nav-item">
          Projects
        </Link>
      </div>
      <img
        src={Hamburger}
        alt="Logo"
        className="hamburger"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown">
          <Link to="/" className="dropdown-item" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/post-story"
            className="dropdown-item"
            onClick={handleLinkClick}>
            About me
          </Link>
          <Link
            to="/story-list"
            className="dropdown-item"
            onClick={handleLinkClick}>
            Projects
          </Link>
        </div>
      )}
    </div>
  );
};

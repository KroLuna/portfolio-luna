import { Link } from "react-router-dom";
import "./Footer.css";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <span>
          Carolina Luna
          <Link
            to="https://linkedin.com/in/carolina-luna-b1659251"
            target="_blank"
            rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </Link>
          <Link
            to="https://github.com/KroLuna"
            target="_blank"
            rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </Link>
        </span>
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + ABOUT */}
        <div className="footer-col">
          <img src={logo} alt="Xtrazcon Logo" className="footer-logo" />
          <p>
            XtrazCon Technology delivers innovative IT solutions, digital
            marketing, and web development services to help businesses grow.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>
            Prabhavee Tech Park,<br />
            Baner Rd, Pune,<br />
            Maharashtra, India – 411045
          </p>

          <p>US: +1 651 347 1807</p>
          <p>India: +91 95035 39447</p>
          <p>Email: info@xtrazcon.com</p>
        </div>

        {/* SOCIAL / COPYRIGHT */}
        <div className="footer-col">
          <h4>Connect</h4>
          <a
            href="https://github.com/pravinavachar12"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pravin-avachar-aab999320/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © Pravin Avachar CSE . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

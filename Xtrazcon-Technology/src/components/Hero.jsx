import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <h1>Building Digital Solutions That Drive Growth</h1>
      <p>
        XtrazCon helps businesses grow with cutting-edge IT solutions, web
        development and digital marketing services.
      </p>

      <Link to="/contact" className="hero-btn">
        Get in Touch
      </Link>
    </section>
  );
}

export default Hero;

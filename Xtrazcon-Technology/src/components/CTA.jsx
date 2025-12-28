import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta">
      <h2>Ready to Grow Your Business?</h2>
      <p>Let XtrazCon handle your technology while you focus on growth.</p>

      <Link to="/contact" className="cta-btn">
        Contact Us
      </Link>
    </section>
  );
}

export default CTA;

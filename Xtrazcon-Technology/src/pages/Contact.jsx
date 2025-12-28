function Contact() {
  return (
    <div className="page contact-page">
      <h1 className="center-text">Contact Us</h1>
      <p className="contact-intro">
        Have a question or want to work with us? Get in touch with XtrazCon
        Technology.
      </p>

      <div className="contact-container">
        {/* LEFT: CONTACT INFO */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>
            Prabhavee Tech Park,<br />
            Baner Rd, Pune,<br />
            Maharashtra, India – 411045
          </p>

          <p><strong>US:</strong> +1 651 347 1807</p>
          <p><strong>India:</strong> +91 95035 39447</p>
          <p><strong>Email:</strong> info@xtrazcon.com</p>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

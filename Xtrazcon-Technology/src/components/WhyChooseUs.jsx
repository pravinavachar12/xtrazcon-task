import reliableIcon from "../assets/icons/health.png";
import growthIcon from "../assets/icons/growth.png";
import supportIcon from "../assets/icons/support.png";

function WhyChooseUs() {
  return (
    <div className="why-choose">
      <h2>Why Choose Us?</h2>

      <p className="why-desc">
        XtrazCon has all the tools and resources to provide you excellent
        services in SEO, Mobile App development, startup services, IT services,
        website development, digital marketing and a lot more.
      </p>

      <div className="why-grid">
        <div className="why-card">
          <img src={reliableIcon} alt="Reliable" />
          <h3>Reliable</h3>
          <p>
            You can rely on XtrazCon to take care of all aspects of your IT
            infrastructure.
          </p>
        </div>

        <div className="why-card">
          <img src={growthIcon} alt="Growth" />
          <h3>Growth</h3>
          <p>
            With the ability to attract targeted traffic, XtrazCon will provide
            better ROI for your marketing investments.
          </p>
        </div>

        <div className="why-card">
          <img src={supportIcon} alt="24/7 Support" />
          <h3>24/7 Support</h3>
          <p>
            XtrazCon’s round the clock support to manage and monitor your network
            ensures your business survival online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

function Home() {
  return (
    <div className="page">
      <Hero />

      <p className="home-desc">
        XtrazCon is a market leader in mobile app development, website designing,
        digital marketing, IT services and everything related to IT and web
        development.
      </p>

      <ServicesPreview />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}

export default Home;

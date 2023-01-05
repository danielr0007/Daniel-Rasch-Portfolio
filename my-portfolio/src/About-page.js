import SectionHeader from "./Section-header";
import Lottie from "lottie-react";

import aboutSectionAnimation from "./aboutSectionAnimation.json";

function AboutPage() {
  return (
    <section className="about-page-outermost-container">
      <SectionHeader title={"About Me"} />

      <div className="bio-container">
        <p>
          As a Front-End developer with three years of experience in the
          industry, I have a strong foundation in building websites using
          technologies like WordPress, HTML, CSS, and JavaScript. In the past
          year, I have expanded my skillset by learning and using the React
          library to create mobile-friendly applications. <br />
          <br /> I am always looking for ways to contribute value to a
          development team and learn from my colleagues. My main motivations in
          life are personal growth and recognition from my peers. I believe that
          with consistency, perseverance, and focus, any goal can be achieved.
          These values guide me in all aspects of my work and personal life.
        </p>

        <div className="about-lottie-container">
          <Lottie animationData={aboutSectionAnimation} />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

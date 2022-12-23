import SectionHeader from "./Section-header";
import Lottie from "lottie-react";

import aboutSectionAnimation from "./aboutSectionAnimation.json";

function AboutPage() {
  return (
    <section className="about-page-outermost-container">
      <SectionHeader title={"About Me"} />

      <div className="bio-container">
        <p>
          I am a Front-End developer with 3 years of industry experience
          building websites with WordPress, HTML, CSS, and JavaScript. Over the
          past year, I've adopted the React library, refining my skills and
          developing full-fledged mobile friendly applications utilizing React
          Js best practices. <br /> <br /> Looking to be of value to a
          development team and learn from them. <br />
          <br />
          My main motivators are constant growth in all areas of life and
          recognition by my peers. <br />
          <br />
          My Favorite words are consistency, perseverance, and focus. With those
          three traits, any goal is achievable.
        </p>

        <div className="about-lottie-container">
          <Lottie animationData={aboutSectionAnimation} />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

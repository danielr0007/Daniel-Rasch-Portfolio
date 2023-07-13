import SectionHeader from "./Section-header";
import Lottie from "lottie-react";

import aboutSectionAnimation from "./aboutSectionAnimation.json";

function AboutPage() {
  return (
    <section className="about-page-outermost-container">
      <SectionHeader title={"About Me"} />

      <div className="bio-container">
        <p>
          I am an front-end developer with a background in digital marketing.
          With almost three years of experience, I specialize in building and
          maintaining mobile-friendly websites using HTML, CSS, JavaScript, and
          CMS platforms like WordPress. In the past year, I have expanded my
          skillset by adopting front-end frameworks like React.js and have used
          it to build full-fledged mobile-friendly applications. With my
          marketing background, I bring a unique perspective to development. I
          am now seeking a role in a dynamic development team where I can
          contribute my skills and continue to learn from my colleagues. <br />
          <br /> My main motivators are personal growth and recognition for my
          hard work. I believe that with consistency, perseverance, and focus,
          any goal can be achieved. These values guide me in all aspects of my
          work and personal life.
        </p>

        <div className="about-lottie-container">
          <Lottie animationData={aboutSectionAnimation} />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

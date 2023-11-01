import SectionHeader from "./Section-header";
import Lottie from "lottie-react";

import aboutSectionAnimation from "./aboutSectionAnimation.json";

function AboutPage() {
  return (
    <section className="about-page-outermost-container">
      <SectionHeader title={"About Me"} />

      <div className="bio-container">
        <p>
          As a front-end engineer with nearly three years in the field, my
          expertise lies in the creation and upkeep of mobile-responsive
          websites utilizing a toolset that includes HTML, CSS, JavaScript,
          React, and various Content Management Systems, such as WordPress. Over
          the past year, I have diversified my skill portfolio by incorporating
          cutting-edge technologies like Node.js, PHP and MySQL, enabling me to
          craft comprehensive mobile-friendly applications. My distinctive
          background in digital marketing complements my development prowess,
          providing me with a unique perspective to enhance user experiences and
          drive engagement. I am currently in pursuit of an opportunity within a
          dynamic development team, where I can not only contribute my skill set
          but also foster continued growth and learning through collaboration
          with my peers. <br />
          <br /> My main motivators are personal growth and recognition for my
          hard work. I believe that with consistency, perseverance, patience and
          focus, any goal can be achieved. These values guide me in all aspects
          of my work and personal life.
        </p>

        <div className="about-lottie-container">
          <Lottie animationData={aboutSectionAnimation} />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;

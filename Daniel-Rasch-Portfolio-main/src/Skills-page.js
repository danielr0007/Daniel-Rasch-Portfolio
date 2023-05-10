import SectionHeader from "./Section-header";

function SkillsPage() {
  return (
    <section>
      <SectionHeader title={"My Skills"} />
      <div className="outermost-skills-div">
        <div className="right-skills-container">
          <IndiSkill
            skillStyle={"html"}
            image={require("./images/html-logo.png")}
            skillName="HTML5"
            InterestingOpinion={
              "Underrated and has alot more functionality than people realize"
            }
          />
          <IndiSkill
            skillStyle={"css"}
            image={require("./images/css-logo.png")}
            skillName="CSS3"
            InterestingOpinion={"Grid is by far my favorite thing about CSS"}
          />
          <IndiSkill
            skillStyle={"javascript"}
            image={require("./images/javascript-logo.png")}
            skillName="JavaScript"
            InterestingOpinion={
              "I love that this was the language that exposed me to programming"
            }
          />
          <IndiSkill
            skillStyle={"wordpress"}
            image={require("./images/wordpress-logo.png")}
            skillName="Wordpress"
            InterestingOpinion={
              "My introduction into website development. Forever grateful."
            }
          />
          <IndiSkill
            skillStyle={"webpack"}
            image={require("./images/webpack-logo.png")}
            skillName="Webpack"
            InterestingOpinion={
              "Is like that one friend that brings the whole crew together"
            }
          />
        </div>
        <div className="left-skills-container">
          <IndiSkill
            skillStyle={"react"}
            image={require("./images/react-logo.png")}
            skillName="React.Js"
            InterestingOpinion={"Like a cheat code for Javascript, so cool!"}
          />
          <IndiSkill
            skillStyle={"github"}
            image={require("./images/github-logo.png")}
            skillName="GitHub"
            InterestingOpinion={"Social media for developers"}
          />
          <IndiSkill
            skillStyle={"bootstrap"}
            image={require("./images/bootstrap-logo.png")}
            skillName="Bootstrap"
            InterestingOpinion={"Cheat code for CSS"}
          />
          <IndiSkill
            skillStyle={"photoshop"}
            image={require("./images/photoshop-logo.png")}
            skillName="Photoshop"
            InterestingOpinion={"Creativity's disney world"}
          />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;

// INDIVIDUAL SKILL COMPONENT//////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
function IndiSkill({ skillStyle, image, skillName, InterestingOpinion }) {
  return (
    <div className="indi-skill-container">
      <div className={`skill-pic-div ${skillStyle}`}>
        <img src={image} alt="" />
      </div>
      <h4>{skillName}</h4>
      <p>{InterestingOpinion}</p>
    </div>
  );
}

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
              "3 years of exp. Possess a strong understanding in structuring pages and optimizing for the search engines."
            }
          />
          <IndiSkill
            skillStyle={"css"}
            image={require("./images/css-logo.png")}
            skillName="CSS3"
            InterestingOpinion={"3 years of exp. Proficient in flexbox, grid, and media queries."}
          />
          <IndiSkill
            skillStyle={"javascript"}
            image={require("./images/javascript-logo.png")}
            skillName="JavaScript"
            InterestingOpinion={
              "3 years of exp. Solid understanding of the fundamentals and how the language runs under the hood"
            }
          />
          <IndiSkill
            skillStyle={"wordpress"}
            image={require("./images/wordpress-logo.png")}
            skillName="Wordpress"
            InterestingOpinion={
              "4 years of exp. My introduction into website development. Forever grateful."
            }
          />
          <IndiSkill
            skillStyle={"webpack"}
            image={require("./images/webpack-logo.png")}
            skillName="Webpack"
            InterestingOpinion={
              "2 years of exp. Love this powerful bundler that makes development easier and optimizes my apps."
            }
          />
          <IndiSkill
            skillStyle={"tailwind"}
            image={require("./images/tailwind-logo.png")}
            skillName="Tailwind"
            InterestingOpinion={
              "1 year of exp. Love using tailwind for most projects that do not require very complex CSS. The ease of use and speed is amazing."
            }
          />
        </div>
        <div className="left-skills-container">
          <IndiSkill
            skillStyle={"react"}
            image={require("./images/react-logo.png")}
            skillName="React.Js"
            InterestingOpinion={"2 years of exp. Proficient in using hooks, props, jsx, and many other features that make react a powerful library."}
          />
          <IndiSkill
            skillStyle={"github"}
            image={require("./images/github-logo.png")}
            skillName="GitHub"
            InterestingOpinion={"2 years of exp. Can use it via the Macbook command-line."}
          />
          <IndiSkill
            skillStyle={"bootstrap"}
            image={require("./images/bootstrap-logo.png")}
            skillName="Bootstrap"
            InterestingOpinion={"1 year of exp. Helps to to quickly get a site together."}
          />
          <IndiSkill
            skillStyle={"photoshop"}
            image={require("./images/photoshop-logo.png")}
            skillName="Photoshop"
            InterestingOpinion={"5 years of exp. High degree of competence. Use it daily for graphic design assigments"}
          />
          <IndiSkill
            skillStyle={"sass"}
            image={require("./images/sass-logo.png")}
            skillName="Sass"
            InterestingOpinion={"One year exp using this amazing tool for organizing my CSS"}
          />
          <IndiSkill
            skillStyle={"git"}
            image={require("./images/git-logo.png")}
            skillName="Git"
            InterestingOpinion={"2 years of exp. Skilled using the Mac command-line for version control."}
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

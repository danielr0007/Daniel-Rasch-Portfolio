import SectionHeader from "./Section-header";
import projects from "./project-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDesktop } from "@fortawesome/free-solid-svg-icons";
// import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

function ProjectsPage() {
  // console.log(projects);
  const data = projects;
  // const toolsUsed = data.tools;
  // console.log(toolsUsed);
  return (
    <section>
      <SectionHeader title={"My Projects"} />
      {data.map((project, i) => (
        <article key={i} className="indi-project-outermost-container">
          <div
            className={
              project.position === "left"
                ? "project-image-container"
                : "project-image-container-right"
            }
          >
            <img src={project.image} alt="" srcset="" />
          </div>
          <div
            className={
              project.position === "left"
                ? "project-info-container"
                : "project-info-container" + " " + "align-left"
            }
          >
            <p className="featured-project">Featured Project</p>
            <h3>{project.name}</h3>
            <p
              className={
                project.position === "left"
                  ? "project-description"
                  : "project-description-right"
              }
            >
              {project.description}
            </p>
            <div
              className={
                project.position === "left"
                  ? "tools-container"
                  : "tools-container" + " " + "justify-left "
              }
            >
              {project.tools.map((tool, i) => (
                <p key={i}>{tool}</p>
              ))}
            </div>
            <div className="github-projectsite-container">
              <p>Click for Github Code & Website</p>
              <a target="_blank" href={project.github}>
                <FontAwesomeIcon className="gitgub-icon" icon={faCode} />
              </a>
              <a target="_blank" href={project.link}>
                <FontAwesomeIcon className="gitgub-icon" icon={faDesktop} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default ProjectsPage;

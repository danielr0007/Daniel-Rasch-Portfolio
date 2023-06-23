import { Route, Routes } from "react-router-dom";
import AboutPage from "./About-page";
import ResumePage from "./Resume-page";
import ProjectsPage from "./Projects-page";
import SkillsPage from "./Skills-page";
import ContactPage from "./Contact-page";

function PageSection() {
  return (
    <section className="page-section-container radius">
      {/* PAGE ONE */}
      <Routes>
        <Route path="/" element={<AboutPage />} />

        {/* PAGE TWO */}
        <Route path="/resume" element={<ResumePage />} />

        {/* PAGE THREE */}
        <Route path="/projects" element={<ProjectsPage />} />

        {/* PAGE FOUR */}
        <Route path="/skills" element={<SkillsPage />} />

        {/* PAGE FIVE */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </section>
  );
}

export default PageSection;

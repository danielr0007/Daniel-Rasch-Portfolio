import SectionHeader from "./Section-header";

function ResumePage() {
  return (
    <section>
      <SectionHeader title={"My Resume"} />

      <div className="resume-container">
        <iframe
          src={require("./resume-webdev.pdf")}
          width="100%"
          height="600px"
          className="responsive-iframe"
        ></iframe>
      </div>
    </section>
  );
}

export default ResumePage;

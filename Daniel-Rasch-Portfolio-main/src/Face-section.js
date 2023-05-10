import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import { faPaperclip, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function FaceSection() {
  const [gitHubBlinkEffect, setGitHubBlinkEffect] = React.useState(false);
  const [linkedInBlinkEffect, setLinkedInBlinkEffect] = React.useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      !gitHubBlinkEffect
        ? setGitHubBlinkEffect(true)
        : setGitHubBlinkEffect(false);

      !linkedInBlinkEffect
        ? setLinkedInBlinkEffect(true)
        : setLinkedInBlinkEffect(false);
    }, 5000);

    return () => clearInterval(timer);
  }, [gitHubBlinkEffect, linkedInBlinkEffect]);

  return (
    <section className="face-section-outermost-container radius">
      <div className="image-container">
        <img
          src={require("./images/coding-image.jpg")}
          alt="mountain range background"
        />
      </div>
      <div className="title-div-container">
        <img src={require("./images/profile-pic.jpg")} alt="profile pic" />
        <div className="title-div">
          <h2>Daniel Rasch</h2>
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Front-End Developer")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Passionate Coder")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Strategic Problem Solver")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Avid Creator")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Front-End Developer")
                  .start();
              }}
            />
          </p>
          <div className="social-icons">
            <a href="https://github.com/danielr0007" target="_blank">
              <FontAwesomeIcon
                style={
                  gitHubBlinkEffect ? { color: "#d0d0d0" } : { color: "purple" }
                }
                className="gitgub-icon"
                icon={faGithub}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/danielrasch30/"
              target="_blank"
            >
              <FontAwesomeIcon
                style={
                  linkedInBlinkEffect
                    ? { color: "#2e45c4" }
                    : { color: "#d0d0d0" }
                }
                className="gitgub-icon"
                icon={faLinkedin}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="call-to-actions">
        <div className="download-cv">
          <a
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            href={require("./resume-webdev.pdf")}
            download
          >
            <FontAwesomeIcon
              style={{
                padding: "8px",
                color: "white",
                backgroundColor: "#f6a98f",
                borderRadius: "100%",
              }}
              icon={faPaperclip}
            />
            Download CV
          </a>
        </div>
        <div className="contact-me">
          <NavLink
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
            exact
            to="/contact"
          >
            <FontAwesomeIcon
              style={{
                padding: "8px",
                color: "white",
                backgroundColor: "#f6a98f",
                borderRadius: "100%",
              }}
              icon={faEnvelope}
            />
            Contact Me
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default FaceSection;

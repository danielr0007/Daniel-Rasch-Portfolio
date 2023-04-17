import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faUser,
  faCode,
  faBrain,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="light-border-right">
          <NavLink
            exact
            to="/"
            style={({ isActive }) => {
              return { color: isActive ? "#323232" : "#323232" };
            }}
          >
            <span>
              <FontAwesomeIcon className="icon" icon={faUser} />
            </span>
            <span>About</span>
          </NavLink>
        </li>
        <li className="light-border-right">
          <NavLink
            to="/resume"
            style={({ isActive }) => {
              return { color: isActive ? "#f6a98f" : "#323232" };
            }}
          >
            <span>
              <FontAwesomeIcon className="icon" icon={faFile} />
            </span>
            <span>Resume</span>
          </NavLink>
        </li>
        <li className="light-border-right">
          <NavLink
            to="/projects"
            style={({ isActive }) => {
              return { color: isActive ? "#f6a98f" : "#323232" };
            }}
          >
            <span>
              <FontAwesomeIcon className="icon" icon={faCode} />
            </span>
            <span>Projects</span>
          </NavLink>
        </li>
        <li className="light-border-right">
          <NavLink
            exact
            to="/skills"
            style={({ isActive }) => {
              return { color: isActive ? "#f6a98f" : "#323232" };
            }}
          >
            <span>
              <FontAwesomeIcon className="icon" icon={faBrain} />
            </span>
            <span>Skills</span>
          </NavLink>
        </li>
        <li className="light-border-right">
          <NavLink
            exact
            to="/contact"
            style={({ isActive }) => {
              return { color: isActive ? "#f6a98f" : "#323232" };
            }}
          >
            <span>
              <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            </span>
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

{
  /* <Link to="invoices">Invoices</Link> |{" "} */
}

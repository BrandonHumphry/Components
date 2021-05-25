import "./Navigation2.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation2() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div
          className="brand-title"
          id={showLinks ? "close" : ""}
          alt="open navigation menu"
          onClick={() => setShowLinks(!showLinks)}
        ></div>

        <div className="navbar-links" id={showLinks ? "hidden" : ""}>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                onClick={() => setShowLinks(!showLinks)}
                activeClassName="selected"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/portfolio"
                onClick={() => setShowLinks(!showLinks)}
                activeClassName="selected"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                onClick={() => setShowLinks(!showLinks)}
                activeClassName="selected"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation2;

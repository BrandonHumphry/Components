import "./Navigation2.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation2() {
  const [showLinks, setShowLinks] = useState(false);

  const overflow = () => {
    !showLinks
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  };

  const transition = () => {
    !showLinks
      ? (document.getElementsByClassName(".navbar-links#hidden").style.height =
          "100vh")
      : (document.getElementsByClassName(".navbar-links#hidden").style.height =
          "0px");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo" alt="logo"></div>
        <div
          className="brand-title"
          id={showLinks ? "close" : ""}
          alt="open navigation menu"
          onClick={() => {
            setShowLinks(!showLinks);
            overflow();
            transition();
          }}
        />

        <div className="navbar-links" id={showLinks ? "hidden" : ""}>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                onClick={() => {
                  setShowLinks(!showLinks);
                  overflow();
                }}
                activeClassName="selected"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/portfolio"
                onClick={() => {
                  setShowLinks(!showLinks);
                  overflow();
                }}
                activeClassName="selected"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                onClick={() => {
                  setShowLinks(!showLinks);
                  overflow();
                }}
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

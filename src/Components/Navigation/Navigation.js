import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo" alt="logo"></div>
      <div
        className="brand-title"
        id={showLinks ? "close" : ""}
        alt="open navigation menu"
        onClick={() => {
          setShowLinks(!showLinks);
          // overflow();
          // heightTransition();
        }}
      />

      <div className="navbar-links" id={showLinks ? "hidden" : ""}>
        <ul>
          {/* <li>
            <NavLink
              exact
              to="/"
              onClick={() => {
                setShowLinks(!showLinks);
                // overflow();
              }}
              activeClassName="selected"
              className="navLinkItem"
            >
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              exact
              to="/portfolio"
              onClick={() => {
                setShowLinks(!showLinks);
                // overflow();
              }}
              activeClassName="selected"
              className="navLinkItem"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/recent"
              onClick={() => {
                setShowLinks(!showLinks);
                // overflow();
              }}
              activeClassName="selected"
              className="navLinkItem"
            >
              Recent
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              exact
              to="/contact"
              onClick={() => {
                setShowLinks(!showLinks);
                // overflow();
              }}
              activeClassName="selected"
              className="navLinkItem"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

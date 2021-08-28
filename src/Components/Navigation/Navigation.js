import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [showLinks, setShowLinks] = useState(true);

  const overflow = () => {
    // const heightUl = document.querySelector(".navbar-links#hidden");
    !showLinks
      ? (document.body.style.overflow = "hidden")
      : // (document.querySelector(".navbar-links#hidden").style.opacity = "1")
        // (document.querySelector(".navbar-links#hidden").style.opacity = "1")
        // (heightUl.style.opacity = "0")
        (document.body.style.overflow = "auto");
    // (document.querySelector(".navbar-links#hidden").style.height = "100vh");
  };

  // const heightTransition = () => {
  //   const heightUl = document.querySelector(".navbar-links#hidden");
  //   // const heightUl = document.getElementById("hidden");

  //   heightUl.style.opacity = "0";
  // };
  // const transition = () => {
  //   !showLinks
  //     ? // ? (document.querySelector(".navbar-links#hidden").style.height = "0")
  //       // : (document.querySelector(".navbar-links#hidden").style.height = "100%");
  //       (heightTransition.style.height = "0")
  //     : (heightTransition.style.height = "100%");
  // };

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
            // heightTransition();
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

export default Navigation;

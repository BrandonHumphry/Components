import "./Navigation_hideShow.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigation() {
  const [show, handleShow] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  // const overflow = () => {
  //   // const heightUl = document.querySelector(".navbar-links#hidden");
  //   !showLinks
  //     ? (document.body.style.overflow = "hidden")
  //     : // (document.querySelector(".navbar-links#hidden").style.opacity = "1")
  //       // (document.querySelector(".navbar-links#hidden").style.opacity = "1")
  //       // (heightUl.style.opacity = "0")
  //       (document.body.style.overflow = "auto");
  //   // (document.querySelector(".navbar-links#hidden").style.height = "100vh");
  // };

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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`navbar ${show && "nav_background"}`}>
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

      <ul className="navbar-links" id={showLinks ? "hidden" : ""}>
        <li>
          <NavLink
            exact
            to="/"
            onClick={() => {
              setShowLinks(!showLinks);
              // overflow();
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
              // overflow();
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
              // overflow();
            }}
            activeClassName="selected"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

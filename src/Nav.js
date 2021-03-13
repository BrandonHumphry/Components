import React, { useState, useEffect } from "react";
import "./Nav.css";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  const [show, handleShow] = useState(false);

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
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_logo_area">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>
      <div className="nav_menu">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Nav;

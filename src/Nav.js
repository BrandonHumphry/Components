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
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      {/* <img
        className="nav_avatar"
        // src="https://upload.wikimedia.org/wikipedia/commons/8/89/Avatar_Jitrixis.png"
        src={<MenuIcon />}
        alt="You are logged in"
      /> */}
      <div className="nav_menu">
        <MenuIcon />
      </div>
      {/* <MenuIcon className="nav_menu" /> */}
    </div>
  );
}

export default Nav;

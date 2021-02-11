import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="../public/nav_logo.svg"
          alt="click nav logo to go to home page"
        />
      </div>
      <div className="header__right">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

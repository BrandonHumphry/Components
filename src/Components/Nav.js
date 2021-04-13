import React from "react";
import "./Nav.css";

function Nav() {
  const x = (ref = { myTopnav });
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Nav;

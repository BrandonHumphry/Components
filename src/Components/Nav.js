import React from "react";
import "./Nav.css";

function Nav() {
  function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">
          About
        </a>
        <a href="#about">Portfolio</a>
        <a href="#about">Recent</a>
        <a href="#contact">Contact</a>
        <a className="icon" onclick={myFunction}>
          {/* <a href="javascript:void(0);" className="icon" onclick={myFunction}> */}
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Nav;

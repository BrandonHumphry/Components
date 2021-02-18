import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          {/* <img src="" alt="" /> */}
          <h1>img placeholder</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;

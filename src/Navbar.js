import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expanded-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Logo
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Contact
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

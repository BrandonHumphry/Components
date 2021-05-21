import "./Navigation2.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation2() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <nav className="navbar">
        {/* <div className="brand-title" id={showLinks ? "close" : ""}>
          <img
            src={Open}
            alt="open navigation menu"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div> */}

        <div
          className="brand-title"
          id={showLinks ? "close" : ""}
          alt="open navigation menu"
          onClick={() => setShowLinks(!showLinks)}
        ></div>

        <div className="navbar-links" id={showLinks ? "hidden" : ""}>
          <ul>
            <li>
              <Link exact to="/">
                About
              </Link>
            </li>
            <li>
              <Link exact to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link exact to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation2;

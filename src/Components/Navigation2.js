import "./Navigation2.css";
import Open from "./open.png";
import Close from "./close.png";
import { useState } from "react";

function Navigation2() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="brand-title">
          <img
            src={Open}
            alt="open navigation menu"
            onClick={() => setShowLinks(!showLinks)}
          />
        </div>
        {/* <div className="brand-title-hidden">
          <img src={Close} alt="close nav" />
        </div> */}

        <div className="navbar-links" id={showLinks ? "hidden" : ""}>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation2;

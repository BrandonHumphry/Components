import React from "react";
import "./Footer.css";

const Footer = ({ data }) => {
  if (data) {
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      {/* <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul> */}

      <ul className="copyright">
        <div id="toTop">
          <a className="smoothscroll" title="Back to Top" href="#home">
            {/* how to make this dynamic so the scroll goes back up to the first div on each page */}
            <i className="icon-up-open"></i>
          </a>
        </div>
        <li>
          Created in{" "}
          <a title="" href="">
            2021
          </a>
        </li>
      </ul>
      {/* </div>
      </div> */}
    </footer>
  );
};

export default Footer;

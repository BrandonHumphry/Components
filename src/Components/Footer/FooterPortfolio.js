import { Link } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="NavigationProfile">
        <div className="portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="portfolioPages">
          <Link to="/client1">Client 1</Link>
          <Link to="/client2">Client 2</Link>
          <Link to="/client1">Client 3</Link>
          <Link to="/client1">Client 4</Link>
          <Link to="/client1">Client 5</Link>
          <Link to="/client1">Client 6</Link>
        </div>
      </div>

      <div id="toTop">
        <a className="smoothscroll" title="Back to Top" href="#home">
          {/* how to make this dynamic so the scroll goes back up to the first div on each page */}
          <i className="icon-up-open"></i>
        </a>
      </div>
      <section>studioeande 2021</section>
    </footer>
  );
};

export default Footer;

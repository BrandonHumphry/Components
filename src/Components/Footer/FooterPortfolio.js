import { Link } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="NavigationProfile">
        <div className="portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </div>

        <div className="portfolioPages">
          <Link to="/client1">Client 1</Link>
          <Link to="/client1">Client 2</Link>
          <Link to="/client1">Client 3</Link>
          <Link to="/client1">Client 4</Link>
          <Link to="/client1">Client 5</Link>
          <Link to="/client1">Client 6</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

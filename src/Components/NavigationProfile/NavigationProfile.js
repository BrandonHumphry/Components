import { Link } from "react-router-dom";
import "./NavigationProfile.css";

const NavigationProfile = ({
  cards,
  id,
  title,
  company,
  description,
  path,
  link
}) => {
  return (
    <div className="NavigationProfile">
      <div className="portfolio">
        <Link to="/portfolio">Portfolio</Link>
      </div>

      <div className="portfolioPages">
        <Link to="/client1">Client 1</Link>
        <Link to="/client1">Client 1</Link>
        <Link to="/client1">Client 1</Link>
        <Link to="/client1">Client 1</Link>
        <Link to="/client1">Client 1</Link>
        <Link to="/client1">Client 1</Link>
      </div>
    </div>
  );
};

export default NavigationProfile;

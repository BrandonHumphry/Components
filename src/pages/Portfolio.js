import Card from "../Components/Card/Card";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div>
      <div className="tabs">
        <li>UX Design</li>
        <li>Development</li>
        <li>Illustration</li>
      </div>

      <div className="gallery">
        <Link to="/selectedclient">
          <Card />
        </Link>
        <Link to="/selectedclient">
          <Card />
        </Link>
        <Link to="/selectedclient">
          <Card />
        </Link>
        <Link to="/selectedclient">
          <Card />
        </Link>
        <Link to="/selectedclient">
          <Card />
        </Link>
        <Link to="/selectedclient">
          <Card />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

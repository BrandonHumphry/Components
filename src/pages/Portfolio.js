import Card from "../Components/Card/Card";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "card 1",
      description: "about the topic",
      company: "company name"
    },
    {
      id: 2,
      title: "card 1",
      description: "about the topic",
      company: "company name"
    },
    {
      id: 3,
      title: "card 1",
      description: "about the topic",
      company: "company name"
    }
  ]);
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

import Card from "../Components/Card/Card";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CardList from "../Components/CardList";
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
        <CardList title={title} />
        {/* <Link to="/selectedclient">
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
        </Link> */}
      </div>
    </div>
  );
};

export default Portfolio;

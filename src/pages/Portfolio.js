import "./Portfolio.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CardList from "../Components/CardList";
import Card from "../Components/Card/Card";
import Ad from "../Components/Card/ad.png";

const Portfolio = () => {
  // const location = useLocation();
  // const { fromNotifications } = location.state;

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "card 1",
      description: "about the topic",
      company: "company name",
      image: "../Components/Card/ad.png",
      path: "/selectedclient"
    },
    {
      id: 2,
      title: "card 2",
      description: "about the topic",
      company: "company name",
      path: "/selectedclient"
    },
    {
      id: 3,
      title: "card 3",
      description: "about the topic",
      company: "company name",
      link: (
        <Link
          to={{
            pathname: "/selectedclient",
            state: { fromNotifications: true }
          }}
        />
      )
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
        {/* <CardList cards={cards} /> */}
        <Card cards={cards}></Card>
        {/* <Link to="/selectedclient">
          <Card /> */}
      </div>
    </div>
  );
};

export default Portfolio;

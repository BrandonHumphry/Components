import Card from "./Card/Card";
import { Link, useLocation } from "react-router-dom";

const CardList = ({ cards, id, title, company, description, link }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={id}>
          <h2>{title}</h2>
          <p>{company}</p>
          <p>{description}</p>
          {link}
        </Card>
      ))}
    </div>
  );
};

export default CardList;

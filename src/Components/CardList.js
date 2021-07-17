import Card from "./Card/Card";
import { Link } from "react-router-dom";

const CardList = ({ cards, id, title, company, description }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.company}</p>
          <p>{card.description}</p>
          <Link to="/selectedclient" />
        </Card>
      ))}
    </div>
  );
};

export default CardList;

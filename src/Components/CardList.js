import Card from "./Card/Card";
import {
  Route,
  Link,
  useLocation,
  BrowserRouter as Router
} from "react-router-dom";

const CardList = ({ cards, id, title, company, description, path }) => {
  return (
    <div className="card-list">
      {cards.map(card => (
        <Router>
          <Link to={path}>
            {/* <Card key={id}> */}
            <h2>{title}</h2>
            <p>{company}</p>
            <p>{description}</p>
            {/* </Card> */}
          </Link>
        </Router>
      ))}
    </div>
  );
};

export default CardList;

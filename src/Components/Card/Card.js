import Ad from "./ad.png";
import "./Card.css";
import {
  Route,
  Link,
  useLocation,
  BrowserRouter as Router
} from "react-router-dom";

const Card = ({
  cards,
  id,
  title,
  company,
  description,
  path,
  link,
  image
}) => {
  return (
    <div className="card">
      {cards.map(card => (
        <div className="cardPreview" key={card.id}>
          <img src={card.image} alt="" />
          <h2>{card.title}</h2>
          <p>{card.company}</p>
          <p>{card.description}</p>
          {link}
        </div>
      ))}
      {/* <div className="content">
        <div className="overlay">topic</div>
        <img src={Ad} alt="" /> */}
      {/* <div className="text">Test</div> */}
      {/* </div> */}
    </div>
  );
};

export default Card;

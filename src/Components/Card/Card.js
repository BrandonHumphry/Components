import Ad from "./ad.png";
import "./Card.css";
import {
  Route,
  Link,
  useLocation,
  BrowserRouter as Router
} from "react-router-dom";

// const Card = ({
//   cards,
//   id,
//   title,
//   company,
//   description,
//   path,
//   link,
//   image

const Card = props => {
  const { id, image, title, company, description, linkTo } = props;
  return (
    <div className="card">
      {/* {cards.map(card => ( */}
      <div className="cardInfo" key={id}>
        <Link to={linkTo}>
          <img className="cardImage" src={image} alt="" />
        </Link>
        <div className="cardText">
          <h2 className="cardTitle">{title}</h2>
          <p className="cardCompany">{company}</p>
          <p className="cardDescription">{description}</p>
          <button className="cardButton">View</button>
        </div>
      </div>

      {/* <div className="content">
        <div className="overlay">topic</div>
        <img src={Ad} alt="" /> */}
      {/* <div className="text">Test</div> */}
      {/* </div> */}
    </div>
  );
};

export default Card;

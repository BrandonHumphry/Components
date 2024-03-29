import "./Card.css";
import { Link } from "react-router-dom";

const Card = props => {
  const { id, image, title, company, description, linkTo } = props;
  return (
    <div className="card">
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
    </div>
  );
};

export default Card;

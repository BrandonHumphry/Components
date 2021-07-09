import Ad from "./ad.png";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="content">
        <div className="overlay">topic</div>
        <img src={Ad} alt="" />
        {/* <div className="text">Test</div> */}
      </div>
    </div>
  );
}

export default Card;

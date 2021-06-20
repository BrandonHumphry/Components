import Loftware from "./Loftware.png";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="content">
        <img src={Loftware} alt="" />
        {/* <div className="text">Test</div> */}
      </div>
    </div>
  );
}

export default Card;

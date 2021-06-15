import logo from "../Navigation/logo.png";

function Card() {
  return (
    <div>
      <div className="content">
        <img src={logo} alt="" />
        <div className="text">Test</div>
      </div>
    </div>
  );
}

export default Card;

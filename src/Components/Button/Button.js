import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--success--outline"
];

const SIZES = ["btn--medium", "btn--large"];

const Button = props => {
  const { children, type, onClick, buttonStyle, buttonSize, linkTo } = props;

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
      <Link to={linkTo}>{linkTo}</Link>
    </div>
  );
};

export default Button;

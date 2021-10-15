import "./Button.css";

const STYLES = [
  "btn_primary_solid",
  "btn_warning_solid",
  "btn_danger_solid",
  "btn_success_solid",
  "btn_primary_outline",
  "btn_warning_outline",
  "btn_danger_outline",
  "btn_success_outline"
];

const SIZES = ["btn_medium", "btn_small"];

const Button = props => {
  const { children, type, onClick, buttonStyle, buttonSize } = props;

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      className="Button"
    >
      {children}
    </button>
  );
};

export default Button;

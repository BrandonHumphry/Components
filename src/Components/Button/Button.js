import "./Button.css";

const Button = props => {
  const { CTA } = props;
  return <div className="Button">{CTA}</div>;
};

export default Button;

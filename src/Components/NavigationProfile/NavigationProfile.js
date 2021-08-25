import { Link } from "react-router-dom";

const NavigationProfile = ({
  cards,
  id,
  title,
  company,
  description,
  path,
  link
}) => {
  return (
    <div className="NavigationProfile">
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/client1">Client 1</Link>
      <Link to="/client1">Client 2</Link>
      <Link to="/client1">Client 3</Link>
      <Link to="/client1">Client 4</Link>
      <Link to="/client1">Client 5</Link>
      <Link to="/client1">Client 6</Link>
    </div>
  );
};

export default NavigationProfile;

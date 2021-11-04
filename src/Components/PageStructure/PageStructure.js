import "./PageStructure.css";
import { HashLink as Link } from "react-router-hash-link";

const PageStructure = props => {
  const { pageTitle, pageDescription, id, link1 } = props;
  return (
    <div>
      <div className="pageStructure" id={id}>
        <h1 className="pageTitle">{pageTitle}</h1>
        <p className="pageDescription ">{pageDescription}</p>
      </div>
      <Link to={link1}></Link>
    </div>
  );
};

export default PageStructure;

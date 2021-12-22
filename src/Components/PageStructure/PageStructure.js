import { Button } from "@material-ui/core";
import "./PageStructure.css";
import { Link } from "react-router-dom";

const PageStructure = props => {
  const { pageTitle, pageDescription, id } = props;

  return (
    <div>
      <div className="pageStructure" id={id}>
        <h1 className="pageTitle">{pageTitle}</h1>
        <p className="pageDescription ">{pageDescription}</p>
      </div>
    </div>
  );
};

export default PageStructure;

import { Button } from "@material-ui/core";
import "./PageStructure.css";

const PageStructure = props => {
  const { pageTitle, pageDescription, id, Buttonlocation1, Buttonlocation2 } =
    props;

  const buttonlocation1 = () => {
    window.location =
      "mailto:eandedesignstudio@gmail.com?Subject=StudioEandE.com%20";
  };

  return (
    <div>
      <div className="pageStructure" id={id}>
        <h1 className="pageTitle">{pageTitle}</h1>
        <p className="pageDescription ">{pageDescription}</p>
      </div>
      <div className="buttonSection">
        <Button
          className="btn btn--primary--solid btn--medium"
          onClick={buttonlocation1}
        ></Button>
        <Button
          className="btn btn--primary--solid btn--medium"
          onClick={Buttonlocation2}
        ></Button>
      </div>
    </div>
  );
};

export default PageStructure;

import "./PageStructure.css";
import { HashLink as Link } from "react-router-hash-link";

const PageStructure = props => {
  const { pageTitle, pageDescription, id } = props;
  return (
    <div className="pageStructure" id={id}>
      <h1 className="pageTitle">{pageTitle}</h1>
      <p className="pageDescription ">{pageDescription}</p>
      {/* <Footer /> */}
      <div className="buttonSection">
        <Link
          to="/portfolio"
          id="btn1"
          className="btn btn--primary--solid btn--medium"
        >
          Portfolio
        </Link>

        <Link
          to="/contact"
          id="btn2"
          className="btn btn--primary--solid btn--medium"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default PageStructure;

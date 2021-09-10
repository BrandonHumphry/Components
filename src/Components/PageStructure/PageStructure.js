import SelectedClient from "../../../Components/SelectedClient/SelectedClient";
import SelectedClientImage from "../../../Components/SelectedClientImage/SelectedClientImage";
import Icon from "./icon.png";
import FooterPortfolio from "../../../Components/Footer/FooterPortfolio";

const PageStructure = props => {
  const { pageTitle, pageDescription } = props;
  return (
    <div className="PageStructure">
      <h1 className="pageTitle">{pageTitle}</h1>
      <p className="pageDescription ">{pageDescription}</p>
    </div>
  );
};

export default PageStructure;

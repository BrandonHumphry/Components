import "./SelectedClient.css";
import { Link } from "react-router-dom";
import SelectedClientImage from "../SelectedClientImage/SelectedClientImage";

const SelectedClient = props => {
  const {
    id,
    image,
    clientName,
    projectName,
    projectDescription,
    linkTo,
    siteName
  } = props;
  return (
    <div className="clientAbout" key={id}>
      <img className="clientLogo" alt="" src={image} />

      <div className="projectDescription">
        <h1 className="clientName">{clientName}</h1>
        <h3 className="projectName">{projectName}</h3>
        <p className="projectDescription ">
          {projectDescription}
          Project Description Sed ultricies nisi vitae metus consectetur
          molestie. Integer eu dolor nec tortor imperdiet semper. Integer a erat
          mauris. Donec ac dignissim nisl. Suspendisse potenti. Nam cursus dui
          mi, eget scelerisque nunc pretium ut. Aliquam erat volutpat.
          Pellentesque cursus malesuada mi ut tincidunt.
        </p>
        <Link to={linkTo}>{siteName}</Link>
        {/* <a href="https://www.website.com/" rel="noreferrer" target="_blank">
          View Website
        </a> */}
      </div>

      <div className="pictureGallery">
        <SelectedClientImage />
      </div>
    </div>
  );
};

export default SelectedClient;

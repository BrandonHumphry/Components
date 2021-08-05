import "SelectedClient.css";
import { Link } from "react-router-dom";
import SelectedClientImage from "./SelectedClientImage";

const SelectedClient = props => {
  const {
    id,
    image,
    customername,
    projectname,
    projectdetails,
    linkTo,
    siteName
  } = props;
  return (
    <div className="projectAbout" key={id}>
      <img className="projectLogo" image={image} />
      <div className="projectDescription">
        <h1 className="CustomerName">{customername}</h1>
        <h3 className="ProjectName">{projectname}</h3>
        <p className="projectDetails">
          {projectdetails}
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
        projectImage={""}
        clientName="title for card 1" projectName="company 1"
        projectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Nulla lobortis sapien vel suscipit rutrum." linkTo=
        <SelectedClientImage />
      </div>
    </div>
  );
};

export default SelectedClient;

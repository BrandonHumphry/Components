import "./SelectedClient.css";
import { Link } from "react-router-dom";
import SelectedClientImage from "../SelectedClientImage/SelectedClientImage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import NavigationProfile from "../NavigationProfile/NavigationProfile";

const SelectedClient = props => {
  const { id, image, clientName, projectName, projectDescription, prototype } =
    props;
  return (
    <div className="selectedClient" key={id}>
      <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
        <Link to="/portfolio">Portfolio</Link>
        <Typography color="textPrimary">Client Name</Typography>
      </Breadcrumbs>
      <div className="projectDescription">
        <img className="clientLogo" alt="" src={image} />
        <h1 className="clientName">{clientName}</h1>
        <h3 className="projectName">{projectName}</h3>
        <p className="projectDescription ">
          {projectDescription}
          Project Description Sed ultricies nisi vitae metus consectetur
          molestie. Integer eu dolor nec tortor imperdiet semper. Integer a erat
          mauris. Donec ac dignissim nisl. Suspendisse potenti. Nam cursus dui
          mi, eget scelerisque nunc pretium ut.
        </p>

        <a target="_blank" rel="noreferrer" href={prototype}>
          Figma prototype
        </a>
      </div>

      <div className="pictureGallery">
        <SelectedClientImage />
      </div>
      <NavigationProfile />
    </div>
  );
};

export default SelectedClient;

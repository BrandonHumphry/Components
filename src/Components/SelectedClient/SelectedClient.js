import "./SelectedClient.css";
import { Link, Route } from "react-router-dom";
import SelectedClientImage from "../SelectedClientImage/SelectedClientImage";

const SelectedClient = props => {
  const { id, image, clientName, projectName, projectDescription, prototype } =
    props;
  return (
    <div className="selectedClient" key={id}>
      <div className="projectDescription">
        <img className="clientLogo" alt="" src={image} />
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

        <a target="_blank" rel="noreferrer" href={prototype}>
          Figma prototype
        </a>
      </div>

      <div className="pictureGallery">
        <SelectedClientImage />
      </div>
    </div>
  );
};

export default SelectedClient;

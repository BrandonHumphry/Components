import "./SelectedClient.css";
import { Link } from "react-router-dom";
import SelectedClientImage from "../SelectedClientImage/SelectedClientImage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const SelectedClient = props => {
  const { id, image, clientName, projectName, projectDescription, prototype } =
    props;

  const scrolldown = () => {
    document.querySelector(".next-section").each(function () {
      document.querySelector(this).addEventListener("click", function () {
        //find the button's parent, in this case it is the section wrapper #about
        var nextSection = document
          .querySelector(this)
          .parent().nextElementSibling;
        //animate to the next section, edit the offset and time
        // note: having an offset can be handy, especially if you have fixed elements that depend on these scroll bahaviours. I'll leave it up to you to decide if you need an offset or not. Feel free to delete the 1 pixel altogether, you are the captain your own ship!
        document.querySelector("html, body").animate(
          {
            scrollTop: nextSection.offset().top + 1
          },
          1000
        );
      });
    });
  };

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
      <img
        src="./Navigation/navOpen.png"
        alt=""
        className="scrollDown"
        onClick={scrolldown}
      />
    </div>
  );
};

export default SelectedClient;

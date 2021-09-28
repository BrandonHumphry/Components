import "./SelectedClient.css";
import { Link } from "react-router-dom";
import SelectedClientImage from "../SelectedClientImage/SelectedClientImage";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const SelectedClient = props => {
  const { id, image, clientName, projectName, projectDescription, prototype } =
    props;

  const scrolldown = () => {
    document.getElementsByClassName("next-section").each(function () {
      this.addEventListener("click", e => {
        let nextSection = this.parent().nextElementSibling;

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
      <img src="./Navigation/navOpen.png" alt="" className="scrollDown" />
      <section id="about">
        Proin eget lobortis sapien. Sed et rhoncus nisi, ut sagittis ipsum.
        Suspendisse est enim, sagittis nec aliquet non, hendrerit ac leo. Ut
        tristique erat ut nulla ultrices ultrices. Maecenas ipsum nisl,
        hendrerit a velit in, fermentum vulputate quam. Sed risus quam, congue
        nec mi a, ullamcorper auctor justo. Duis tincidunt facilisis ante
        pharetra mollis. Fusce luctus sed nunc ut scelerisque. Pellentesque arcu
        erat, tincidunt at odio non, consectetur elementum elit. Phasellus
        imperdiet leo libero, in hendrerit ex blandit in. Maecenas quis nunc
        tristique, finibus enim ut, sagittis tortor. Pellentesque condimentum,
        augue a varius varius, enim massa facilisis ex, rhoncus mattis libero
        ante eu nibh. Etiam volutpat ullamcorper fermentum. Nam iaculis nisi
        dui. Nullam dictum lacus ex, a dictum massa mattis in. Donec ut congue
        leo. Ut scelerisque lectus ut gravida tempus.
        <button class="next-section" onClick={scrolldown}>
          scroll next
        </button>
      </section>

      <section id="info">
        Proin eget lobortis sapien. Sed et rhoncus nisi, ut sagittis ipsum.
        Suspendisse est enim, sagittis nec aliquet non, hendrerit ac leo. Ut
        tristique erat ut nulla ultrices ultrices. Maecenas ipsum nisl,
        hendrerit a velit in, fermentum vulputate quam. Sed risus quam, congue
        nec mi a, ullamcorper auctor justo. Duis tincidunt facilisis ante
        pharetra mollis. Fusce luctus sed nunc ut scelerisque. Pellentesque arcu
        erat, tincidunt at odio non, consectetur elementum elit. Phasellus
        imperdiet leo libero, in hendrerit ex blandit in. Maecenas quis nunc
        tristique, finibus enim ut, sagittis tortor. Pellentesque condimentum,
        augue a varius varius, enim massa facilisis ex, rhoncus mattis libero
        ante eu nibh. Etiam volutpat ullamcorper fermentum. Nam iaculis nisi
        dui. Nullam dictum lacus ex, a dictum massa mattis in. Donec ut congue
        leo. Ut scelerisque lectus ut gravida tempus.
        <button class="next-section" onClick={scrolldown}>
          scroll next{" "}
        </button>
      </section>
    </div>
  );
};

export default SelectedClient;

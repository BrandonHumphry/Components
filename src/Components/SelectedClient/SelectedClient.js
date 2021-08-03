import SelectedClientImage from "./SelectedClientImage";

const SelectedClient = props => {
  const { id, image } = props;
  return (
    <div className="projectAbout" key={id}>
      <img className="projectLogo"image ={image}>
        <img src="./image.png" alt="alt tag text goes here" />
      </div>
      <div className="projectDescription">
        <h1>Customer Name</h1>
        <h3>Project Name</h3>
        <p>
          Project Description Sed ultricies nisi vitae metus consectetur
          molestie. Integer eu dolor nec tortor imperdiet semper. Integer a erat
          mauris. Donec ac dignissim nisl. Suspendisse potenti. Nam cursus dui
          mi, eget scelerisque nunc pretium ut. Aliquam erat volutpat.
          Pellentesque cursus malesuada mi ut tincidunt.
        </p>
        <a href="https://www.website.com/" rel="noreferrer" target="_blank">
          View Website
        </a>
      </div>
      <div className="pictureGallery">

    
      projectImage={""}
        clientName="title for card 1"
        projectName="company 1"
        projectDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Nulla lobortis sapien vel suscipit 
      rutrum."
        linkTo=

        <SelectedClientImage />
      </div>
    </div>
  );
};

export default SelectedClient;

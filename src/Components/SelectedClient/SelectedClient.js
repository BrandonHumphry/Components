import SelectedClientImage from "./SelectedClientImage";

function SelectedClient() {
  return (
    <div className="projectAbout">
      <div className="projectLogo">
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
        <SelectedClientImage />
      </div>
    </div>
  );
}

export default SelectedClient;

import "./SelectedClient.css";

const SelectedClient = () => {
  return (
    <div>
      {/* <img src=".jpg" alt="" />
      <h1>Title</h1>
      <h2>SubTitle</h2>
      <p>Summary</p>
      <div className="links">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div> */}
      <div className="projectAbout">
        <div className="projectLogo">
          <img src="./Logo.png" alt="alt text here" />
        </div>
        <div className="projectDescription">
          <h1>Company/client</h1>
          <h3>Project Title</h3>
          <p>Description</p>
          <a href="https://www.com/" target="_blank">
            View Website
          </a>
        </div>
      </div>

      <div class="pictureGallery">
        <picture>
          <img src="./.gif" alt="descripiton alt tags" style="width:95%;" />
        </picture>
        <h3>Project Challenge</h3>
        <p>
          description
          <a href="link" target="_blank">
            description(cont)
          </a>{" "}
          description
        </p>
        <picture>
          <img
            src="./something.png"
            alt="descripiton alt tags"
            style="width:95%;"
          />
        </picture>
      </div>
    </div>
  );
};

export default SelectedClient;

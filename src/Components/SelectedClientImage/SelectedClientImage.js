import React from "react";

function SelectedClientImage() {
  return (
    <div className="projectAbout">
      <div className="projectLogo">
        <img
          src="./LogoWholeFoods.png"
          alt="Whole Foods Market logo 2017 custom text with leaf icon in a green circle"
        />
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
        <a
          href="https://www.wholefoodsmarket.com/"
          rel="noreferrer"
          target="_blank"
        >
          View Website
        </a>
      </div>
    </div>
  );
}

export default SelectedClientImage;

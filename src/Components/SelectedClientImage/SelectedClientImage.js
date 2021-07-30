import React from "react";

function SelectedClientImage() {
  return <div className="projectAbout">
  <div className="projectLogo">
    <img src="./LogoWholeFoods.png"
      alt="Whole Foods Market logo 2017 custom text with leaf icon in a green circle">
  </div>
  <div className="projectDescription">
    <h1>Whole Foods Market</h1>
    <h3>Customer Experience Solutions</h3>
    <p>
      Whole Foods Market is a dynamic leader in the quality food business. 
      Unorthodoxly, they did not use aisle numbers in their stores until 2020 and instead relied heavily 
      on a combination of printed and digital signage to enhance their customer's satisfaction. 
    </p>
    <a href="https://www.wholefoodsmarket.com/" target="_blank">View Website</a>
  </div>
</div>
<div className="pictureGallery">
<picture>
  <img src="./WholeFoods1.gif" alt="Val Portfolio Picture" style="width:95%;">
</picture>
<h3>Project Challenge</h3>
  <p>
    In 2015-2016 Whole Foods was combatting the "Whole Paycheck" 
    <a href="https://www.statesman.com/business/20160904/mackey-after-tough-2015-whole-foods-ready-to-change-the-story" 
    target="_blank">stigma</a> and losing. 
    A nine point plan that included cutting prices, communicating brand standards, and investing in digital communication
    was introduced. As I designer I helped bring consistency to the customer experience by uniting the digital and printed
    signage based on our style guides. 
  </p>
<picture>
  <img src="./WholeFoods2.png" alt="Val Portfolio Picture" style="width:95%;">
</picture>

<picture>
  <img src="./WholeFoods3.png" alt="Val Portfolio Picture" style="width:95%;">
</picture>

<picture>
  <img src="./WholeFoods4.png" alt="Val Portfolio Picture" style="width:95%;">
</picture>

<picture>
  <img src="./WholeFoods5.png" alt="Val Portfolio Picture" style="width:95%;">
</picture>
</div>;
}

export default SelectedClientImage;

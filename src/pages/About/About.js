import "./About.css";
import PageStructure from "../../Components/PageStructure/PageStructure";
import "../../Components/Images/Images.css";
import { HashLink as Link } from "react-router-hash-link";
import chevronDown from "./chevronDown.png";
import Button from "../../Components/Button/Button";

const About = () => {
  return (
    <div className="About">
      <div className="section1">
        <div className="bounce"></div>
        {/* <img src="./chevronDown.png" alt="" /> */}
        <a href="/#section2">
          <img src={chevronDown} alt="click to next section" />
        </a>
        {/* <Link to="/#section2"> */}
        {/* <img
            className="FullScreen"
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="placeholder"
          /> */}
        {/* </Link> */}
      </div>
      <div id="section2">
        <PageStructure
          id="intro"
          pageTitle="Home"
          pageDescription="Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                        minima nesciunt dolorem! Officiis iure rerum voluptates a cumque veli"
        />
      </div>
      {/* <Button
        onClick={() => {
          console.log("you clicked me");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
      >
        Portfolio
      </Button> */}
      <div className="buttonSection">
        <Link to="/portfolio" className="btn btn--primary--solid btn--large">
          Portfolio
        </Link>

        <Link to="/contact" className="btn btn--primary--solid btn--large">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default About;

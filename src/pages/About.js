import PageStructure from "../Components/PageStructure/PageStructure";
import "../Components/Images/Images.css";
import { HashLink as Link } from "react-router-hash-link";

const About = () => {
  return (
    <div id="about">
      <Link to="/#intro">
        <img
          className="FullScreen"
          src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
          alt="placeholder"
        />
      </Link>
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
  );
};

export default About;

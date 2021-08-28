import "./Portfolio.css";
import Card from "../Components/Card/Card";
import Ad from "../Components/Card/ad.png";


const Portfolio = () => {
  return (
    <div>
      <div className="tabs">
        <li>UX Design</li>
        <li>Development</li>
        <li>Illustration</li>
      </div>

      <div className="gallery">
        <Card
          title="title for card 1"
          company="company 1"
          description="Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Nulla lobortis sapien vel suscipit 
          rutrum."
          linkTo="/client1"
          image={Ad}
        />
        <Card
          title="title for card 1"
          company="company 1"
          description="description 1"
          linkTo="/selectedclient"
          image={Ad}
        />
        <Card
          title="title for card 1"
          company="company 1"
          description="description 1"
          linkTo="/selectedclient"
          image={Ad}
        />
        <Card
          title="title for card 1"
          company="company 1"
          description="description 1"
          linkTo="/selectedclient"
          image={Ad}
        />
        <Card
          title="title for card 1"
          company="company 1"
          description="description 1"
          linkTo="/selectedclient"
          image={Ad}
        />
        <Card
          title="title for card 1"
          company="company 1"
          description="description 1"
          linkTo="/selectedclient"
          image={Ad}
        />
      </div>
    </div>
  );
};

export default Portfolio;

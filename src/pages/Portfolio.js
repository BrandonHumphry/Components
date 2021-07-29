import "./Portfolio.css";
import Card from "../Components/Card/Card";
import Ad from "../Components/Card/ad.png";

const Portfolio = () => {
  // const location = useLocation();
  // const { fromNotifications } = location.state;

  // const [cards, setCards] = useState([
  //   {
  //     id: 1,
  //     title: "card 1",
  //     description: "about the topic",
  //     company: "company name",
  //     image: "../Components/Card/ad.png",
  //     path: "/selectedclient"
  //   },
  //   {
  //     id: 2,
  //     title: "card 2",
  //     description: "about the topic",
  //     company: "company name",
  //     path: "/selectedclient"
  //   },
  //   {
  //     id: 3,
  //     title: "card 3",
  //     description: "about the topic",
  //     company: "company name",
  //     link: (
  //       <Link
  //         to={{
  //           pathname: "/selectedclient",
  //           state: { fromNotifications: true }
  //         }}
  //       />
  //     )
  //   }
  // ]);

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

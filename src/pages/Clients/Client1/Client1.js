import SelectedClient from "../../../Components/SelectedClient/SelectedClient";
import Ad from "../../../Components/Card/ad.png";

function Client1() {
  return (
    <div>
      <SelectedClient
        image={Ad}
        clientName="title for card 1"
        projectName="project 1"
        projectDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Nulla lobortis sapien vel suscipit 
      rutrum."
        linkTo="/selectedclient"
      />
    </div>
  );
}

export default Client1;

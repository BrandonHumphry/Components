import SelectedClient from "../../../Components/SelectedClient/SelectedClient";

function Client1() {
  return (
    <div>
      <SelectedClient
        projectImage={""}
        clientName="title for card 1"
        projectName="company 1"
        projectDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Nulla lobortis sapien vel suscipit 
      rutrum."
        linkTo="/selectedclient"
      />
    </div>
  );
}

export default Client1;

import SelectedClient from "../../../Components/SelectedClient/SelectedClient";
import Icon from "./icon.png";

function Client1() {
  return (
    <div>
      <SelectedClient
        image={Icon}
        clientName="Client Name"
        projectName="Project Name"
        projectDescription="Lorem ipsum dolor sit amet, consectetur 
      adipiscing elit. Nulla lobortis sapien vel suscipit 
      rutrum."
        prototype="https://www.google.com/"
      />
    </div>
  );
}

export default Client1;

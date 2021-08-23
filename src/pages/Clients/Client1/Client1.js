import SelectedClient from "../../../Components/SelectedClient/SelectedClient";
import Icon from "./icon.png";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

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

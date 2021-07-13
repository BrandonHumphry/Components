import Card from "../Components/Card/Card";
import "./Portfolio.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import SelectedClient from "./Portfolio/SelectedClient";

const Portfolio = () => {
  return (
    <div>
      <div className="tabs">
        <li>UX Design</li>
        <li>Development</li>
        <li>Illustration</li>
      </div>

      <Router>
        <div className="gallery">
          {/* <Switch> */}
          <Card>
            <Route path="/selectedclient" exact>
              <SelectedClient />
            </Route>
          </Card>
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewNavbar from "./Components/NewNavbar";

const state = { clicked: false };

function App() {
  return (
    <div className="app">
      <Router>
        <NewNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import NewNavbar from "./Components/NewNavbar";
import Nav from "./Nav";
import SimpleMenu from "./NavMaterial";
import Header from "./Components/Header";

// const state = { clicked: false };

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then(res => res.json())
      .then(data => {
        setResumeData(data);
      });
  }, []);
  return (
    <div className="app">
      <Router>
        {/* <NewNavbar /> */}
        {/* <Nav /> */}
        {/* <SimpleMenu /> */}
        <Header data={resumeData.main} />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

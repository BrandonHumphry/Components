import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navigation2 from "./Components/Navigation2";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation2 />
        <main>
          <Switch>
            <Route path="/" exact>
              <About />
            </Route>
            <Route path="/portfolio" exact>
              <Portfolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;

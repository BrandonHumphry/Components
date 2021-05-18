import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navigation from "./Components/Navigation";

import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
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

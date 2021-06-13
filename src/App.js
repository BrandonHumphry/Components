import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer/Footer";

import "./App.css";

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
        <Footer />
      </Router>
    </div>
  );
};

export default App;

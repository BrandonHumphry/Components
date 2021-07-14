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
import SelectedClient from "./pages/Portfolio/SelectedClient";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <body>
          <Navigation />
          <main>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/selectedclient">
                <SelectedClient />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </body>
      </div>
    </Router>
  );
};

export default App;

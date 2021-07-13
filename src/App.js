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
    <div className="App">
      <body>
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
              <Route path="/selectedclient" exact>
                <SelectedClient />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </Router>

        <Footer />
      </body>
    </div>
  );
};

export default App;

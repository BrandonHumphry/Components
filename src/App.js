import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import FooterPortfolio from "./Components/Footer/FooterPortfolio";

import About from "./Pages/About/About";

import Portfolio from "./Pages/Portfolio/Portfolio";
import Client1 from "./Pages/PortfolioClients/Client1/Client1";

import Contact from "./Pages/Contact/Contact";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <body>
          <Navigation />
          <Footer />
          <main>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/client1">
                <Client1 />
                <FooterPortfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
        </body>
      </div>
    </Router>
  );
};

export default App;

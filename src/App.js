import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";

import FooterPortfolio from "./Components/Footer/FooterPortfolio";
import Footer from "./Components/Footer/Footer";

import About from "./Pages/About/About";

import Portfolio from "./Pages/Portfolio/Portfolio";
import Client1 from "./Pages/PortfolioClients/Client1/Client1";

import Contact from "./Pages/Contact/Contact";

import "./App.css";
import Navigation_hideShow from "./Components/Navigation/Navigation_hideShow";

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <body> */}
        {/* <main> */}
        <Switch>
          <Route path="/" exact>
            <Navigation_hideShow />
            <About />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Navigation />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/client1">
            <Navigation />
            <Client1 />
            <FooterPortfolio />
          </Route>
          <Route path="/contact">
            <Navigation />
            <Contact />
            <Footer />
          </Route>
          <Redirect to="/" />
        </Switch>
        {/* </main> */}
      </div>
    </Router>
  );
};

export default App;

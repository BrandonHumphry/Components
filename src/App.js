import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";

import { useEffect } from "react";

import Navigation from "./Components/Navigation/Navigation";

import FooterPortfolio from "./Components/Footer/FooterPortfolio";
import Footer from "./Components/Footer/Footer";

import About from "./Pages/About/About";

import Portfolio from "./Pages/Portfolio/Portfolio";
import Client1 from "./Pages/PortfolioClients/Client1/Client1";

import Contact from "./Pages/Contact/Contact";

import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
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
      </div>
    </Router>
  );
};

export default App;

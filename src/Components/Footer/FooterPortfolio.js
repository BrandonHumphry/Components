import { NavLink } from "react-router-dom";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="NavigationProfile">
        <div>
          <NavLink to="/portfolio" className="portfolio">
            Portfolio
          </NavLink>
        </div>
        <div className="portfolioPages">
          <NavLink to="/client1" className="FooterPortfolioItem">
            Client 1
          </NavLink>
          <NavLink to="/client2" className="FooterPortfolioItem">
            Client 2
          </NavLink>
          <NavLink to="/client1" className="FooterPortfolioItem">
            Client 3
          </NavLink>
          <NavLink to="/client1" className="FooterPortfolioItem">
            Client 4
          </NavLink>
          <NavLink to="/client1" className="FooterPortfolioItem">
            Client 5
          </NavLink>
          <NavLink to="/client1" className="FooterPortfolioItem">
            Client 6
          </NavLink>
        </div>
      </div>

      <div id="toTop">
        <a className="smoothscroll" title="Back to Top" href="#home">
          {/* how to make this dynamic so the scroll goes back up to the first div on each page */}
          <i className="icon-up-open"></i>
        </a>
      </div>
      <div className="studioeande">studioEandE 2022</div>
    </footer>
  );
};

export default Footer;

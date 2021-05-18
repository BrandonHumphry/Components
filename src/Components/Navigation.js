import "./Navigation.css";
import Open from "./open.png";
import Close from "./close.png";

const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const brandTitle = document.getElementsByClassName("brand-title")[0];
// const brandTitleHidden =
//   document.getElementsByClassName("brand-title-hidden")[0];

const openNav = () => {
  brandTitle.classList.toggle("active");
  navbarLinks.classList.toggle("active");

  // brandTitle.style.display = "none";
  // brandTitleHidden.style.display = "block";
};

const closeNav = () => {
  brandTitle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  // brandTitle.style.display = "block";
  // brandTitleHidden.style.display = "none";
};

function Navigation() {
  //   const toggleButton = document.getElementsByClassName("toggle-button")[0];

  //   toggleButton.addEventListener("click", () => {
  //     navbarLinks.classList.toggle("active");
  //   });

  return (
    <div>
      <nav className="navbar">
        <div className="brand-title" onClick={openNav}>
          <img src={Open} alt="open nav" />
        </div>
        <div className="brand-title-hidden" onClick={closeNav}>
          <img src={Close} alt="close nav" />
        </div>

        <div className="navbar-links" id="navbar-links">
          <ul>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

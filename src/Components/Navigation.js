import "./Navigation.css";
const toggleButton = document.getElementsByClassName("brand-title")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const brandTitle = document.getElementsByClassName("brand-title")[0];
const brandTitleHidden =
  document.getElementsByClassName("brand-title-hidden")[0];

const openNav = () => {
  navbarLinks.classList.toggle("active");
  brandTitle.style.display = "none";
  brandTitleHidden.style.display = "block";
};

const closeNav = () => {
  navbarLinks.classList.toggle("active");
  brandTitle.style.display = "block";
  brandTitleHidden.style.display = "none";
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
          Open
        </div>
        <div className="brand-title-hidden" onClick={closeNav}>
          Close
        </div>

        <div className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="navbar-links">
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

import "./Navigation.css";

const openNav = () => {
  const toggleButton = document.getElementsByClassName("brand-title");
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  navbarLinks.classList.toggle("active");
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
          Name
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

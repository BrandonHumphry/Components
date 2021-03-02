import React from "react";
import { MenuItems } from "./MenuItems";
import "./NewNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function NewNavbar() {
  const state = { clicked: false };

  function handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  return (
    <nav className="navBar_items">
      <h1 className="navBar_logo">B</h1>
      <div className="menuIcon" onClick={this.handleClick}>
        <i className={this.state.clicked ? <MenuIcon /> : <CloseIcon />}></i>
      </div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.name} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NewNavbar;

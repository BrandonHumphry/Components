import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NewNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

class NewNavbar extends Component {
  state = { open: false };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <nav className="navBar_items">
        <h1 className="navBar_logo">
          <i className="fab fa-react"></i>
        </h1>

        <div className="menuIcon" onClick={this.handleClick}>
          <i
            className={
              this.state.open ? "fas fa-times" : "fas fa-bars"
              //   <CloseIcon /> : <MenuIcon />
            }
          ></i>
        </div>
        <ul className={this.state.open ? "navMenu_active" : "navMenu"}>
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
}
export default NewNavbar;

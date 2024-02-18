import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems, MenuLogo } from "./MenuItems";
import elkamLogo from "../../src/assets/elkam-logo-czarne-1.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo">
          {MenuLogo.map((item) => {
            return (
              <Link to={item.url}>
                <img src={elkamLogo} alt={item.alt} />{" "}
              </Link>
            );
          })}
        </div>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
            {" "}
          </i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {" "}
                  {item.title}{" "}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

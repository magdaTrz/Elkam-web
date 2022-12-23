import {Component} from "react";
import {Link} from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
// import {ElkamLogo} from "./public/img/logo/elkam-logo.png";

class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo" src="./img/logo/elkam-logo.png">Elkam</h1>
                
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}> </i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}> {item.title} </Link>
                        </li> 
                    )
                })}
                    
                </ul>
            </nav>
        )
    }
}

export default Navbar;
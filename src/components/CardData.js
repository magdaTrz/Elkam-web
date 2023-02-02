import { Component } from "react";
import "./CardStyles.css";

class CardData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.arg1}</p>
          <p>{this.props.arg2}</p>
        </div>
        <div className="image">
          <img alt="zdjecie1" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default CardData;

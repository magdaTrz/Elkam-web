import { Component} from "react"
import "./CardStyles.css";

import img1 from "../../src/assets/8montazpanelifotowol/panele1.jpg";
import img2 from "../../src/assets/7przylacza/przylacza2.jpg";

class CardData extends Component {
    render() {
        return (
            <div className="first-des">
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text</p>

                </div>
                <div className="image">
                    <img alt="zdjecie1" src={img1} />
                    <img alt="zdjecie2" src={img2} />
                </div>
            </div>
        )
    };
}

export default CardData;
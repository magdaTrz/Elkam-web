import "./ServiceOneStyles.css";
import ServiceBar from "./ServiceBar";

function ServiceOne(props) {
  return (
    <>
      <div className="fullService"></div>
      <ServiceBar />
      <div className="serviceOCard">
        <div className="serviceCard-text">
          <h1>{props.title}</h1>
          <li>{props.p1}</li>
          <li>{props.p2}</li>
          <li>{props.p3}</li>
          <p>{props.text1}</p>
          <p>{props.text2}</p>
          <p>{props.text3}</p>
          <h5>{props.p4}</h5>
          <h5>{props.p5}</h5>
          <h5>{props.p6}</h5>
          <h5>{props.p7}</h5>
          <h5>{props.p8}</h5>
          <p>{props.text4}</p>
        </div>
        <div className="imageServiceCard">
          <img alt="" src={props.serviceImg1} />
          <img alt="" src={props.serviceImg2} />
        </div>
      </div>
    </>
  );
}

export default ServiceOne;

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
          {props.serviceImg1 && <img alt="" src={props.serviceImg1} />}
          {props.serviceImg2 && <img alt="" src={props.serviceImg2} />}
          {props.serviceImg3 && <img alt="" src={props.serviceImg3} />}
          {props.serviceImg4 && <img alt="" src={props.serviceImg4} />}
          {props.serviceImg5 && <img alt="" src={props.serviceImg5} />}
          {props.serviceImg6 && <img alt="" src={props.serviceImg6} />}
        </div>
      </div>
    </>
  );
}

export default ServiceOne;

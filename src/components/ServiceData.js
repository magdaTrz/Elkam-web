import "./ServiceStyles.css";

function ServiceData(props) {
  return (
    <div className="s-card">
      <a href={props.url}>
        <div className="s-image">
          {/* <img alt={props.image} src={props.image} /> */}
        </div>
        <h4>{props.heading}</h4>
      </a>
    </div>
  );
}

export default ServiceData;

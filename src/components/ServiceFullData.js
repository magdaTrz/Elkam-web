import "./ServiceFullStyles.css";

function ServiceFullData(props) {
    return (
        <div className="f-card">
            <div className="f-image">
                <img alt="image" src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
            <p>{props.text7}</p>
            <p>{props.text8}</p>
            <p>{props.text9}</p>
        </div>
    )
}

export default ServiceFullData;
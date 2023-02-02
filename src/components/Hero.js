import "./HeroStyles.css";

function Hero(props) {
  const handleClickScroll = () => {
    const element = document.getElementById("section-service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className={props.cName}>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a
            href={props.url}
            className={props.btnClass}
            onClick={handleClickScroll}
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;

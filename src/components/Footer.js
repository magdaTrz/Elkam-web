import "./FooterStyles.css";
import elkamLogo from "../../src/assets/elkam-logo-czarne-1.png";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img className="footer-company-name" src={elkamLogo} alt="Logo" />
      </div>

      <div className="footer-center first-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> ul. Władysława Bełzy 9/40, </span> 15-110 Białystok
          </p>
        </div>

        <div>
          <i className="fa-solid fa-phone"></i>
          <p>
            <a href="tel:+48-601-825-483">+48-601-825-483</a>
          </p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:biuro@elkamelectric.pl">biuro@elkamelectric.pl</a>
          </p>
        </div>
      </div>

      <div className="footer-center second-center">
        <div className="nipAndRegon">
          <h5>NIP </h5>
          <p>291 02 06 751</p>
        </div>

        <div className="nipAndRegon regon">
          <h5>REGON </h5>
          <p>385082904</p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <Iframe
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.9797549815753!2d23.161061264858336!3d53.152184754139654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffb11c3514753%3A0x3a02945ee28ab47!2selektryk%20-%20ELKAM%20ELECTRIC!5e0!3m2!1sen!2spl!4v1671926179779!5m2!1sen!2spl"
            width="100%"
            height="260px"
            id=""
            className=""
            display="block"
            position="flex"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import "./FooterStyles.css";
import elkamLogo from  "../../src/assets/elkam-logo.png";
import Iframe from "react-iframe";


const Footer = () => {
    return(
        <div className="footer">
          <div className="bottom">
              <div>
              <img src={elkamLogo} alt="Logo"/>
              <h4>Kontakt</h4>
              <a href="/"><i class="fa-solid fa-location-dot"></i> ul. Władysława Bełzy 9/40,<p>15-110 Białystok</p> </a>
              <a href="/"><i class="fa-solid fa-phone"></i>+(48) 601 825 483</a>
              <a href="/"><i class="fa-solid fa-envelope"></i>biuro@elkamelectric.pl</a>
            </div>
              <div className="map">
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2011.9797549815753!2d23.161061264858336!3d53.152184754139654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffb11c3514753%3A0x3a02945ee28ab47!2selektryk%20-%20ELKAM%20ELECTRIC!5e0!3m2!1sen!2spl!4v1671926179779!5m2!1sen!2spl"
                    width="100%"
                    height="300px"
                    id=""
                    className=""
                    display="block"
                    position="flex"
                />
              </div>
          </div>  
        </div>
    )
};

export default Footer;
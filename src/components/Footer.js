import "./FooterStyles.css";
import elkamLogo from  "../../src/assets/elkam-logo.png";


const Footer = () => {
    return(
        <div className="footer">
          <div className="top">
            <img src={elkamLogo} alt="Logo"/>
          </div>
          <div>
            {/* <a href="https://">
                <i className="fa-brands fa-square-facebook"></i>
            </a> */}
          </div>

          <div className="bottom">
                <div>
                    <h4>Kontakt</h4>
                    <a href="/"><i class="fa-solid fa-location-dot"></i> ul. Władysława Bełzy 9/40,<p>15-110 Białystok</p> </a>
                    <a href="/"><i class="fa-solid fa-phone"></i>+(48) 601 825 483</a>
                    <a href="/"><i class="fa-solid fa-envelope"></i>biuro@elkamelectric.pl</a>
                </div>
          </div>  
        </div>
    )
};

export default Footer;
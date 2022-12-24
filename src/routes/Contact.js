import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import img from "../../src/assets/1montazinstalacjielektrycznej/2/1.jpg";

function Contact () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "Kontakt"
            btnClass = "hide"
        />
        <Footer/>
        </>
    );
}

export default Contact;
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import ServiceFull from "../components/ServiceFull.js";
import Footer from "../components/Footer.js"
import img from "../../src/assets/1montazinstalacjielektrycznej/1/3.jpg";

function Services () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "Zakres usług elektrycznych "
            btnClass = "hide"
        />
        <ServiceFull/>
        <Footer/>
        </>
    );
}

export default Services;
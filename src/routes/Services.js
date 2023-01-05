import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import Service from "../components/Service.js";
import Footer from "../components/Footer.js"

function Services () {
    window.scrollTo(0, 0);
    
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-sml"
            title = ""
            btnClass = "hide"
        />
        <Service/>
        <Footer/>
        </>
    );
}

export default Services;
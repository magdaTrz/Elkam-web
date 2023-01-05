import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";

function About () {
    window.scrollTo(0, 0);
    
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            title = ""
            btnClass = "hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
}

export default About;
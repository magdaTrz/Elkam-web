import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import img from "../../src/assets/about.jpg"

function About () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "O nas"
            btnClass = "hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    );
}

export default About;
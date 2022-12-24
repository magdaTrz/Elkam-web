import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import Footer from "../components/Footer.js";
import img from "../../src/assets/3montazosprzetuelektrycznego/3/d.jpg";


function Gallery () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "Zobacz nasze realizacje "
            btnClass = "hide"
        />
        <Footer/>
        </>
    );
}

export default Gallery;
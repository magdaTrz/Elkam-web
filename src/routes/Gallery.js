import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import GalleryG from "../components/GalleryG.js";
import Footer from "../components/Footer.js";
import img from "../../src/assets/3montazosprzetuelektrycznego/3/d.jpg";



function Gallery () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-sml"
            title = ""
            btnClass = "hide"
        />
        <GalleryG/>
        <Footer/>
        </>
    );
}

export default Gallery;
import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import GalleryG from "../components/GalleryG.js";
import Footer from "../components/Footer.js";

function Gallery () {
    window.scrollTo(0, 0);
    
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
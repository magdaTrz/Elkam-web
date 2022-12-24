import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import img from "../../src/assets/1montazinstalacjielektrycznej/1/3.jpg";

function Service () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "Zakres usług elektrycznych "
            btnClass = "hide"
        />
        </>
    );
}

export default Service;
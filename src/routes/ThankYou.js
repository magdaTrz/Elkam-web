import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"

import img from "../../src/assets/IMG1.jpg"

function ThankYou () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero"
            heroImg = {img}
            title = " Dziękujemy za wysłanie wiadomości! "
            text = ""
        />
        </>
    );
}

export default ThankYou;
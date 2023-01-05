import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"

import img from "../../src/assets/IMG1.jpg"

function ThankYou () {
    window.scrollTo(0, 0);
    
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero"
            heroImg = {img}
            title = " Dziękujemy za wysłanie wiadomości! "
            text = ""
            url = "/"
            buttonText = "Wróć na stronę główną"
            btnClass = "back"
        />
        </>
    );
}

export default ThankYou;
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"
import Card from "../components/Card.js"
import Service from "../components/Service.js"
import Footer from "../components/Footer.js";

import img from "../../src/assets/1.jpg"

function Home () {
    return (
        <>
        <Navbar/>
        <Hero
            cName = "hero"
            heroImg = {img}
            title = "Zajmujemy się kompleksową realizacją różnorodnych usług elektrycznych"
            text = ""
            url = "/"
            buttonText = "Poznaj ofertę"
            btnClass = "show"
        />
        <Card/>
        <Service/>
        <Footer/>
        </>
    );
}

export default Home;
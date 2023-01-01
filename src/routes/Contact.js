import Navbar from "../components/Navbar.js"
import Hero from "../components/Hero.js";
import ContactForm from "../components/ContactForm.js";
import Footer from "../components/Footer.js";


function Contact () {
    return (
        <>
        <Navbar/>
        {/* <Hero
            cName = "hero-mid"
            heroImg = {img}
            title = "Kontakt"
            btnClass = "hide"
        /> */}
        <ContactForm/>
        <Footer/>
        </>
    );
}

export default Contact;
import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/2montazinstalacjiodromowej/4.jpg";
import img2 from "../../../src/assets/2montazinstalacjiodromowej/2.jpg";

function InstalacjeOdgromowe() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Montaż instalacji odgromowych "
            p1 = "Budujesz dom i zastanawiasz się czy warto inwestować w instalację odgromową? "
            p2 = "Odpowiedź brzmi: zdecydowanie TAK."
            text1 = "Instalacja odgromowa chroni budynek przed skutkami uszkodzeń wyładowań atmosferycznych, odprowadzając energię do ziemi jak najkrótszą drogą. Dzięki czemu zapewniamy bezpieczeństwo sobie i bliskim."
            text2 = "Dlatego własnego spokoju warto więc dokładnie przeanalizować wykonanie instalacji odgromowej już na etapie wykonywania ław fundamentowych."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default InstalacjeOdgromowe;
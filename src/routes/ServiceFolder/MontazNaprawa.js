import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/1montazinstalacjielektrycznej/2/2.jpg";
import img2 from "../../../src/assets/1montazinstalacjielektrycznej/2/1.jpg";

function MontazNaprawa() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Montaż i naprawa instalacji elektrycznych "
            p1 = "Gaśnie światło i nie wiesz co robić?"
            p2 = "Pojawiła się nieoczekiwana usterka gniazdka?"
            p3 = "A może dopiero wprowadzasz się do nowego domu i potrzebujesz zamontować oświetlenie ?"
            text1 = "ELKAM ELECTRIC oferuje wszelkie usługi związane z naprawą, konserwacją, modernizacją oraz montażem instalacji elektrycznych."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default MontazNaprawa;
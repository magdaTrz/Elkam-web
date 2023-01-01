import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/8montazpanelifotowol/panele1.jpg";
import img2 from "../../../src/assets/8montazpanelifotowol/panele2.jpg";

function PaneleFoto() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Montaż paneli fotowoltaicznych "
            text1 = "Odnawialne źródła energii stają się coraz popularniejszym rozwiązaniem w naszym społeczeństwie. Jednym z alternatywnych źródeł energii są instalacje fotowoltaiczne, produkujące prąd z energii słonecznej. Dzięki takiemu rozwiązaniu możemy chronić planetę oraz znacząco ograniczyć koszty energii elektrycznej."
            text2 = "Dla każdego klienta indywidualnie przygotowujemy wycenę instalacji fotowoltaicznej w zależności od potrzeb. Doradzamy jaką instalację wybrać, aby zyskać na tym rozwiązaniu jak najwięcej. Panele montujemy na dachu lub na gruncie. Ponadto pomagamy w uzupełnieniu niezbędnej dokumentacji oraz w uzyskaniu dostępnych dofinansowań."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default PaneleFoto;
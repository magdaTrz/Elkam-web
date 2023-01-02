import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/uslugi/air-conditioning.jpg";
import img2 from "../../../src/assets/uslugi/plytaindukcyjna.jpg";

function PodlaczanieAgd() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Podłączanie sprzętu AGD"
            p1 = "Kupiłeś nową pralkę, suszarkę, płytę indukcyjną, lodówkę lub inny sprzęt AGD pod zabudowę? "
            p2 = "Nie wiesz jak go zamontować? "
            text1 = "Większość producentów wymaga podłączenia sprzętu przez profesjonalną firmę. Szczególnie w przypadku płyt indukcyjnych jest to konieczne, aby zachować gwarancję producenta. W ramach świadczonej usługi montujemy sprzęt, podbijamy gwarancję i przeprowadzamy testowe uruchomienie sprzętu. Ty nie musisz się już niczym martwić."
        />
        <Footer/>
        </>
    )
}

export default PodlaczanieAgd;
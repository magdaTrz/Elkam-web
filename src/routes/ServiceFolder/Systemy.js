import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"

function Systemy() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Systemy bezpieczeństwa "
            text1 = "Posiadamy doświadczenie w montażu alarmów i monitoringu, które zdobyliśmy instalując systemy zabezpieczeń dla domów i firm w województwie podlaskim. "
            p1 = "Zapewnij sobie kompleksową ochronę przed wtargnięciem osób trzecich oraz przez zagrożeniami takimi jak dym, gaz czy zalanie wodą. "
        />
        <Footer/>
        </>
    )
}

export default Systemy;
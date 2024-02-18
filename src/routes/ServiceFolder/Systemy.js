import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import ServiceOne from "../../components/ServiceOne.js";
import img1 from "../../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-1.webp";
import img2 from "../../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-2.webp";
import img3 from "../../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-3.webp";
import img4 from "../../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-4.webp";

function Systemy() {
  return (
    <>
      <Navbar />
      <ServiceOne
        title="Systemy zabezpieczeń "
        text1="Posiadamy doświadczenie w montażu alarmów i monitoringu, które zdobyliśmy podczas szkoleń oraz instalując systemy zabezpieczeń w różnych obiektach."
        p1="Zapewnij sobie kompleksową ochronę przed wtargnięciem osób trzecich oraz przez zagrożeniami takimi jak dym, gaz czy zalanie wodą."
        serviceImg1={img1}
        serviceImg2={img2}
        serviceImg3={img3}
        serviceImg4={img4}
      />
      <Footer />
    </>
  );
}

export default Systemy;

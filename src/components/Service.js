import "./ServiceStyles.css";
import ServiceData from "./ServiceData";

import img1 from "../../src/assets/uslugi/rozdzielnica.jpg";    //Montaż i naprawa instalacji elektrycznych
import img2 from "../../src/assets/uslugi/protokol.jpg";        //Pomiary instalacji elektrycznych
import img3 from "../../src/assets/uslugi/uziemnienie.jpg";         //Montaż instalacji odgromowych
import img4 from "../../src/assets/uslugi/gniazdko.jpg";            //Montaż osprzętu elektrycznego
import img5 from "../../src/assets/uslugi/kamera.jpg";            //Systemy bezpieczeństwa
import img6 from "../../src/assets/6ukladaniekabli/kable3.jpg";        //Układanie kabli energetycznych w ziemi
import img7 from "../../src/assets/uslugi/kable.jpg";        //Przyłącza energetyczne
import img8 from "../../src/assets/uslugi/solar.jpg";               //Montaż paneli fotowoltaicznych
import img9 from "../../src/assets/uslugi/plytaindukcyjna.jpg";     //Podłączanie sprzętu AGD

function Service(props) {
    return (
        <div className="service">
            <h1>Zakres usług Elektrycznych</h1>
            <p className="service-para">Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!</p>
            <div className="servicecard">
            
                <ServiceData
                    url="/MontazNaprawa"
                    image={img1}
                    heading="Montaż i naprawa instalacji elektrycznych"
                />

                <ServiceData
                    url="/PomiaryInstalacji"
                    image={img2}
                    heading="Pomiary instalacji elektrycznych "
                />

                <ServiceData
                    url = "/InstalacjeOdgromowe"
                    image={img3}
                    heading="Montaż instalacji odgromowych"
                />
            </div>
            <div className="servicecard">
                <ServiceData
                    url = "/OsprzetElektryczny"
                    image={img4}
                    heading="Montaż osprzętu elektrycznego"
                />
                
                <ServiceData
                    url = "/Systemy"
                    image={img5}
                    heading="Systemy bezpieczeństwa"
                />
                
                <ServiceData
                    url = "/UkladanieKabli"
                    image={img6}
                    heading="Układanie kabli energetycznych w ziemi"
                />
            </div>
            <div className="servicecard">
                <ServiceData
                    url = "/PrzylaczaEnergetyczne"
                    image={img7}
                    heading="Przyłącza energetyczne"
                />
                
                <ServiceData
                    url = "/PaneleFoto"
                    image={img8}
                    heading="Montaż paneli fotowoltaicznych"
                />
                
                <ServiceData
                    url = "/PodlaczanieAgd"
                    image={img9}
                    heading="Podłączanie sprzętu AGD"
                />
            </div>
        </div>
    );
}

export default Service;
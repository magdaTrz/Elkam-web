import "./ServiceStyles.css";
import ServiceData from "./ServiceData";

// import img1 from "../../src/assets/uslugi/rozdzielnica.webp"; //Montaż i naprawa instalacji elektrycznych
// import img2 from "../../src/assets/uslugi/protokol.webp"; //Pomiary instalacji elektrycznych
// import img3 from "../../src/assets/uslugi/uziemnienie.webp"; //Montaż instalacji odgromowych
// import img4 from "../../src/assets/uslugi/gniazdko.webp"; //Montaż osprzętu elektrycznego
// import img5 from "../../src/assets/uslugi/kamera.webp"; //Systemy bezpieczeństwa
// import img6 from "../../src/assets/6ukladaniekabli/kable3.webp"; //Układanie kabli energetycznych w ziemi
// import img7 from "../../src/assets/uslugi/kable.webp"; //Przyłącza energetyczne
// import img8 from "../../src/assets/uslugi/solar.webp"; //Montaż paneli fotowoltaicznych
// import img9 from "../../src/assets/uslugi/plytaindukcyjna.webp"; //Podłączanie sprzętu AGD

function Service(props) {
  return (
    <div className="service">
      <h1>Zakres usług Elektrycznych</h1>
      <p className="service-para">
        Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!
      </p>
      <div className="servicecard">
        <ServiceData
          url="/UkladanieKabli"
          // image={img6}
          heading="Wykonywanie tras kablowych"
        />

        <ServiceData
          url="/PrzylaczaEnergetyczne"
          // image={img7}
          heading="Przyłącza energetyczne"
        />

        <ServiceData
          url="/Systemy"
          // image={img5}
          heading="Systemy zabezpieczeń"
        />
      </div>

      <div className="servicecard">
        <ServiceData
          url="/OsprzetElektryczny"
          // image={}
          heading="Prefabrykacja rozdzielnic"
        />

        <ServiceData
          url="/MontazNaprawa"
          // image={img1}
          heading="Montaż i naprawa instalacji elektrycznych"
        />

        <ServiceData
          url="/PomiaryInstalacji"
          // image={img2}
          heading="Pomiary instalacji elektrycznych "
        />
      </div>

      <div className="servicecard">
        <ServiceData
          url="/InstalacjeOdgromowe"
          // image={img3}
          heading="Montaż instalacji odgromowych"
        />

        <ServiceData
          url="/PaneleFoto"
          // image={img8}
          heading="Montaż odnawialnych źródeł energii"
        />

        <ServiceData
          url="/PodlaczanieAgd"
          // image={img9}
          heading="Systemy automatyki"
        />
      </div>
    </div>
  );
}

export default Service;

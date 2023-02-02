import "./ServiceBarStyles.css";

import { Link } from "react-router-dom";

function ServiceBar() {
  let services = [
    {
      url: "/MontazNaprawa",
      title: "Montaż i naprawa instalacji elektrycznych",
    },
    { url: "/PomiaryInstalacji", title: "Pomiary instalacji elektrycznych" },
    { url: "/InstalacjeOdgromowe", title: "Montaż instalacji odgromowych" },
    { url: "/OsprzetElektryczny", title: "Montaż osprzętu elektrycznego" },
    { url: "/Systemy", title: "Systemy bezpieczeństwa" },
    { url: "/UkladanieKabli", title: "Układanie kabli energetycznych w ziemi" },
    { url: "/PrzylaczaEnergetyczne", title: "Przyłącza energetyczne" },
    { url: "/PaneleFoto", title: "Montaż paneli fotowoltaicznych" },
    { url: "/PodlaczanieAgd", title: "Podłączanie sprzętu AGD" },
  ];

  return (
    <div className="service-bar">
      {services.map((item, index) => {
        return (
          <li className="service-link" key={index}>
            <Link className="service-link-text" to={item.url}>
              {" "}
              {item.title}{" "}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default ServiceBar;

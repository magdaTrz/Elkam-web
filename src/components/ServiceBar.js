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
    { url: "/OsprzetElektryczny", title: "Prefabrykacja rozdzielnic" },
    { url: "/Systemy", title: "Systemy zabezpieczeń" },
    { url: "/UkladanieKabli", title: "Wykonywanie tras kablowych" },
    { url: "/PrzylaczaEnergetyczne", title: "Przyłącza energetyczne" },
    { url: "/PaneleFoto", title: "Montaż odnawialnych źródeł energii" },
    { url: "/PodlaczanieAgd", title: "Systemy automatyki" },
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

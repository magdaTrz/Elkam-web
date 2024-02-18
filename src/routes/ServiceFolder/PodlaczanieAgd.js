import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import ServiceOne from "../../components/ServiceOne.js";

function PodlaczanieAgd() {
  return (
    <>
      <Navbar />
      <ServiceOne
        title="Systemy automatyki"
        text1="Systemy automatyki mają na celu zapewnienie ciągłości i bezpieczeństwa podczas wykonywania procesu produkcyjnego. "
        text2="W przypadku indywidualnych klientów jesteśmy w stanie dostosować się do potrzeb użytkownika, wykonując instalację, dzięki której można zdalnie zarządzać całym budynkiem. Między innymi: zdalne sterowanie klimatyzacją, ogrzewaniem, oświetleniem, powiadomienia telefoniczne wejścia lub wyjścia z obiektu. "
      />
      <Footer />
    </>
  );
}

export default PodlaczanieAgd;

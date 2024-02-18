import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import ServiceOne from "../../components/ServiceOne.js";

function OsprzetElektryczny() {
  return (
    <>
      <Navbar />
      <ServiceOne
        title="Prefabrykacja rozdzielnic "
        text1="Na podstawie wykonanej dokumentacji budujemy wszelkiego typu rozdzielnice."
      />
      <Footer />
    </>
  );
}

export default OsprzetElektryczny;

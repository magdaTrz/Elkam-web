import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Card from "../components/Card.js";
import Footer from "../components/Footer.js";

function Home() {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Zajmujemy się kompleksową realizacją usług elektrycznych"
        text=""
        url="/services"
        buttonText="Poznaj ofertę"
        btnClass="show"
      />
      <Card />
      <Footer />
    </>
  );
}

export default Home;

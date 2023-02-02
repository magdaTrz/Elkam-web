import Navbar from "../components/Navbar.js";
import ContactForm from "../components/ContactForm.js";
import Footer from "../components/Footer.js";

function Contact() {
  window.scrollTo(0, 0);

  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;

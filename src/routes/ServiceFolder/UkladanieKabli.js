import Navbar from "../../components/Navbar.js";
import Footer from "../../components/Footer.js";
import ServiceOne from "../../components/ServiceOne.js";
import img1 from "../../../src/assets/6ukladaniekabli/kable1.webp";
import img2 from "../../../src/assets/6ukladaniekabli/kable4.webp";
import img3 from "../../../src/assets/6ukladaniekabli/trasy-kablowe1.webp";
import img4 from "../../../src/assets/6ukladaniekabli/trasy-kablowe2.webp";
import img5 from "../../../src/assets/6ukladaniekabli/trasy-kablowe3.webp";
import img6 from "../../../src/assets/6ukladaniekabli/trasy-kablowe4.webp";

function UkladanieKabli() {
  return (
    <>
      <Navbar />
      <ServiceOne
        title="Wykonywanie tras kablowych "
        text1="Prąd można doprowadzać do wskazanych obszarów zarówno liniami napowietrznymi, jak linią kablową, ułożoną w ziemi. Zaopatruje ona w energię elektryczną obiekty."
        text2="Nasza oferta obejmuje układanie kabli według wytycznych zgodnie z projektem."
        text3="Jeśli grunt, w którym mają zostać położone kable, jest niejednolity, wówczas wykonujemy także na dnie wykopu podsypkę piasku o grubości co najmniej 10 cm. Kable elektroenergetyczne są izolowane i chronione przez specjalną powłokę, a w szczególnych warunkach eksploatacji również w osłonę ochronną i pancerz, który zapobiega uszkodzeniom mechanicznym."
        serviceImg1={img1}
        serviceImg2={img2}
        serviceImg3={img3}
        serviceImg4={img4}
        serviceImg5={img5}
        serviceImg6={img6}
      />
      <Footer />
    </>
  );
}

export default UkladanieKabli;

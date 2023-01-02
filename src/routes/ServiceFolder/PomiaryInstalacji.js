import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"

import img1 from "../../../src/assets/4pomiaryinstalacji/pomiary.jpg";
import img2 from "../../../src/assets/uslugi/protokol.jpg";

function PomiaryInstalacji() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Pomiary instalacji elektrycznych"
            text1 = "Zgodnie z Prawem Budowlanym użytkowanie instalacji elektrycznych związane jest z wykonywaniem przeglądów okresowych, które powinny być przeprowadzenie, w zależności od przeznaczenia budynku, ale nie rzadziej niż co pięć lat. "
            text2 = "Ponadto by odebrać budynek do użytkowania należy przeprowadzić badania odbiorcze oraz sporządzić niezbędną dokumentację. Kluczową rolę odgrywa w tym przypadku jednak przede wszystkim zapewnienie bezpieczeństwa mieszkańcom."
            text3 = "W zakres przeglądu instalacji wchodzi między innymi:"
            p4 = "- pomiar rezystancji izolacji"
            p5 = "- pomiar impedancji pętli zwarcia"
            p6 = "- pomiar rezystancji uziemienia"
            p7 = "- pomiar wyłączników różnicowo-prądowych"
            p8 = "- pomiar instalacji odgromowej"
            text4 = "Po zakończonej pracy sporządzany jest protokół z przeglądu instalacji elektrycznej."

            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default PomiaryInstalacji;
import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/6ukladaniekabli/kable1.jpg";
import img2 from "../../../src/assets/6ukladaniekabli/kable4.jpg";

function UkladanieKabli() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Układanie kabli energetycznych w ziemi "
            text1 = "Prąd można doprowadzać do wskazanych obszarów zarówno liniami napowietrznymi, jak linią kablową, ułożoną w ziemi. Linia kablowa w ziemi może być stosowana zarówno dla prądu stałego, jak i przemiennego. Zaopatruje ona w energię przede wszystkim tereny gęsto zabudowane i mocno uprzemysłowione. "
            text2 = "Nasza oferta obejmuje układanie kablii według wytycznych zleconych przez geodetę."
            text3 = "Jeśli grunt, w którym mają zostać położone kable, jest niejednolity, wówczas wykonujemy także na dnie wykopu podsypkę piasku o grubości co najmniej 10 cm. Kable elektroenergetyczne są izolowane i chronione przez specjalną powłokę, a w szczególnych warunkach eksploatacji również w osłonę ochronną i pancerz, który zapobiega uszkodzeniom mechanicznym."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default UkladanieKabli;
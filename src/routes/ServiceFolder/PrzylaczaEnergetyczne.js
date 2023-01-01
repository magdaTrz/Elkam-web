import Navbar from "../../components/Navbar.js"
import Footer from "../../components/Footer.js"
import ServiceOne from "../../components/ServiceOne.js"
import img1 from "../../../src/assets/7przylacza/przylacza2.jpg";
import img2 from "../../../src/assets/7przylacza/przylacza1.jpg";

function PrzylaczaEnergetyczne() {
    return (
        <>
        <Navbar/>
        <ServiceOne
            title = "Przyłącza energetyczne"
            text1 = "Budując dom, koniecznie musisz zadbać o zapewnienie działce odpowiedniego przyłącza energetycznego. Jest to odcinek sieci zasilającej, łączącej linię elektroenergetyczną z instalacją elektryczną w budynku."
            text2 = "Aby wykonać takie przyłącze, niezbędne jest złożenie wniosku do najbliższego zakładu energetycznego o wydanie warunków przyłączenia domu do sieci. Po złożeniu dokumentów, warunki powinny być wydane w terminie 14 dni. Dopiero wtedy możemy przystąpić do wykonywania przyłącza."
            text3 = "Nasza usługa obejmuje zarówno wykonawstwo, jak i pomoc w uzupełnieniu odpowiedniej dokumentacji."
            serviceImg1 = {img1}
            serviceImg2 = {img2}
        />
        <Footer/>
        </>
    )
}

export default PrzylaczaEnergetyczne;
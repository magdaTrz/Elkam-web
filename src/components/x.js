import "./ServiceFullStyles.css";
import ServiceFullData from "./xData"

import img1 from "../../src/assets/uslugi/rozdzielnica.jpg";    //Montaż i naprawa instalacji elektrycznych
import img2 from "../../src/assets/uslugi/protokol.jpg";        //Pomiary instalacji elektrycznych
import img3 from "../../src/assets/uslugi/uziemnienie.jpg";         //Montaż instalacji odgromowych
import img4 from "../../src/assets/uslugi/gniazdko.jpg";            //Montaż osprzętu elektrycznego
import img5 from "../../src/assets/uslugi/kamera.jpg";            //Systemy bezpieczeństwa
import img6 from "../../src/assets/uslugi/przylacze-1.jpg";         //Układanie kabli energetycznych w ziemi
import img7 from "../../src/assets/uslugi/kable.jpg";        //Przyłącza energetyczne
import img8 from "../../src/assets/uslugi/solar.jpg";               //Montaż paneli fotowoltaicznych
import img9 from "../../src/assets/uslugi/plytaindukcyjna.jpg";     //Podłączanie sprzętu AGD
function ServiceFull() {
    return (
        <div className="servicefull">
            <h1>Zakres usług Elektrycznych</h1>
            <p className="service-para">Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!</p>
            <div className="servicefullcard">
            
                <ServiceFullData
                    image={img1}
                    heading="Montaż i naprawa instalacji elektrycznych"
                    text1="Gaśnie światło i nie wiesz co robić?"
                    text2="Pojawiła się nieoczekiwana usterka gniazdka?"
                    text3="A może dopiero wprowadzasz się do nowego domu i potrzebujesz zamontować oświetlenie?"
                    text4="ELKAM ELECTRIC oferuje wszelkie usługi związane z naprawą, konserwacją, modernizacją oraz montażem instalacji elektrycznych."
                />
               
               <ServiceFullData
                    image={img2}
                    heading="Pomiary instalacji elektrycznych "
                    text1="Zgodnie z Prawem Budowlanym użytkowanie instalacji elektrycznych związane jest z wykonywaniem przeglądów okresowych, które powinny być przeprowadzenie, w zależności od przeznaczenia budynku, ale nie rzadziej niż co pięć lat.
                            Ponadto by odebrać budynek do użytkowania należy przeprowadzić badania odbiorcze oraz sporządzić niezbędną dokumentację. 
                            Kluczową rolę odgrywa w tym przypadku jednak przede wszystkim zapewnienie bezpieczeństwa mieszkańcom."
                    text3="W zakres przeglądu instalacji wchodzi między innymi:"
                    text4="- Pomiar rezystancji izolacji"
                    text5="– Pomiar impedancji pętli zwarcia"
                    text6="– Pomiar rezystancji uziemienia"
                    text7="– Pomiar wyłączników różnicowo-prądowych"
                    text8="– Pomiar instalacji odgromowej"
                    text9="Po zakończonej pracy sporządzany jest protokół z przeglądu instalacji elektrycznej."
                />

                <ServiceFullData
                    image={img3}
                    heading="Montaż instalacji odgromowych"
                    text1="Budujesz dom i zastanawiasz się czy warto inwestować w instalację odgromową?"
                     
                    text2="Odpowiedź brzmi: zdecydowanie TAK."
                    text3="Instalacja odgromowa chroni budynek przed skutkami uszkodzeń wyładowań atmosferycznych, odprowadzając energię do ziemi jak najkrótszą drogą. 
                    Dzięki czemu zapewniamy bezpieczeństwo sobie i bliskim.
                    Dlatego własnego spokoju warto więc dokładnie przeanalizować wykonanie instalacji odgromowej już na etapie wykonywania ław fundamentowych."
                />

                <ServiceFullData
                    image={img4}
                    heading="Montaż osprzętu elektrycznego"
                    text1="Wykonujemy kompleksowy montaż osprzętu elektrycznego: gniazdek, włączników oraz instalacji oświetleniowych zarówno wewnętrznych, 
                        jak i zewnętrznych. W naszej pracy liczy się przede wszystkim dokładność oraz precyzja wykonania zlecenia."
                    text2="Realizujemy zlecenia zgodnie z projektami wnętrzarskimi oraz z zaleceniami klienta
                    Pracujemy na materiałach powierzonych od klienta, jak również na materiałach dostarczanych przez naszą firmę."
                />

                <ServiceFullData
                    image={img5}
                    heading="Systemy bezpieczeństwa"
                    text1="Posiadamy doświadczenie w montażu alarmów i monitoringu, które zdobyliśmy instalując systemy zabezpieczeń dla domów i firm w województwie podlaskim. "
                    text2="Zapewnij sobie kompleksową ochronę przed wtargnięciem osób trzecich oraz przez zagrożeniami takimi jak dym, gaz czy zalanie wodą."
                />

                <ServiceFullData
                    image={img6}
                    heading="Układanie kabli energetycznych w ziemi"
                    text1="Prąd można doprowadzać do wskazanych obszarów zarówno liniami napowietrznymi, jak linią kablową, ułożoną w ziemi. 
                    Linia kablowa w ziemi może być stosowana zarówno dla prądu stałego, jak i przemiennego. 
                    Zaopatruje ona w energię przede wszystkim tereny gęsto zabudowane i mocno uprzemysłowione. 
                    Nasza oferta obejmuje układanie kablii według wytycznych zleconych przez geodetę."
                    text2="Jeśli grunt, w którym mają zostać położone kable, jest niejednolity, wówczas wykonujemy także na dnie wykopu podsypkę piasku o grubości co najmniej 10 cm. 
                    Kable elektroenergetyczne są izolowane i chronione przez specjalną powłokę, a w szczególnych warunkach eksploatacji również w osłonę ochronną i pancerz, 
                    który zapobiega uszkodzeniom mechanicznym."
                />

                <ServiceFullData
                    image={img7}
                    heading="Przyłącza energetyczne"
                    text1="Budując dom, koniecznie musisz zadbać o zapewnienie działce odpowiedniego przyłącza energetycznego. 
                    Jest to odcinek sieci zasilającej, łączącej linię elektroenergetyczną z instalacją elektryczną w budynku."
                    text2="Aby wykonać takie przyłącze, niezbędne jest złożenie wniosku do najbliższego zakładu energetycznego o wydanie warunków przyłączenia domu do sieci. 
                    Po złożeniu dokumentów, warunki powinny być wydane w terminie 14 dni. Dopiero wtedy możemy przystąpić do wykonywania przyłącza."
                    text3="Nasza usługa obejmuje zarówno wykonawstwo, jak i pomoc w uzupełnieniu odpowiedniej dokumentacji."
                />

                <ServiceFullData
                    image={img8}
                    heading="Montaż paneli fotowoltaicznych"
                    text1="Odnawialne źródła energii stają się coraz popularniejszym rozwiązaniem w naszym społeczeństwie. 
                    Jednym z alternatywnych źródeł energii są instalacje fotowoltaiczne, produkujące prąd z energii słonecznej. 
                    Dzięki takiemu rozwiązaniu możemy chronić planetę oraz znacząco ograniczyć koszty energii elektrycznej."
                    text2="Dla każdego klienta indywidualnie przygotowujemy wycenę instalacji fotowoltaicznej w zależności od potrzeb. 
                    Doradzamy jaką instalację wybrać, aby zyskać na tym rozwiązaniu jak najwięcej. Panele montujemy na dachu lub na gruncie. 
                    Ponadto pomagamy w uzupełnieniu niezbędnej dokumentacji oraz w uzyskaniu dostępnych dofinansowań."
                />

                <ServiceFullData
                    image={img9}
                    heading="Podłączanie sprzętu AGD"
                    text1="Kupiłeś nową pralkę, suszarkę, płytę indukcyjną, lodówkę lub inny sprzęt AGD pod zabudowę? "
                    text2="Nie wiesz jak go zamontować? "
                    text3="Większość producentów wymaga podłączenia sprzętu przez profesjonalną firmę. "
                    text4="Szczególnie w przypadku płyt indukcyjnych jest to konieczne, aby zachować gwarancję producenta. 
                    W ramach świadczonej usługi montujemy sprzęt, podbijamy gwarancję i przeprowadzamy testowe uruchomienie sprzętu. 
                    Ty nie musisz się już niczym martwić."
                />
            </div>
        </div>
    );
}

export default ServiceFull;
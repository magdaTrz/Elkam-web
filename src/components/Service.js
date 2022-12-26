import "./ServiceStyles.css";
import ServiceData from "./ServiceData";

import img1 from "../../src/assets/uslugi/rozdzielnica.jpg";    //Montaż i naprawa instalacji elektrycznych
import img2 from "../../src/assets/uslugi/protokol.jpg";        //Pomiary instalacji elektrycznych
import img3 from "../../src/assets/uslugi/uziemnienie.jpg";         //Montaż instalacji odgromowych
import img4 from "../../src/assets/uslugi/gniazdko.jpg";            //Montaż osprzętu elektrycznego
import img5 from "../../src/assets/uslugi/kamera.jpg";            //Systemy bezpieczeństwa
import img6 from "../../src/assets/uslugi/przylacze-1.jpg";         //Układanie kabli energetycznych w ziemi
import img7 from "../../src/assets/uslugi/kable.jpg";        //Przyłącza energetyczne
import img8 from "../../src/assets/uslugi/solar.jpg";               //Montaż paneli fotowoltaicznych
import img9 from "../../src/assets/uslugi/plytaindukcyjna.jpg";     //Podłączanie sprzętu AGD

function Service() {
    return (
        <div className="service">
            <h1>Zakres usług Elektrycznych</h1>
            <p className="service-para">Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!</p>
            <div className="servicecard">
            
                <ServiceData
                    url="/services"
                    image={img1}
                    heading="Montaż i naprawa instalacji elektrycznych"
                    text="Elkam Electric oferuje wszelkie usługi związane z naprawą, konserwacją, modernizacją oraz montażem instalacji elektrycznych. "
                />

                <ServiceData
                    image={img2}
                    heading="Pomiary instalacji elektrycznych "
                    text="Zgodnie z Prawem Budowlanym użytkowanie instalacji elektrycznych związane jest z wykonywaniem przeglądów okresowych, 
                    które powinny być przeprowadzenie, w zależności od przeznaczenia budynku, ale nie rzadziej niż co pięć lat. "
                />

                <ServiceData
                    image={img3}
                    heading="Montaż instalacji odgromowych"
                    text="Budujesz dom i zastanawiasz się czy warto inwestować w instalację odgromową? Odpowiedź brzmi: zdecydowanie TAK. 
                    Dzięki czemu zapewniamy bezpieczeństwo sobie i bliskim. "
                />
            </div>
            <div className="servicecard">
                <ServiceData
                    image={img4}
                    heading="Montaż osprzętu elektrycznego"
                    text="Wykonujemy kompleksowy montaż osprzętu elektrycznego: gniazdek, włączników oraz instalacji oświetleniowych zarówno wewnętrznych, jak i zewnętrznych. 
                    Realizujemy zlecenia zgodnie z projektami wnętrzarskimi oraz z zaleceniami klienta."
                />
                
                <ServiceData
                    image={img5}
                    heading="Systemy bezpieczeństwa"
                    text="Zapewnij sobie kompleksową ochronę przed wtargnięciem osób trzecich oraz przez zagrożeniami takimi jak dym, gaz czy zalanie wodą."
                />
                
                <ServiceData
                    image={img6}
                    heading="Układanie kabli energetycznych w ziemi"
                    text="Nasza oferta obejmuje układanie kablii według wytycznych zleconych przez geodetę."
                />
            </div>
            <div className="servicecard">
                <ServiceData
                    image={img7}
                    heading="Przyłącza energetyczne"
                    text="Budując dom, koniecznie musisz zadbać o zapewnienie działce odpowiedniego przyłącza energetycznego. 
                    Nasza usługa obejmuje zarówno wykonawstwo, jak i pomoc w uzupełnieniu odpowiedniej dokumentacji."
                />
                
                <ServiceData
                    image={img8}
                    heading="Montaż paneli fotowoltaicznych"
                    text="Dla każdego klienta indywidualnie przygotowujemy wycenę instalacji fotowoltaicznej w zależności od potrzeb. 
                    Doradzamy jaką instalację wybrać, aby zyskać na tym rozwiązaniu jak najwięcej. 
                    Ponadto pomagamy w uzupełnieniu niezbędnej dokumentacji oraz w uzyskaniu dostępnych dofinansowań."
                />
                
                <ServiceData
                    image={img9}
                    heading="Podłączanie sprzętu AGD"
                    text="Kupiłeś nową pralkę, suszarkę, płytę indukcyjną, lodówkę lub inny sprzęt AGD pod zabudowę? Nie wiesz jak go zamontować?
                    W ramach świadczonej usługi montujemy sprzęt, podbijamy gwarancję i przeprowadzamy testowe uruchomienie sprzętu."
                />
            </div>
        </div>
    );
}

export default Service;
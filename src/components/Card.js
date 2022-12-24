import elkamLogo from  "../../src/assets/elkam-logo.png";
import img1 from "../../src/assets/8montazpanelifotowol/panele1.jpg";
import img2 from "../../src/assets/7przylacza/przylacza2.jpg";

import CardData from "./CardData";
import "./CardStyles.css" 
const Card = () => {
    return(
        <div className="card">
            <h1>
                Dlaczego warto wybrać Elkam?  
            </h1>

            <CardData
                heading ="Decydując się na nasze usługi masz pewność profesjonalnego i w 100% bezpiecznego wykonania naprawy usterki czy instalacji urządzeń."
                text = "•	Posiadamy wymagane uprawniania SEP, specjalistyczne kursy i bogate doświadczenie zawodowe. •	Podchodzimy odpowiedzialnie do wszystkich zleceń. Każdego klienta traktujemy indywidualnie, zapewniając mu wysoką jakość usług, bezpieczeństwo i pełną gwarancję na wykonywane prace."
            />

        </div>
    );
}
export default Card;

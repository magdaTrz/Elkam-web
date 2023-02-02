import img1 from "../../src/assets/3montazosprzetuelektrycznego/2/2.jpg";
import img3 from "../../src/assets/3montazosprzetuelektrycznego/11.jpg";

import CardData from "./CardData";
import "./CardStyles.css";
const Card = () => {
  return (
    <div className="card-background">
      <div className="card">
        <h1>Dlaczego warto wybrać Elkam?</h1>
        <h2>
          Decydując się na nasze usługi masz pewność profesjonalnego i w 100%
          bezpiecznego wykonania naprawy usterki czy instalacji urządzeń.
        </h2>

        <CardData
          cName="first-des"
          arg1="Posiadamy wymagane uprawniania SEP, specjalistyczne kursy i bogate doświadczenie zawodowe."
          arg2="Podchodzimy odpowiedzialnie do wszystkich zleceń. Każdego klienta traktujemy indywidualnie, zapewniając mu wysoką jakość usług, bezpieczeństwo i pełną gwarancję na wykonywane prace."
          img1={img1}
        />

        <CardData
          cName="first-des-reverse"
          arg1="Ekspresowo realizujemy wszelkie zlecenia usług elektrycznych. Jeśli zależy Ci na czasie, skontaktuj się z nami, jesteśmy do Twojej dyspozycji."
          arg2="Pracujemy zawsze na sprawdzonych i certyfikowanych materiałach elektrycznych od renomowanych producentów. Dzięki temu decydując się na nasze usługi, masz pewność profesjonalnie wykonanego zlecenia, które zagwarantuje Ci bezpieczeństwo i spokój na długi czas."
          img1={img3}
        />
      </div>
    </div>
  );
};
export default Card;

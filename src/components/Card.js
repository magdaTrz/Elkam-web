import img1 from "../../src/assets/poland-map.webp";

import CardData from "./CardData";
import "./CardStyles.css";
const Card = () => {
  return (
    <div className="card-background">
      <div className="card">
        <h1>Dlaczego warto wybrać Elkam?</h1>

        <CardData
          cName="first-des"
          arg1="ELKAM ELECTRIC to firma, która wykonuje usługi elektryczne w Białymstoku i województwie podlaskim od 2019 roku. Specjalizujemy się w wykonywaniu instalacji elektrycznych, energetycznych, teletechnicznych oraz systemów automatyki budynkowej. Swoje wieloletnie doświadczenie łączymy z najnowszą wiedzą, którą na bieżąco aktualizujemy. Naszym priorytetem jest zawsze zadowolenie klienta oraz precyzyjne i bezpieczne wykonanie każdego zlecenia."
          arg2="Podchodzimy odpowiedzialnie do wszystkich zleceń. Każdego klienta traktujemy indywidualnie, zapewniając mu wysoką jakość usług, bezpieczeństwo i pełną gwarancję na wykonywane prace."
          // img1={img1}
        />
      </div>
    </div>
  );
};
export default Card;

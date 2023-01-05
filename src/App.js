import './styles.css';

import Home from "./routes/Home";
import About from './routes/About';
import Services from './routes/Services';
import Gallery from './routes/Gallery.js';
import Contact from './routes/Contact';
import ThankYou from './routes/ThankYou';
import MontazNaprawa from './routes/ServiceFolder/MontazNaprawa';
import PomiaryInstalacji from './routes/ServiceFolder/PomiaryInstalacji';
import InstalacjeOdgromowe from './routes/ServiceFolder/InstalacjeOdgromowe';
import OsprzetElektryczny from './routes/ServiceFolder/OsprzetElektryczny';
import Systemy from './routes/ServiceFolder/Systemy';
import PaneleFoto from './routes/ServiceFolder/PaneleFoto';
import PodlaczanieAgd from './routes/ServiceFolder/PodlaczanieAgd';
import PrzylaczaEnergetyczne from './routes/ServiceFolder/PrzylaczaEnergetyczne';
import UkladanieKabli from './routes/ServiceFolder/UkladanieKabli';


import {Route, Routes} from "react-router-dom";

export default function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thankYou" element={<ThankYou />} />
        <Route path="/MontazNaprawa" element={<MontazNaprawa />} />
        <Route path="/PomiaryInstalacji" element={<PomiaryInstalacji />} />
        <Route path="/InstalacjeOdgromowe" element={<InstalacjeOdgromowe />} />
        <Route path="/OsprzetElektryczny" element={<OsprzetElektryczny />} />
        <Route path="/Systemy" element={<Systemy />} />
        <Route path="/PaneleFoto" element={<PaneleFoto />} />
        <Route path="/PodlaczanieAgd" element={<PodlaczanieAgd />} />
        <Route path="/PrzylaczaEnergetyczne" element={<PrzylaczaEnergetyczne />} />
        <Route path="/UkladanieKabli" element={<UkladanieKabli />} />
      </Routes>
    </div>
  );
}

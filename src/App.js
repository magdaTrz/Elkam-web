import './styles.css';
// import { Route, Routes } from 'react-router-dom';

import Home from "./routes/Home";
import About from './routes/About';
import Service from './routes/Service';
import Gallery from './routes/Gallery.js';
import Contact from './routes/Contact';

import {Route, Routes} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>

  
      
    </div>
  );
}


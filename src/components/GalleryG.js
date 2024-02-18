import React, { useState } from "react";
import "./GalleryGStyles.css";
// montaz instalacji data1
import img1 from "../../src/assets/1montazinstalacjielektrycznej/1.webp";
import img2 from "../../src/assets/1montazinstalacjielektrycznej/2.webp";
import img3 from "../../src/assets/1montazinstalacjielektrycznej/3.webp";
import img4 from "../../src/assets/1montazinstalacjielektrycznej/4.webp";
// odgromowa data2
import img9 from "../../src/assets/2montazinstalacjiodromowej/2.webp";
import img10 from "../../src/assets/2montazinstalacjiodromowej/4.webp";
import img11 from "../../src/assets/2montazinstalacjiodromowej/about.webp";
import img28 from "../../src/assets/2montazinstalacjiodromowej/instalacja_odgromowa.webp";
// montaz osprzetu
import img12 from "../../src/assets/3montazosprzetuelektrycznego/2/1.webp";
import img13 from "../../src/assets/3montazosprzetuelektrycznego/2/2.webp";
import img14 from "../../src/assets/3montazosprzetuelektrycznego/2/3.webp";
import img15 from "../../src/assets/3montazosprzetuelektrycznego/2/5.webp";

import img16 from "../../src/assets/3montazosprzetuelektrycznego/5/2.webp";
import img17 from "../../src/assets/3montazosprzetuelektrycznego/5/3.webp";
import img18 from "../../src/assets/3montazosprzetuelektrycznego/5/5.webp";

import img19 from "../../src/assets/3montazosprzetuelektrycznego/11.webp";
import img20 from "../../src/assets/3montazosprzetuelektrycznego/elektrykBialystok.webp";
import img21 from "../../src/assets/3montazosprzetuelektrycznego/halogen.webp";
//kable
import img22 from "../../src/assets/6ukladaniekabli/kable1.webp";
import img23 from "../../src/assets/6ukladaniekabli/kable2.webp";
import img24 from "../../src/assets/6ukladaniekabli/kable3.webp";
import img25 from "../../src/assets/6ukladaniekabli/kable4.webp";
import img33 from "../../src/assets/6ukladaniekabli/trasy-kablowe1.webp";
import img34 from "../../src/assets/6ukladaniekabli/trasy-kablowe2.webp";
import img35 from "../../src/assets/6ukladaniekabli/trasy-kablowe3.webp";
import img36 from "../../src/assets/6ukladaniekabli/trasy-kablowe4.webp";
//panele
import img26 from "../../src/assets/8montazpanelifotowol/panele1.webp";
import img27 from "../../src/assets/8montazpanelifotowol/panele2.webp";
//systemy zabeziecznia
import img29 from "../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-1.webp";
import img30 from "../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-2.webp";
import img31 from "../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-3.webp";
import img32 from "../../src/assets/5systemybezpieczenstwa/systemu-zabezpieczen-4.webp";

const GalleryG = () => {
  let data1 = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
    { id: 4, imgSrc: img4 },
  ];

  let data2 = [
    { id: 1, imgSrc: img9 },
    { id: 2, imgSrc: img10 },
    { id: 3, imgSrc: img11 },
    { id: 4, imgSrc: img28 },
  ];

  let data3 = [
    { id: 1, imgSrc: img12 },
    { id: 2, imgSrc: img13 },
    { id: 3, imgSrc: img14 },
    { id: 4, imgSrc: img15 },
    { id: 5, imgSrc: img16 },
    { id: 6, imgSrc: img17 },
    { id: 7, imgSrc: img18 },
    { id: 8, imgSrc: img19 },
    { id: 9, imgSrc: img20 },
    { id: 10, imgSrc: img21 },
  ];

  let data4 = [
    { id: 1, imgSrc: img22 },
    { id: 2, imgSrc: img25 },
    { id: 3, imgSrc: img33 },
    { id: 4, imgSrc: img34 },
    { id: 5, imgSrc: img35 },
    { id: 6, imgSrc: img36 },
    { id: 7, imgSrc: img23 },
    { id: 8, imgSrc: img24 },
  ];

  let data5 = [
    { id: 1, imgSrc: img26 },
    { id: 2, imgSrc: img27 },
  ];

  let data6 = [
    { id: 1, imgSrc: img29 },
    { id: 2, imgSrc: img30 },
    { id: 3, imgSrc: img31 },
    { id: 4, imgSrc: img32 },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt={tempImgSrc} />
        <i class="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
      </div>
      <div className="gallery-header">
        <h1>Zdjecia realizacji</h1>
        <p>
          Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!
        </p>
      </div>
      <div className="gallery-card">
        <h2>Wykonanie tras kablowych </h2>
        <div className="gallery">
          {data4.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>

        <h2>Systemy zabezpieczeń </h2>
        <div className="gallery">
          {data6.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>

        <h2>Montaż instalacji elektrycznej</h2>
        <div className="gallery">
          {data1.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>

        <h2>Montaż instalacji odgromowej</h2>
        <div className="gallery">
          {data2.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>

        <h2>Montaż osprzętu elektrycznego </h2>
        <div className="gallery">
          {data3.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>

        <h2>Montaż odnawialnych źródeł energii </h2>
        <div className="gallery">
          {data5.map((item, index) => {
            return (
              <div
                className="p-image"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img alt={item.imgSrc} src={item.imgSrc} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryG;

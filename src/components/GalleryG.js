import React, { useState } from "react";
import "./GalleryGStyles.css";
// montaz instalacji data1
import img1 from "../../src/assets/1montazinstalacjielektrycznej/1.jpg";
import img2 from "../../src/assets/1montazinstalacjielektrycznej/2.jpg";
import img3 from "../../src/assets/1montazinstalacjielektrycznej/3.jpg";
import img4 from "../../src/assets/1montazinstalacjielektrycznej/4.jpg";
// odgromowa data2
import img9 from "../../src/assets/2montazinstalacjiodromowej/2.jpg";
import img10 from "../../src/assets/2montazinstalacjiodromowej/4.jpg";
import img11 from "../../src/assets/2montazinstalacjiodromowej/about.jpg";
// montaz osprzetu
import img12 from "../../src/assets/3montazosprzetuelektrycznego/2/1.jpg";
import img13 from "../../src/assets/3montazosprzetuelektrycznego/2/2.jpg";
import img14 from "../../src/assets/3montazosprzetuelektrycznego/2/3.jpg";
import img15 from "../../src/assets/3montazosprzetuelektrycznego/2/5.jpg";

import img16 from "../../src/assets/3montazosprzetuelektrycznego/5/2.jpg";
import img17 from "../../src/assets/3montazosprzetuelektrycznego/5/3.jpg";
import img18 from "../../src/assets/3montazosprzetuelektrycznego/5/5.jpg";

import img19 from "../../src/assets/3montazosprzetuelektrycznego/11.jpg";
import img20 from "../../src/assets/3montazosprzetuelektrycznego/elektrykBialystok.jpg";
import img21 from "../../src/assets/3montazosprzetuelektrycznego/halogen.jpg";
//kable
import img22 from "../../src/assets/6ukladaniekabli/kable1.jpg";
import img23 from "../../src/assets/6ukladaniekabli/kable2.jpg";
import img24 from "../../src/assets/6ukladaniekabli/kable3.jpg";
import img25 from "../../src/assets/6ukladaniekabli/kable4.jpg";
//panele
import img26 from "../../src/assets/8montazpanelifotowol/panele1.jpg";
import img27 from "../../src/assets/8montazpanelifotowol/panele2.jpg";

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
    { id: 2, imgSrc: img23 },
    { id: 3, imgSrc: img24 },
    { id: 4, imgSrc: img25 },
  ];

  let data5 = [
    { id: 1, imgSrc: img26 },
    { id: 2, imgSrc: img27 },
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

        <h2>Układanie kabli energetycznych w ziemi </h2>
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

        <h2>Montaż paneli fotowoltaicznych </h2>
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

import React, {useState} from "react";
import "./GalleryGStyles.css";
// montaz instalacji data1
import img1 from "../../src/assets/1montazinstalacjielektrycznej/1/1.jpg";    //Montaż i naprawa instalacji elektrycznych
import img2 from "../../src/assets/1montazinstalacjielektrycznej/1/2.jpg"       //Pomiary instalacji elektrycznych
import img3 from "../../src/assets/1montazinstalacjielektrycznej/1/3.jpg"        //Montaż instalacji odgromowych
import img4 from "../../src/assets/1montazinstalacjielektrycznej/2/1.jpg"
import img5 from "../../src/assets/1montazinstalacjielektrycznej/2/2.jpg"
import img6 from "../../src/assets/1montazinstalacjielektrycznej/3/1.jpg"
import img7 from "../../src/assets/1montazinstalacjielektrycznej/3/2.jpg"
import img8 from "../../src/assets/1montazinstalacjielektrycznej/laser.jpg"
// odgromowa data2
import img9 from "../../src/assets/2montazinstalacjiodromowej/2.jpg"
import img10 from "../../src/assets/2montazinstalacjiodromowej/4.jpg"
import img11 from "../../src/assets/2montazinstalacjiodromowej/about.jpg"

const GalleryG = () => {
    let data1 = [
        { id:1, imgSrc: img1 },
        { id:2, imgSrc: img2 },
        { id:3, imgSrc: img3 },
        { id:4, imgSrc: img4 },
        { id:5, imgSrc: img5 },
        { id:6, imgSrc: img6 },
        { id:7, imgSrc: img7 },
        { id:8, imgSrc: img8 },
    ];

    let data2 = [
        { id:1, imgSrc: img9 },
        { id:2, imgSrc: img10 },
        { id:3, imgSrc: img11 },
    ];

    const [model,setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={model? "model open" : "model"}>
                <img src={tempImgSrc}/>
                <i class="fa-solid fa-xmark" onClick={() => setModel(false)}></i>
            </div>
            <div className="gallery-header">
                <h1>Zdjecia realizacji</h1>
                <p >Skontaktuj się z nami, a na pewno pomożemy Ci rozwiązać Twój problem!</p>
            </div>
            <div className="gallery-card">
                <h2>Montaż instalacji elektrycznej</h2>
                <div className="gallery">
                    {data1.map((item,index) => {
                        return (
                            <div className="p-image" key={index}  onClick={() => getImg(item.imgSrc)}>
                                <img alt="image" src={item.imgSrc}/>
                            </div>
                        )
                    })}
                </div>

                <h2>Montaż instalacji odgromowej</h2>
                <div className="gallery">
                    {data2.map((item,index) => {
                        return (
                            <div className="p-image" key={index}  onClick={() => getImg(item.imgSrc)}>
                                <img alt="image" src={item.imgSrc}/>
                            </div>
                        )
                    })}
                </div>

            </div>          
        </>

    )
}

export default GalleryG;
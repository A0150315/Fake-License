import React, { useEffect, useState } from "react";
import InImg from "./img/IMG_3125.PNG";
import MainImg from "./img/IMG_3126.PNG";
import SlideImg from "./img/IMG_3127.PNG";
import QRImg from "./img/IMG_3129.PNG";

import "./App.css";

function App() {
  const [openImgVisible, setOpenImgVisible] = useState(true);
  const [slideBarVisible, setSlideBarVisible] = useState<boolean | undefined>(
    undefined
  );
  const [qrVisible, setQRVisible] = useState(false);

  const onMainImgClick = () => {
    setSlideBarVisible((state) => !state);
  };

  const showProfile = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setQRVisible(true);
  };

  const hideProfile = () => {
    setQRVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpenImgVisible(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <img
        src={MainImg}
        alt="MainImg"
        className={["main_img", qrVisible ? "slide-out" : "slide-in"].join(" ")}
        onClick={onMainImgClick}
        // onClick={() => setQRVisible(true)}
      />
      <div
        className={[
          "slide-bar",
          typeof slideBarVisible !== "undefined" &&
            (slideBarVisible ? "fade-in" : "fade-out"),
        ].join(" ")}
        onClick={onMainImgClick}
      >
        <div
          className={[
            "mask",
            typeof slideBarVisible !== "undefined" &&
              (slideBarVisible ? "fade-in" : "fade-out"),
          ].join(" ")}
        />
        <img
          src={SlideImg}
          alt="SlideImg"
          onClick={(e) => {
            showProfile(e);
            onMainImgClick();
          }}
          className={[
            "slide_img",
            typeof slideBarVisible !== "undefined" &&
              (slideBarVisible ? "slide-in" : "slide-out"),
          ].join(" ")}
        />
      </div>
      <img
        src={QRImg}
        alt="QRImg"
        className={["qr_img", qrVisible ? "slide-out" : "slide-in"].join(" ")}
        onClick={hideProfile}
      />
      {openImgVisible && <img src={InImg} alt="InImg" className="open_img" />}
    </div>
  );
}

export default App;

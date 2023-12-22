// import image1 from "../assets/Screenshot 2023-12-08 at 10.54.51.png";
// import image2 from "../assets/Screenshot 2023-12-08 at 13.02.16.png";
// import Mascot from "../assets/6.png";
// import Mascot2 from "../assets/6.png";

import React, { useState, useEffect, useCallback } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const ImageCarousel = () => {
  // const [mascotChange, setMascotChange] = useState(false);
  const imagesContext = require.context("../assets/corousal", true, /\.png$/);
  const images = imagesContext.keys().map(imagesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const mascotClick = useCallback(() => {
  //   setMascotChange((prevMascotchange) => !prevMascotchange);
  // }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevCurrentImageIndex) => {
      const newIndex = prevCurrentImageIndex + 1;
      return newIndex >= images.length ? 0 : newIndex;
    });
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevCurrentImageIndex) => {
      const newIndex = prevCurrentImageIndex - 1;
      return newIndex < 0 ? images.length - 1 : newIndex;
    });
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          prevImage();
          // mascotClick();
          break;
        case "ArrowRight":
          nextImage();
          // mascotClick();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextImage, prevImage]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KeyboardArrowLeftOutlinedIcon
            onClick={() => {
              prevImage();
              // mascotClick();
            }}
            style={{ cursor: "pointer" }}
          />
          <img
            src={images[currentImageIndex]}
            alt=""
            style={{ width: "90%", height: "90%", objectFit: "contain" }}
          />
          <KeyboardArrowRightOutlinedIcon
            onClick={() => {
              nextImage();
              // mascotClick();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      {/* <div>
        {mascotChange ? (
          <img
            src={Mascot}
            alt="Mascot"
            width={"200px"}
            style={{ position: "absolute", bottom: "10px", right: "0px" }}
          />
        ) : (
          <img
            src={Mascot2}
            alt="Mascot"
            width={"200px"}
            style={{ position: "absolute", top: "10px", left: "0px" }}
          />
        )}
      </div> */}
    </div>
  );
};

export default ImageCarousel;

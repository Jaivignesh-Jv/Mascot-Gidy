import React, { useState } from "react";
import Mascot from "../assets/cattoeyes/16.png";
import MascotEyes from "../assets/cattoeyes/17.png";

const CattoEyes = () => {
  const [eyeStyle, setEyeStyle] = useState({});

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    console.log(x, y);
    setEyeStyle({
      right: 10 * (1 - x) + "px",
      bottom: 10 * (1 - y) + "px",
    });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        style={{ width: "100vw", height: "100vh" }}
      >
        <div>
          <img
            src={Mascot}
            alt="Mascot"
            style={{
              position: "absolute",
              bottom: "0px",
              right: "0px",
              width: "200px",
            }}
          />
          <img
            src={MascotEyes}
            alt="MascotEyes"
            style={{
              position: "absolute",
              bottom: "-0px",
              right: "-45px",
              width: "200px",
              ...eyeStyle,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CattoEyes;

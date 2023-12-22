import React, { useState } from "react";

import backroundImage from "../assets/main/Screenshot 2023-12-08 at 10.54.51.png";
import { Link } from "react-router-dom";
import { CiSquareQuestion } from "react-icons/ci";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ImageCarousel from "../pages/ImageCarousel";

// import Mascot from "../assets/6.png";
import Mascot from "../assets/cattoeyes/16.png";
import MascotEyesCute from "../assets/cattoeyes/17.png";
import MascotEyesClosed from "../assets/cattoeyes/18.png";
import MascotEyesWinkBoth from "../assets/cattoeyes/20.png";
import MascotEyesAmazed from "../assets/cattoeyes/21.png";
import MascotEyesCuteMouthWide from "../assets/cattoeyes/22.png";
import MascotEyesSunGlasses from "../assets/cattoeyes/23.png";
import MascotEyesPleading from "../assets/cattoeyes/24.png";
import MascotEyesOneEyeBlink from "../assets/cattoeyes/25.png";
import MascotEasterEgg from "../assets/cattoeyes/easteregg.png";
import MascotYamataeKudasai from "../assets/cattoeyes/yamate kudasai.png";

const Projects = () => {
  //----------------------------------------------
  //Mascot Image
  //----------------------------------------------
  const [MascotMain, setMascotMain] = useState(Mascot); // [state, setState
  const [showMascotMain, setShowMascotMain] = useState(true);
  const [Eyes, setEyes] = useState(MascotEyesCute); //Change Main Mascot Eyes

  //----------------------------------------------
  //Mouse Tracking
  //----------------------------------------------
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // console.log(x);
  // console.log(y);

  // const [eyeStyle, setEyeStyle] = useState({});
  const handleMouseMove = (event) => {
    setX(event.clientX / window.innerWidth);
    setY(event.clientY / window.innerHeight);
  };
  const setMascotEyesStyle = (a, b) => {
    return {
      right: a + 10 * (1 - x) + "px",
      bottom: b + 10 * (1 - y) + "px",
    };
  };

  //----------------------------------------------
  //Image Carousel
  //----------------------------------------------
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setShowMascotMain(!showMascotMain);
  };
  const [popup, setPopup] = useState({ show: false, content: "" });
  const handleMouseEnter = (boxId) => {
    const box = document.getElementById(boxId);
    const content = box.textContent || box.innerText;
    setPopup({ show: true, content });
    setShowMascotMain(false);
  };
  const handleMouseLeave = () => {
    setPopup((prevState) => ({ ...prevState, show: false }));
    setShowMascotMain(true);
  };

  const [yamataeCounter, setYamataeCounter] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const handleYamataeKudasai = () => {
    if (isChanging) return; // If the eyes are currently changing, do nothing

    setYamataeCounter((prevYamataeCounter) => prevYamataeCounter + 1);
    if (yamataeCounter % 10 === 9) {
      setIsChanging(true); // Set isChanging to true before changing the eyes
      setEyes(MascotYamataeKudasai);

      setTimeout(() => {
        setEyes(MascotEyesCute);
        setIsChanging(false); // Set isChanging back to false after the eyes have changed back
      }, 500);
    }
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "100vh" }}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        src={backroundImage}
        alt="backroundImage"
      />

      <Link
        to="/feedback"
        onMouseLeave={() => setEyes(MascotEyesCute)}
        onMouseEnter={() => setEyes(MascotEyesPleading)}
        style={{
          position: "absolute",
          width: "37px",
          height: "32px",
          top: "742px",
          left: "12px",
        }}
      ></Link>
      <Link to="/details">
        <div
          style={{
            position: "absolute",
            height: "60px",
            width: "1120px",
            top: "565px",
            left: "185px",
          }}
          onMouseLeave={() => setEyes(MascotEyesCute)}
          onMouseEnter={() => setEyes(MascotEyesClosed)}
        ></div>
      </Link>

      {/* Image carousel */}
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <CiSquareQuestion
          onMouseLeave={() => setEyes(MascotEyesCute)}
          onMouseEnter={() => setEyes(MascotEyesOneEyeBlink)}
          size={24}
          style={{
            position: "absolute",
            color: "#4284F3",
            top: "87%",
            left: "21px",
          }}
        />
      </div>

      {/* {templates} */}
      <Link to="/tasks">
        <div
          style={{
            width: "370px",
            height: "162px",
            position: "absolute",
            top: "110px",
            left: "185px",
          }}
          className="box"
          id="box1"
          onMouseEnter={() => handleMouseEnter("box1")}
          onMouseLeave={handleMouseLeave}
        >
          <p style={{ display: "none" }}>
            Love is a deep feeling of affection, care, and attachment towards
            someone or something. It's an emotion that makes you feel warm,
            happy, and connected. In our teenage days, I believe many of us have
            had the curiosity of wanting to know if someone we liked felt the
            same way about us😂. This is where the Love Calculator comes in.
            It's a fun and lighthearted way to calculate the compatibility
            between two people based on their names. By entering the names of
            two individuals, the Love Calculator generates a percentage that
            indicates how compatible they are. While it is not accurate, we had
            so much fun and enthusiasm in finding it out.
          </p>
        </div>
      </Link>
      <Link to="/tasks">
        <div
          style={{
            width: "370px",
            height: "162px",
            position: "absolute",
            top: "110px",
            left: "560px",
          }}
          className="box"
          id="box2"
          onMouseEnter={() => handleMouseEnter("box2")}
          onMouseLeave={handleMouseLeave}
        >
          <p style={{ display: "none" }}>
            Embark on a coding adventure with your very own Rock, Paper,
            Scissors game! 🚀 In this project, you'll be the architect of an
            exciting digital arena where Rock crushes Scissors, Scissors cuts
            Paper, and Paper covers Rock. 💥 Get ready to flex your programming
            muscles as you craft a game that combines strategy, logic, and a
            touch of randomness. 🤖 Whether you're a coding newbie or a seasoned
            developer, this project promises a thrilling journey into the world
            of game development. So, gear up, and let the games begin! 🎮✨
            Happy coding! 🚀
          </p>
        </div>
      </Link>
      <Link to="/tasks">
        <div
          style={{
            width: "370px",
            height: "162px",
            position: "absolute",
            top: "110px",
            left: "935px",
          }}
          className="box"
          id="box3"
          onMouseEnter={() => handleMouseEnter("box3")}
          onMouseLeave={handleMouseLeave}
        >
          <p style={{ display: "none" }}>
            Welcome to "The JavaScript Adventure," where you'll embark on a
            thrilling journey into the world of web development through the
            enchanting realm of JavaScript. This course is designed to spark
            your creativity, ignite your problem-solving skills, and empower you
            to craft interactive web applications that leave a lasting impact.
          </p>
        </div>
      </Link>
      <Link to="/tasks">
        <div
          style={{
            width: "370px",
            height: "162px",
            position: "absolute",
            top: "280px",
            left: "185px",
          }}
          className="box"
          id="box4"
          onMouseEnter={() => handleMouseEnter("box4")}
          onMouseLeave={handleMouseLeave}
        >
          <p style={{ display: "none" }}>
            Embark on a coding adventure with your very own Rock, Paper,
            Scissors game! 🚀 In this project, you'll be the architect of an
            exciting digital arena where Rock crushes Scissors, Scissors cuts
            Paper, and Paper covers Rock. 💥 Get ready to flex your programming
            muscles as you craft a game that combines strategy, logic, and a
            touch of randomness. 🤖 Whether you're a coding newbie or a seasoned
            developer, this project promises a thrilling journey into the world
            of game development. So, gear up, and let the games begin! 🎮✨
            Happy coding! 🚀
          </p>
        </div>
      </Link>

      <div id="popup" className={popup.show ? "show" : ""}>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={MascotMain}
            alt="Mascot"
            style={{
              width: "200px",
              position: "absolute",
              bottom: "-20px",
              right: "-50px",
            }}
          />
          <img
            src={MascotEyesWinkBoth}
            alt="Mascot"
            style={{
              position: "absolute",
              // bottom: "-20px",
              // right: "-40px",
              ...setMascotEyesStyle(-50, -20),
            }}
          />
        </div>

        <div
          style={{
            border: "1px solid #9ccae5",
            borderRadius: "10px",
            display: "flex",
            backgroundColor: " rgb(221, 234, 255)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ flex: 1 }}>{popup.content}</p>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: "20px",
              top: "20px",
              color: "white",
              cursor: "pointer",
              outline: "black",
            }}
          >
            <CloseOutlinedIcon onClick={handleClick} />
          </div>
          <div
            style={{
              width: "80%",
              height: "80%",
              background: "#F6F7F9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageCarousel />
          </div>
        </div>
      )}

      {/* main mascot */}
      <div>
        <img
          src={MascotMain}
          alt="Mascot"
          style={{
            // display: showMascotMain ? "block" : "none",
            position: "absolute",
            bottom: "-20px",
            right: "-50px",
            width: "200px",
            opacity: showMascotMain ? 1 : 0,
            transition: showMascotMain ? "opacity 0.5s" : "opacity 0s",
            transitionDelay: showMascotMain ? "1s" : "0s",
          }}
        />
        <img
          onClick={handleYamataeKudasai}
          src={Eyes}
          alt="MascotEyes"
          style={{
            // display: showMascotMain ? "block" : "none",
            position: "absolute",
            bottom: "0px",
            right: "0px",
            width: "200px",
            ...setMascotEyesStyle(-50, -20),
            opacity: showMascotMain ? 1 : 0,
            transition: showMascotMain ? "opacity 0.5s" : "opacity 0s",
            transitionDelay: showMascotMain ? "1s" : "0s",
          }}
        />
      </div>

      {/* mascot faces */}
      <div
        className="CreateProjectHover"
        onMouseLeave={() => setEyes(MascotEyesCute)}
        onMouseEnter={() => setEyes(MascotEyesClosed)}
        style={{
          position: "absolute",

          width: "33px",
          height: "33px",
          top: "471px",
          left: "1287px",
        }}
      ></div>
      <Link to="/profile">
        <div
          className="ProfileHover"
          onMouseLeave={() => setEyes(MascotEyesCute)}
          onMouseEnter={() => setEyes(MascotEyesAmazed)}
          style={{
            position: "absolute",

            width: "33px",
            height: "33px",
            top: "58px",
            left: "13px",
            // border: "1px solid black",
            borderRadius: "50%",
            cursor: "hover",
          }}
        ></div>
      </Link>
      <div
        className="ProjectHover"
        onMouseLeave={() => setEyes(MascotEyesCute)}
        onMouseEnter={() => setEyes(MascotEyesClosed)}
        style={{
          position: "absolute",
          width: "33px",
          height: "43px",
          top: "108px",
          left: "13px",
          // border: "1px solid black",
          cursor: "hover",
        }}
      ></div>

      <div
        className="TaskHover"
        onMouseLeave={() => setEyes(MascotEyesCute)}
        onMouseEnter={() => setEyes(MascotEyesCuteMouthWide)}
        style={{
          position: "absolute",
          width: "33px",
          height: "40px",
          top: "150px",
          left: "13px",
          // border: "1px solid black",
          cursor: "hover",
        }}
      ></div>

      <div
        className="BlueprintHover"
        onMouseLeave={() => setEyes(MascotEyesCute)}
        onMouseEnter={() => setEyes(MascotEyesSunGlasses)}
        style={{
          position: "absolute",
          width: "33px",
          height: "35px",
          top: "190px",
          left: "13px",
          // border: "1px solid black",
          cursor: "hover",
        }}
      ></div>

      <div
        className="GidyHoverEasterEgg"
        onMouseLeave={() => {
          setMascotMain(Mascot);
          setEyes(MascotEyesCute);
        }}
        onMouseEnter={() => {
          setEyes(MascotEyesCute);
          setMascotMain(MascotEasterEgg);
        }}
        style={{
          position: "absolute",
          width: "33px",
          height: "35px",
          top: "10px",
          left: "13px",
          // border: "1px solid black",
          cursor: "hover",
        }}
      ></div>
    </div>
  );
};

export default Projects;

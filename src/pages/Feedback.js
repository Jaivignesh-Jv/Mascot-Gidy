import React, { useState } from "react";
import { Link } from "react-router-dom";

import backgroundImage from "../assets/main/Screenshot 2023-12-08 at 10.54.51.png";
import feedbackimg from "../assets/feedback/Screenshot 2023-12-20 at 13.14.21.png";
import feedbackimg2 from "../assets/feedback/Screenshot 2023-12-20 at 11.12.20.png";
// import cattoQuestion from "../assets/Catto pack final/8.png";

import MascotCute from "../assets/feedback/cattopackmeaw/5.png";
import MascotCuteBug from "../assets/feedback/cattopackmeaw/6.png";
import MascotCuteIdea from "../assets/feedback/cattopackmeaw/7.png";
import MascotCuteQuestion from "../assets/feedback/cattopackmeaw/8.png";
import MascotCuteText from "../assets/feedback/cattopackmeaw/9.png";

// import mascot from "../assets/6.png";

const Feedback = () => {
  const [Mascot, setMascot] = useState(MascotCute); // [state, setState
  const [bugReport, setBugReport] = useState(false);
  const handleOnClick = () => {
    setBugReport((prevBugReport) => !prevBugReport);
  };

  return (
    <div className="feedback">
      <img
        style={{ width: "100%", height: "100%" }}
        src={backgroundImage}
        alt="backgroundImage"
      />
      {bugReport ? (
        <div>
          <img
            style={{
              position: "absolute",
              width: "318px",
              height: "400px",
              left: "65px",
              top: "300px",
              border: "1px solid #9ccae5",
              borderRadius: "6px",
            }}
            src={feedbackimg2}
            alt="feedbackImage"
          />
          <div
            className="Close"
            onClick={handleOnClick}
            style={{
              position: "absolute",
              width: "25px",
              height: "25px",
              top: "303px",
              left: "353px",
              // border: "1px solid black",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          ></div>
        </div>
      ) : (
        <div>
          <img
            style={{
              position: "absolute",
              width: "318px",
              height: "400px",
              left: "65px",
              top: "300px",
              border: "1px solid #9ccae5",
              borderRadius: "6px",
            }}
            src={feedbackimg}
            alt="feedbackImage"
          />
          <img
            style={{
              position: "absolute",
              width: "120px",
              left: "60px",
              top: "600px",
              // opacity: "1",
              // transition: "all 0.5s ease-in-out",
            }}
            src={Mascot}
            alt="mascotimage"
          />
          <div
            onMouseEnter={() => setMascot(MascotCuteIdea)}
            onMouseLeave={() => setMascot(MascotCute)}
            style={{
              position: "absolute",
              top: "395px",
              left: "105px",
              width: "237px",
              height: "29px",
              // border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={handleOnClick}
          ></div>

          <div
            onMouseEnter={() => setMascot(MascotCuteBug)}
            onMouseLeave={() => setMascot(MascotCute)}
            style={{
              position: "absolute",
              top: "430px",
              left: "105px",
              width: "237px",
              height: "29px",
              // border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={handleOnClick}
          ></div>

          <div
            onMouseEnter={() => setMascot(MascotCuteQuestion)}
            onMouseLeave={() => setMascot(MascotCute)}
            style={{
              position: "absolute",
              top: "465px",
              left: "105px",
              width: "237px",
              height: "29px",
              // border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={handleOnClick}
          ></div>

          <div
            onMouseEnter={() => setMascot(MascotCuteText)}
            onMouseLeave={() => setMascot(MascotCute)}
            style={{
              position: "absolute",
              top: "500px",
              left: "105px",
              width: "237px",
              height: "29px",
              // border: "1px solid black",
              cursor: "pointer",
            }}
            onClick={handleOnClick}
          ></div>
          <Link to="/mainpage">
            <div
              className="Close"
              // onClick={handleOnClick}
              style={{
                position: "absolute",
                width: "25px",
                height: "25px",
                top: "303px",
                left: "353px",
                // border: "1px solid red",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            ></div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Feedback;

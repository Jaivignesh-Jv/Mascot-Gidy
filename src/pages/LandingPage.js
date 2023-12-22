import React from "react";
import backgroundImage from "../assets/main/Screenshot 2023-12-12 at 15.16.36.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="task">
      <Link to="/mainpage">
        <div
          style={{
            position: "absolute",
            width: "79px",
            height: "33px",
            top: "565px",
            left: "680px",
          }}
        ></div>
      </Link>
      <img
        style={{ width: "100%", height: "100%" }}
        src={backgroundImage}
        alt="backgroundImage"
      />
    </div>
  );
};

export default LandingPage;

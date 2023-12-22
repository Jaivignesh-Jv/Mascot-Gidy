import React, { useState } from "react";
import backgroundImage from "../assets/profile/Screenshot 2023-12-21 at 15.39.45.png";
import mascot from "../assets/Catto pack final/27.png";
import ProfilePicker from "../assets/profile/profile picker.png";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <img
        style={{ width: "100%", height: "100%" }}
        src={backgroundImage}
        alt="backgroundImage"
      />

      <div>
        <div
          className="ProfileHover"
          style={{
            position: "absolute",
            width: "71px",
            height: "73px",
            top: "39px",
            left: "324px",
            // border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "50%",
            cursor: "hover",
          }}
        >
          <img
            onClick={handleClick}
            src={mascot}
            alt="profileImage"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              //   borderRadius: "50%",
            }}
          />
        </div>
      </div>
      {isOpen ? (
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
            <img
              src={ProfilePicker}
              alt="ProfilePicker"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;

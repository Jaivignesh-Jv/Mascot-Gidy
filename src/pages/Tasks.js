import React from "react";
import backgroundImage from "../assets/main/Screenshot 2023-12-12 at 15.17.10.png";

const Tasks = () => {
  return (
    <div className="task">
      <img
        style={{ width: "100%", height: "100%" }}
        src={backgroundImage}
        alt="backgroundImage"
      />
    </div>
  );
};

export default Tasks;

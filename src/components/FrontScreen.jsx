import React from "react";
import logoCat from "../assets/AI_Travel_Agent.png";

const FrontScreen = ({ onBegin }) => {
  return (
    <div className="front-screen">
      <img
        src={logoCat}
        alt="AI Travel Agent Logo"
        className="front-screen--logo"
      />
      <button className="front-screen--button" onClick={onBegin}>
        Let's Begin
      </button>
    </div>
  );
};
export default FrontScreen;

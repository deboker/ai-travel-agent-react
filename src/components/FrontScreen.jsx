import React from "react";

const FrontScreen = ({ onBegin }) => {
  return (
    <div className="front-screen">
      <img
        src="/src/assets/AI_Travel_Agent.png"
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

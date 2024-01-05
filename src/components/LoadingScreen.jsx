import React from "react";
import loadingLogo from "../assets/Loading-AI-Travel-Agent.gif";

const LoadingScreen = () => (
  <div className="loading-screen">
    <img
      src={loadingLogo}
      alt="Pre-Loading Screen"
      className="loading-screen-image"
    />
  </div>
);

export default LoadingScreen;

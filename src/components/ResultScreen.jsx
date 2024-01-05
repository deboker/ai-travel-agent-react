import React from "react";
import { formatDate } from "../utils/dateUtils";

const ResultScreen = ({ onRestart, results }) => (
  <div className="result-screen">
    <h1 className="result-screen--title">Your Trip</h1>

    <div className="result-screen--date">
      <div className="result-screen--dates">
        → {formatDate(results.fromDate)}
      </div>
      <div className="result-screen--dates">{formatDate(results.toDate)} ←</div>
    </div>

    <div className="result-screen--destination">
      <div className="result-screen--destination-input">
        {results.flyingFrom} → {results.flyingTo}
      </div>
    </div>

    <div className="result-screen--div">
      <h2 className="result-screen--labels">Weather</h2>
      <div className="result-screen--displays">{results.weatherDetails}</div>
    </div>

    <div className="result-screen--div">
      <h2 className="result-screen--labels">Flight</h2>
      <div className="result-screen--displays">{results.flightDetails}</div>
    </div>

    <div className="result-screen--div">
      <h2 className="result-screen--labels">Hotel</h2>
      <div className="result-screen--displays">
        {results.accommodationDetails}
      </div>
    </div>

    <div className="result-screen--div">
      <h2 className="result-screen--labels">Activities</h2>
      <div className="result-screen--displays">{results.activitiesDetails}</div>
    </div>

    {/* Add similar sections for flights, hotels, activities, etc., 
        using results.flightDetails, results.accommodationDetails, etc. */}

    <button className="result-screen--button" onClick={onRestart}>
      Try Again
    </button>
  </div>
);

export default ResultScreen;

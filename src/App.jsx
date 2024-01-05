import React, { useState } from "react";
import FrontScreen from "/src/components/FrontScreen";
import BookingScreen from "/src/components/BookingScreen";
import LoadingScreen from "/src/components/LoadingScreen";
import ResultScreen from "/src/components/ResultScreen";
import { getCurrentWeather } from "./utils/getCurrentWeather";
import {
  constructWeatherFromAI,
  constructFlightFromAI,
  constructAccommodationFromAI,
  constructActivitiesFromAI,
} from "./utils/openAIUtils";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("front");
  const [bookingData, setBookingData] = useState({
    numberOfTravellers: 1,
    flyingFrom: "",
    flyingTo: "",
    fromDate: "",
    toDate: "",
    budget: 100,
    weatherDetails: null,
  }); // Structuring booking data

  const handleBegin = () => setCurrentScreen("booking");

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setBookingData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleNumberChange = (increment) => {
    setBookingData((prevData) => ({
      ...prevData,
      numberOfTravellers: Math.max(1, prevData.numberOfTravellers + increment),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCurrentScreen("loading");
    console.log(bookingData);
    try {
      const weatherData = await getCurrentWeather(
        bookingData.fromDate,
        bookingData.toDate,
        bookingData.flyingTo
      );
      console.log(weatherData);
      const weatherAiDetails = await constructWeatherFromAI(weatherData);
      const flightAiDetails = await constructFlightFromAI(bookingData);
      const accommodationAiDetails = await constructAccommodationFromAI(
        bookingData
      );
      const activitiesAiDetails = await constructActivitiesFromAI(
        bookingData,
        weatherData
      );
      // Other API calls for flight, accommodation, etc.

      setBookingData({
        ...bookingData,
        weatherDetails: weatherAiDetails,
        flightDetails: flightAiDetails,
        accommodationDetails: accommodationAiDetails,
        activitiesDetails: activitiesAiDetails,
        // ... other data
      });

      setCurrentScreen("result");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
      setCurrentScreen("booking");
    }
  };

  const handleRestart = () => {
    setBookingData({
      numberOfTravellers: 1,
      flyingFrom: "",
      flyingTo: "",
      fromDate: "",
      toDate: "",
      budget: 100,
    });
    setCurrentScreen("front");
  };

  return (
    <div className="app">
      {currentScreen === "front" && <FrontScreen onBegin={handleBegin} />}
      {currentScreen === "booking" && (
        <BookingScreen
          onSubmit={handleSubmit}
          data={bookingData}
          onInputChange={handleInputChange}
          onNumberChange={handleNumberChange}
        />
      )}
      {currentScreen === "loading" && <LoadingScreen />}
      {currentScreen === "result" && (
        <ResultScreen onRestart={handleRestart} results={bookingData} />
      )}
    </div>
  );
};

export default App;

export const getCurrentWeather = async (startDate, endDate, city) => {
    const OWapiKey = import.meta.env.VITE_OPENWEATHER_API;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&start=${startDate}&end=${endDate}&units=metric&appid=${OWapiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };
  
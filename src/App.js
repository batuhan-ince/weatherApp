import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import Forecast from "./components/weather";


const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = useGeolocation();
  
  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
        );
        setWeather(data);
      } catch {
      alert("Could not get the data.");
    }
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude])
  
  return <div>
    <Forecast weather={weather} />
  </div>
};

export default App;
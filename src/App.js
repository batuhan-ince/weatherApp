import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import Forecast from "./components/weather";
import Recommend from "./spotify";
import { Buffer } from 'buffer';
import jsonData from "./components/descriptions.json"



const App = () => {

  const endpoint = "https://api.spotify.com/v1/recommendations";
  const artists = '0k17h0D3J5VfsdmQ1iZtE9';

  const [weather, setWeather] = useState();
  const { latitude, longitude } = useGeolocation();

  const [songs, setSongs] = useState();
  const airDescription = structuredClone(jsonData)
  const targetValance = 0.7
  // console.log(airDescription[weather.weather[0].description].target_valance)

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

  const getRecommendations = async (valance) => {
      const trackList = [];
      const response1 = await axios({
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              Buffer.from(
                process.env.REACT_APP_SPOTIFY_CLIENT_ID + ":" + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
              ).toString("base64"),
          },
          data: "grant_type=client_credentials",
        });
      let token = response1.data.access_token;

      const response2 = await axios ({
        url: `${endpoint}?limit=1&seed_artists=${artists}&max_valance=${0.7}`,
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      setSongs(response2)
    }
  
    useEffect(() => {
      latitude && longitude && getWeatherData(latitude, longitude);
    }, [latitude, longitude]);
  useEffect(() => {
    getRecommendations(targetValance);
  // eslint-disable-next-line
  }, []);

  

  return (
    <div>
      <Forecast weather={weather} />
      <Recommend tracks={songs} />
    </div>
  );
};

export default App;

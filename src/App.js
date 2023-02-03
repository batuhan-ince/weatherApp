import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
import Forecast from "./components/weather";
import Recommend from "./spotify";
import { Buffer } from "buffer";
import airData from "./components/descriptions.json";

const App = () => {
  const endpoint = "https://api.spotify.com/v1/recommendations";
  // const artists = "7jy3rLJdDQY21OgRLCZ9sD";

  const [weather, setWeather] = useState();
  const { latitude, longitude } = useGeolocation();

  
  const [songs, setSongs] = useState();
  // console.log("dance", targetDancebility)
  // console.log("energy", targetEnergy)
  // console.log("live", targetLiveness)
  // console.log(weather)

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
        );
        setWeather(data);
        // console.log(data.weather[0].description)
      } catch {
        alert("Could not get the data.");
      }
  };
  
  const getRecommendations = async (
    ) => {
      if (!weather) {
        return null
      }
      const targetValance = airData[weather.weather[0].description].target_valance;
      const targetDancebility = airData[weather.weather[0].description].target_dancebility;
      const targetEnergy = airData[weather.weather[0].description].target_energy;
      const targetLiveness = airData[weather.weather[0].description].target_liveness;
      const response1 = await axios({
        url: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.REACT_APP_SPOTIFY_CLIENT_ID +
            ":" +
            process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
            ).toString("base64"),
          },
      data: "grant_type=client_credentials",
    });
    let token = response1.data.access_token;
    const response2 = await axios({
      url: `${endpoint}?limit=1&seed_genres=${'jazz,rock,pop,metal,electronic'}&max_valance=${targetValance}&max_danceability=${targetDancebility}&max_energy=${targetEnergy}&max_liveness=${targetLiveness}`,
      // &max_danceability=${targetDancebility}&max_energy=${targetEnergy}&max_liveness=${targetLiveness}
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setSongs(response2);
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  useEffect(() => {
      getRecommendations(
      );
    // eslint-disable-next-line
  }, [weather]);

  return (
    <div>
      <Forecast weather={weather} />
      <Recommend tracks={songs} />
    </div>
  );
};

export default App;

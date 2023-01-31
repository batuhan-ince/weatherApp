import jsonData from "./descriptions.json"
import Recommend from "../spotify";

const Forecast = (props) => {
  const { weather } = props;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

//   const descriptionIcons = {
//     "clear sky": {icon: "01d.png", maxValence: 1, minValence: 0.9},
//     "few clouds": "02d.png",
//     "scattered clouds": "03d.png",
//     "broken clouds": "04d.png",
//     "shower rain": "09d.png",
//     "rain": "10d.png",
//     "thunderstorm": "11d.png",
//     "snow": "13d.png",
//     "mist": "50d.png",
//     "overcast clouds":f "03d.png",
//   };

//   console.log(jsonData["clear sky"]["max_valence"])

  if (!weather) {
    return <p id="loading">Loading...</p>;
  }
//   console.log(weather)
  const background = {
    TR: "Turkey",
    DE: "Germany",
  };

  let air_icon = `http://openweathermap.org/img/wn/${
    jsonData[weather.weather[0].description]["icon"]
  }`;
  return (
    <div>
        <div id={background[weather.sys.country]}>
      <section id="weatherInfo" >
        <h3>{weather.name}</h3>
        <p>
          {Math.round(weather.main.temp)}°C (Feels Like:{" "}
          {Math.round(weather.main.feels_like)}°C)
        </p>
        <div>
          <h4 id="weatherDescription">
            {weather.weather.map((data) => data.description).join(", ")}{" "}
            <img id="air_icon" src={air_icon} alt="air_icon" />
          </h4>
        </div>
        <p>
          {new Date(weather.dt * 1000).toLocaleDateString("en-US", options)}
        </p>
      </section>
    </div>
    </div>
  );
};

export default Forecast;
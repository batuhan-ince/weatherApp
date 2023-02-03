import jsonData from "./descriptions.json";
// import Recommend from "../spotify";

const Forecast = (props) => {
  const { weather } = props;
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div>
      {weather ?
      <div id="background">
        <section id="weatherInfo">
          <h3>{weather.name}</h3>
          <p>
            {Math.round(weather.main.temp)}°C (Feels Like:{" "}
            {Math.round(weather.main.feels_like)}°C)
          </p>
          <div>
            <h4 id="weatherDescription">
              {weather.weather.map((data) => data.description).join(", ")}{" "}
              <img id="air_icon" src={`http://openweathermap.org/img/wn/${jsonData[weather.weather[0].description]["icon"]}`} alt="air_icon" />
            </h4>
          </div>
          <p>
            {new Date(weather.dt * 1000).toLocaleDateString("en-US", options)}
          </p>
        </section>
      </div> : <p id="loading">Loading Weather...</p>}
    </div>
  );
};

export default Forecast;

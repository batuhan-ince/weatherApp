const Forecast = (props) => {
    const { weather } = props;
    console.log(weather.weather[0].icon)
    // let air_icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    const options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
    if (!weather) {
        return <p id="loading">Loading...</p>
    }    
    return <div id="weatherCard">
        <section id="weatherInfo">
            <h3>{weather.name}</h3>
            <p>{Math.round(weather.main.temp)}°C (Feels Like: {Math.round(weather.main.feels_like)}°C)</p>
            <h4>{weather.weather.map(data => data.description).join(", ")}</h4>
            {/* <img src={air_icon}  alt="air_icon"/> */}
            <p>{new Date(weather.dt * 1000).toLocaleDateString("en-US", options)}</p>
        </section>

    </div>;
}

export default Forecast
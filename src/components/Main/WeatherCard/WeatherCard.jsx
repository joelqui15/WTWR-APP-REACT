import "./WeatherCard.css";
import {
  weatherDataOptions,
  weatherOptionsDefault,
} from "../../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredWeatherOptions = weatherDataOptions.filter((option) => {
    return (
      option.isDay === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOptions;
  //let weatherOptions;
  // set default value for night and day cards
  // if statement needed creat new objext in const for default value
  if (filteredWeatherOptions.length === 0) {
    weatherOptions = weatherOptionsDefault[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOptions = filteredWeatherOptions[0];
  }
  return (
    <>
      <section className="weatherCard__container">
        <img
          className="weatherCard__img"
          src={weatherOptions?.url}
          alt={`displaying ${weatherOptions?.condition} at ${weatherOptions?.isDay ? "day" : "night"}`}
        />
        <p className="weatherCard__temp">
          {Math.round(weatherData.temp.F)}&deg;F
        </p>
      </section>
    </>
  );
}

export default WeatherCard;

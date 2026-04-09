import "./WeatherCard.css";
import { weatherDataOptions } from "../../../utils/constants";

function WeatherCard({ weatherData }) {
  const filteredWeatherOptions = weatherDataOptions.filter((option) => {
    console.log(option.condition, weatherData.condition);
    return (
      option.isDay === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  const weatherOptions = filteredWeatherOptions[0];
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

import sunny from "../../../images/sunny.png";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <>
      <section className="weatherCard__container">
        <img
          className="weatherCard__img"
          src={sunny}
          alt="display of sunshine with blue skys"
        />
        <p className="weatherCard__temp">
          {Math.round(weatherData.temp)}&deg;F
        </p>
      </section>
    </>
  );
}

export default WeatherCard;

import clear from "../../../images/day/clear.png";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  return (
    <>
      <section className="weatherCard__container">
        <img
          className="weatherCard__img"
          src={clear}
          alt="display of sunshine with blue skys"
        />
        <p className="weatherCard__temp">
          {Math.round(weatherData.temp.F)}&deg;F
        </p>
      </section>
    </>
  );
}

export default WeatherCard;

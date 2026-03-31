import sunny from "../../../images/sunny.png";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <>
      <section className="weatherCard__container">
        <img
          className="weatherCard__img"
          src={sunny}
          alt="display of sunshine with blue skys"
        />
        <p className="weatherCard__temp">20&deg;F</p>
      </section>
    </>
  );
}

export default WeatherCard;

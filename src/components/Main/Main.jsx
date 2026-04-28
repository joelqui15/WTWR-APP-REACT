import { useContext } from "react";
import { CurrentTempContext } from "../../context/CurrentTemperatureUnitContext.jsx";
import WeatherCard from "../Main/WeatherCard/WeatherCard.jsx";
import ItemCard from "../Main/ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({ clothingItems, weatherData, handleCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTempContext);

  const handleTempUnit = () => {
    if (currentTemperatureUnit === "C") {
      return weatherData.temp.C;
    } else {
      return weatherData.temp.F;
    }
  };

  return (
    <main className="main">
      <WeatherCard
        weatherData={weatherData}
        handleTempUnit={handleTempUnit}
        currentTemperatureUnit={currentTemperatureUnit}
      />
      <section className="cards">
        <p className="cards__header">
          Today is {handleTempUnit()}&deg;{currentTemperatureUnit} / you may
          want to wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  item={item}
                  key={item._id}
                  handleCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;

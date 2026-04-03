import WeatherCard from "../Main/WeatherCard/WeatherCard.jsx";
import ItemCard from "../Main/ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({ clothingItems, weatherData }) {
  return (
    <>
      <main className="main">
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          <p className="cards__header">
            Today is {Math.round(weatherData.temp)}&deg;F / you may want to
            wear:
          </p>
          <ul className="cards__list">
            {clothingItems
              .filter((item) => {
                return item.weather === weatherData.type;
              })
              .map((item) => {
                return <ItemCard item={item} key={item._id} />;
              })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;

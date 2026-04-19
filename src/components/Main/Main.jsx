import WeatherCard from "../Main/WeatherCard/WeatherCard.jsx";
import ItemCard from "../Main/ItemCard/ItemCard.jsx";
import "./Main.css";

function Main({
  clothingItems,
  weatherData,
  handleCardClick,
  isChecked,
  toggleTempDegree,
}) {
  return (
    <>
      <main className="main">
        <WeatherCard weatherData={weatherData} />
        <section className="cards">
          {}
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
    </>
  );
}

export default Main;

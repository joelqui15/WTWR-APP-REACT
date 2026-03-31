import WeatherCard from "./WeatherCard/WeatherCard";

function Main() {
  return (
    <>
      <main className="main">
        <WeatherCard />
        <section className="cards">
          <p className="cards__header">
            Today is 75&deg;F / you may want to wear:
          </p>
        </section>
      </main>
    </>
  );
}

export default Main;

import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import { defaultClothingItems } from "../../utils/constants.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [weatherData, setWeatherData] = useState({ type: "" });

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header weatherData={weatherData} />
          <Main clothingItems={clothingItems} weatherData={weatherData} />
        </div>
      </div>
    </>
  );
}

export default App;

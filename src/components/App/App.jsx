import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  defaultClothingItems,
  coordinates,
  ApiKey,
} from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import { CurrentTempContext } from "../../context/CurrentTemperatureUnitContext.jsx";

function App() {
  //state

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "Unkown location",
    condition: "",
    isDay: false,
  });
  const [activeModal, setAcvtiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  useEffect(() => {
    getWeatherData(coordinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  //container for all modal conditions to open
  const modals = {
    add: "add-garment",
    preview: "preview-card",
  };

  function handleToggleSwitch() {
    setCurrentTemperatureUnit(() => {
      return currentTemperatureUnit === "F" ? "C" : "F";
    });
  }

  function openModal(modalName) {
    setAcvtiveModal(modalName);
  }

  function closeModal() {
    setAcvtiveModal("");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    openModal(modals.preview);
  }

  function handleSubmit(e) {
    e.preventDefault;
    setClothingItems([item, ...clothingItems]);
  }

  return (
    <>
      <CurrentTempContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitch }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              weatherData={weatherData}
              openModal={() => {
                openModal(modals.add);
              }}
            />
            <Main
              clothingItems={clothingItems}
              weatherData={weatherData}
              onClose={closeModal}
              handleCardClick={handleCardClick}
            />

            <Footer />
          </div>

          {/* <ModalWithForm
            isOpen={activeModal === modals.add}
            title="New garment"
            buttonText="Add garment"
            onClose={closeModal}
          ></ModalWithForm>*/}
          <ItemModal
            onClose={closeModal}
            isOpen={activeModal === modals.preview}
            card={selectedCard}
          />
          <AddItemModal
            isOpen={activeModal === modals.add}
            title="New garment"
            buttonText="Add garment"
            onClose={closeModal}
          />
        </div>
      </CurrentTempContext.Provider>
    </>
  );
}

export default App;

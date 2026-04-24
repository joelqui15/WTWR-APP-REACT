import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
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

  function handleAddSubmit(data) {
    const inputValues = {
      name: data.name,
      image: data.link,
      weather: data.weather,
    };
    setClothingItems([data, ...clothingItems]);
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
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    clothingItems={clothingItems}
                    weatherData={weatherData}
                    onClose={closeModal}
                    handleCardClick={handleCardClick}
                  />
                }
              />
              <Route
                path="/profile"
<<<<<<< HEAD
                element={
                  <Profile
                    clothingItems={clothingItems}
                    openModal={() => {
                      openModal(modals.add);
                    }}
                  />
                }
=======
                element={<Profile clothingItems={clothingItems} />}
>>>>>>> 9b035bc6f3bb14d23d842aba75027a9031a01ec3
              />
            </Routes>

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
            onAddItem={handleAddSubmit}
          />
        </div>
      </CurrentTempContext.Provider>
    </>
  );
}

export default App;

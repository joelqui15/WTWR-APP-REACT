import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  //defaultClothingItems,
  coordinates,
  apiKey,
} from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import { getClothingItems, addItem, removeItem } from "../../utils/api.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";

function App() {
  //state

  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "Unkown location",
    condition: "",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    getWeatherData(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    getClothingItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  //container for all modal conditions to open
  const modals = {
    add: "add-garment",
    preview: "preview-card",
    delete: "delete",
    register: "register",
    login: "login",
  };

  function handleToggleSwitch() {
    setCurrentTemperatureUnit(() => {
      return currentTemperatureUnit === "F" ? "C" : "F";
    });
  }

  function openModal(modalName) {
    setActiveModal(modalName);
  }

  function closeModal() {
    setActiveModal("");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    openModal(modals.preview);
  }

  function handleItemDeletion(itemId) {
    removeItem(itemId)
      .then(() => {
        const filteredList = clothingItems.filter((item) => {
          return item._id !== itemId;
        });
        setClothingItems(filteredList);
        closeModal();
      })
      .catch(console.error);
    //pass handler to itemModal
  }

  function handleAddSubmit(data) {
    const itemData = {
      name: data.name,
      imageUrl: data.imageUrl,
      weather: data.weather,
    };

    addItem(itemData)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeModal();
      })
      .catch(console.error);
  }

  return (
    <>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitch }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              openAddModal={() => {
                openModal(modals.add);
              }}
              openRegisterModal={() => {
                openModal(modals.register);
              }}
              openLoginModal={() => {
                openModal(modals.login);
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
                element={
                  <Profile
                    clothingItems={clothingItems}
                    openModal={() => {
                      openModal(modals.add);
                    }}
                    handleCardClick={handleCardClick}
                  />
                }
              />
            </Routes>

            <Footer />
          </div>

          <ItemModal
            onClose={closeModal}
            isOpen={activeModal === modals.preview}
            card={selectedCard}
            openModal={() => {
              openModal(modals.delete);
            }}
            onDelete={handleItemDeletion}
          />
          <DeleteModal
            isOpen={activeModal === modals.delete}
            onClose={closeModal}
            onDelete={handleItemDeletion}
            card={selectedCard}
          />
          <AddItemModal
            isOpen={activeModal === modals.add}
            title="New garment"
            buttonText="Add garment"
            onClose={closeModal}
            onAddItem={handleAddSubmit}
          />
          <RegistrationModal
            isOpen={activeModal === modals.register}
            onClose={closeModal}
          />
          <LoginModal
            isOpen={activeModal === modals.login}
            onClose={closeModal}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </>
  );
}

export default App;

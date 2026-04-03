import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import {
  defaultClothingItems,
  coordinates,
  ApiKey,
} from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";

function App() {
  //state

  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: {
      F: 999,
      C: 999,
    },
  });
  const [activeModal, setAcvtiveModal] = useState("");

  useEffect(() => {
    getWeatherData(coordinates, ApiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  });

  //container for all modal conditions to open
  const modals = {
    add: "add-garment",
    preview: "previewActive",
  };

  function openModal(modalName) {
    setAcvtiveModal(modalName);
  }

  function closeModal() {
    setAcvtiveModal("");
  }
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header
            weatherData={weatherData}
            openModal={() => {
              openModal(modals.add);
            }}
          />
          <Main clothingItems={clothingItems} weatherData={weatherData} />
        </div>
        <ModalWithForm
          isOpen={activeModal === modals.add}
          title="New garment"
          buttonText="Add garment"
          onClose={closeModal}
        >
          <fieldset className=" form__fieldset form__fieldset-info">
            <label htmlFor="name" className="form__label form__label-name">
              Name
              <br />
              <input
                id="name"
                type="text"
                name="name"
                className="form__input form__input-name"
                placeholder="Name"
              />
            </label>
            <label htmlFor="url" className="form__label form__label-image">
              Image
              <br />
              <input
                id="url"
                type="url"
                name="url"
                className="form__input form__input-name"
                placeholder="Image URL"
              />
            </label>
          </fieldset>
          <fieldset className=" form__fieldset form__fieldset-radio">
            <label
              htmlFor="radio__hot"
              className="form__label form__label-radio"
            >
              Select the weather type:
              <br />
              <input
                value="hot"
                id="radio__hot"
                type="radio"
                name="weather"
                className="form__input form__input-radio"
              />
              Hot
            </label>
            <label
              htmlFor="radio__warm"
              className="form__label form__label-radio"
            >
              <input
                value="warm"
                id="radio__warm"
                type="radio"
                name="weather"
                className="form__input form__input-radio"
              />
              Warm
            </label>
            <label
              htmlFor="radio__cold"
              className="form__label form__label-radio"
            >
              <input
                value="cold"
                id="radio__cold"
                type="radio"
                name="weather"
                className="form__input form__input-radio"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      </div>
    </>
  );
}

export default App;

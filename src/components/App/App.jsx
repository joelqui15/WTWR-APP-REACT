import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
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
          <ModalWithForm>
            <fieldset className="form__fieldset-info">
              <label htmlFor="name" className="form__label form__label-name">
                Name
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
                <input
                  id="url"
                  type="url"
                  name="url"
                  className="form__input form__input-name"
                  placeholder="Image URL"
                />
              </label>
            </fieldset>
            <fieldset className="form__fieldset_radio">
              <label
                htmlFor="radio__hot"
                className="form__label form__label-radio"
              >
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
      </div>
    </>
  );
}

export default App;

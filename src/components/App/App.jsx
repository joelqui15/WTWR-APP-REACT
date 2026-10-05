import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Footer from "../Footer/Footer.jsx";
import {
  //defaultClothingItems,
  coordinates,
  apiKey,
} from "../../utils/constants.js";
import { getWeatherData, filterWeatherData } from "../../utils/weatherApi.js";
import {
  getClothingItems,
  addItem,
  removeItem,
  editUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import * as auth from "../../utils/auth.js";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

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
    edit: "edit",
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
    const token = localStorage.getItem("jwt");
    removeItem(itemId, token)
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
    const token = localStorage.getItem("jwt");
    addItem(itemData, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeModal();
      })
      .catch(console.error);
  }

  function handleRegistration({ name, avatar, email, password }) {
    return auth
      .register(name, avatar, email, password)
      .then(() => {
        closeModal();
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleLogin({ email, password }) {
    return auth
      .login(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);

          return auth.getUserAndCheckToken(res.token);
        }
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  }

  function handleEditProfile(profileData) {
    const token = localStorage.getItem("jwt");

    editUser(profileData, token)
      .then((updatedUser) => {
        setCurrentUser((prev) => ({
          ...prev,
          ...updatedUser,
        }));
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    !isLiked
      ? addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      return;
    }
    auth
      .getUserAndCheckToken(token)

      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
                      onCardLike={handleCardLike}
                      isLoggedIn={isLoggedIn}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                      <Profile
                        clothingItems={clothingItems}
                        openModal={() => {
                          openModal(modals.add);
                        }}
                        openEditModal={() => {
                          openModal(modals.edit);
                        }}
                        handleCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        isLoggedIn={isLoggedIn}
                        onSignOut={handleSignOut}
                      />
                    </ProtectedRoute>
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
              onSecondaryButtonClick={() => {
                openModal(modals.login);
              }}
              onRegistration={handleRegistration}
            />
            <LoginModal
              isOpen={activeModal === modals.login}
              onClose={closeModal}
              onSecondaryButtonClick={() => {
                openModal(modals.register);
              }}
              onLogin={handleLogin}
            />
            <EditProfileModal
              isOpen={activeModal === modals.edit}
              onClose={closeModal}
              onEdit={handleEditProfile}
            />
          </div>
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

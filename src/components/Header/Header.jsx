import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";

import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  openAddModal,
  openRegisterModal,
  openLoginModal,
  weatherData,
  isLoggedIn,
}) {
  const { name, avatar } = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="WTWR LOGO" />
      </Link>
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__actions">
        <ToggleSwitch />

        {isLoggedIn === true ? (
          <>
            <button className="header__add-btn" onClick={openAddModal}>
              + Add clothes
            </button>

            <div className="header__avatar-section">
              <p className="header__avatar-name">{name}</p>
              {avatar ? (
                <>
                  <Link to="/profile">
                    <img
                      src={avatar}
                      alt="User avatar"
                      className="header__avatar-pic"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <div className="header__avatar-placeholder">
                    {name?.charAt(0).toUpperCase()}
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <div className="header__login-signup">
            <button className="header__sign-btn" onClick={openRegisterModal}>
              Sign Up
            </button>
            <button className="header__login-btn" onClick={openLoginModal}>
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

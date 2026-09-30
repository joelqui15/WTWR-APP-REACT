import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import AvatarPic from "../../images/user-avatar.png";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function Header({
  openAddModal,
  openRegisterModal,
  openLoginModal,
  weatherData,
  isLoggedIn,
}) {
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
              <p className="header__avatar-name">Joel Quinones</p>

              <Link to="/profile">
                <img
                  src={AvatarPic}
                  alt="User avatar"
                  className="header__avatar-pic"
                />
              </Link>
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

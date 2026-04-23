import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import AvatarPic from "../../images/user-avatar.png";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function Header({ openModal, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="WTWR LOGO" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch />
        <button className="header__add-btn" onClick={openModal}>
          + Add clothes
        </button>
        <div className="header__avatar-section">
          <p className="header__avatar-name">Joel Quinones</p>
          <Link to="/profile">
            <img
              src={AvatarPic}
              alt="user avatar photo"
              className="header__avatar-pic"
            />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;

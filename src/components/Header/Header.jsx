import { useState } from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import AvatarPic from "../../images/user-avatar.png";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

function Header({ isChecked, openModal, weatherData, onChange }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} alt="WTWR LOGO" />
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch onChange={onChange} isChecked={isChecked} />
        <button className="header__add-btn" onClick={openModal}>
          + Add clothes
        </button>
        <div className="header__avatar-section">
          <p className="header__avatar-name">Joel Quinones</p>
          <img
            src={AvatarPic}
            alt="user avatar photo"
            className="header__avatar-pic"
          />
        </div>
      </header>
    </>
  );
}

export default Header;

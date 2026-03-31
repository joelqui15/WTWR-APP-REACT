import "./Header.css";
import Logo from "../../images/Logo.svg";
import AvatarPic from "../../images/user-avatar.png";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <img className="header__logo" src={Logo} alt="WTWR LOGO" />
        <p className="header__date-location">{currentDate}, Anchorage</p>
        <button className="header__add-btn">+Add clothes</button>
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

import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "../SideBar/SideBar.css";
import AvatarPic from "../../../images/user-avatar.png";

function SideBar({ openEditModal }) {
  const { name, avatar } = useContext(CurrentUserContext);

  return (
    <aside className="sideBar">
      <div className="sideBar__header">
        {avatar ? (
          <img className="sideBar__avatar" src={avatar} alt={name} />
        ) : (
          <div className="sideBar__avatar-placeholder">
            {name?.charAt(0).toUpperCase()}
          </div>
        )}
        <p className="sideBar__avatar-name">{name}</p>
      </div>
      <div className="sideBar__buttons">
        <button className="sideBar__edit-button" onClick={openEditModal}>
          Change profile data
        </button>
        <button className="sideBar__logout-button">Log out</button>
      </div>
    </aside>
  );
}

export default SideBar;

import { useContext } from "react";
import "../Profile/Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

function Profile({ clothingItems, openModal, handleCardClick, openEditModal }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <SideBar openEditModal={openEditModal} />

      <div className="profile__content">
        <div className="profile__header">
          <p className="profile__header-title">Your items</p>
          <button
            type="button"
            className="profile__add-btn"
            onClick={openModal}
          >
            +Add new
          </button>
        </div>
        <ul className="profile__cards-list">
          {clothingItems
            .filter((item) => {
              return item.owner === currentUser._id;
            })
            .map((item) => {
              return (
                <ClothesSection
                  item={item}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                  key={item._id}
                />
              );
            })}
        </ul>
      </div>
    </section>
  );
}

export default Profile;

import "../Profile/Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";
import SideBar from "./SideBar/SideBar.jsx";

function Profile({ clothingItems, openModal, handleCardClick }) {
  return (
    <>
      <section className="profile">
        <SideBar />

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
            {clothingItems.map((item) => {
              return (
                <ClothesSection
                  item={item}
<<<<<<< HEAD
                  handleCardClick={handleCardClick}
                  key={item._id}
=======
                  key={item._id}
                  handleCardClick={handleCardClick}
>>>>>>> 605497a1c383e966737237852d72b77768c6574d
                />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Profile;

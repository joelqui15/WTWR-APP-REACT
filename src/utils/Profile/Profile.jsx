import "../Profile/Profile.css";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({ clothingItems }) {
  return (
    <>
      <div className="profile">
        <p className="profile__title">Your Items</p>
        <button className="addNew__btn">+ Add new</button>
        <ul className="profile__cards-list">
          {clothingItems.map((item) => {
            return <ClothesSection item={item} key={item._id} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default Profile;

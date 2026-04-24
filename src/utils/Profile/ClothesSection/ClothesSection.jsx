import ItemCard from "../../../components/Main/ItemCard/ItemCard";

function ClothesSection({ item }) {
  return (
    <>
      <li className="profile__card">
        <p className="profile__card-title">{item.name}</p>
        <img src={item.link} alt={item.name} className="profile__card-image" />
      </li>
    </>
  );
}

export default ClothesSection;

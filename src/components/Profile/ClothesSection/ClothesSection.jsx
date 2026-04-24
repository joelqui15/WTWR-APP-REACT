import "../ClothesSection/ClothesSection.css";
import ItemCard from "../../Main/ItemCard/ItemCard";

function ClothesSection({ item, handleCardClick }) {
  return (
    <>
      <ItemCard item={item} handleCardClick={handleCardClick} />
    </>
  );
}

export default ClothesSection;

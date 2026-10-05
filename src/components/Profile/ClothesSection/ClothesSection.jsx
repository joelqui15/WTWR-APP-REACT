import ItemCard from "../../Main/ItemCard/ItemCard";

function ClothesSection({ item, handleCardClick, onCardLike, isLoggedIn }) {
  return (
    <ItemCard
      item={item}
      handleCardClick={handleCardClick}
      onCardLike={onCardLike}
      isLoggedIn={isLoggedIn}
      key={item._id}
    />
  );
}

export default ClothesSection;

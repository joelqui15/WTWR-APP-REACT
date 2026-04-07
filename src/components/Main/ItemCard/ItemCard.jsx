import "../ItemCard/ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  return (
    <>
      <li className="card">
        <p className="card__title">{item.name}</p>
        <img
          src={item.link}
          alt={item.name}
          onClick={() => {
            handleCardClick(item);
          }}
          className="card__image"
        />
      </li>
    </>
  );
}

export default ItemCard;

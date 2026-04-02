import "../ItemCard/ItemCard.css";

function ItemCard({ item }) {
  return (
    <>
      <li className="card">
        <p className="card__title">{item.name}</p>
        <img src={item.link} alt={item.name} className="card__image" />
      </li>
    </>
  );
}

export default ItemCard;

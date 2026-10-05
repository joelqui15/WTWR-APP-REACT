import { useContext } from "react";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";
import "../ItemCard/ItemCard.css";

function ItemCard({ item, handleCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = isLiked
    ? "card__like-btn card__like-btn_active"
    : "card__like-btn";
  const itemLikeButtonVisibilityClassName = isLoggedIn
    ? "card__like-btn"
    : "card__like-btn_hidden";

  function handleLike() {
    onCardLike({
      _id: item._id,
      isLiked,
    });
  }
  return (
    <li className="card">
      <div className="card__header">
        <p className="card__title">{item.name}</p>
        <button
          className={`${itemLikeButtonClassName} ${itemLikeButtonVisibilityClassName}`}
          onClick={handleLike}
        ></button>
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        onClick={() => {
          handleCardClick(item);
        }}
        className="card__image"
      />
    </li>
  );
}

export default ItemCard;

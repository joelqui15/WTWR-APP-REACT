import { useEffect } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "../ItemModal/ItemModal.css";

function ItemModal({ onClose, isOpen, card, openModal }) {
  useEffect(() => {
    if (!isOpen) return;
    function handleEscape(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  function handleCloseClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  const itemDeleteButtonClassName = `modal__delete-button ${isOwn ? "" : "modal__delete-button_hidden"}`;

  return (
    <div
      className={isOpen ? "modal" : "modal__hidden_type_preview"}
      onClick={handleCloseClick}
    >
      <div className="modal__preview">
        <button
          type="button"
          className="modal__close-btn_type_preview"
          onClick={onClose}
        ></button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image_type_preview"
        />
        <div className="modal__footer">
          <div className="modal__descriptions">
            <p className="modal__title_type_preview">{card.name}</p>
            <p className="modal__weather_type_preview">
              Weather: {card.weather}
            </p>
          </div>
          <button
            type="button"
            className={itemDeleteButtonClassName}
            onClick={openModal}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

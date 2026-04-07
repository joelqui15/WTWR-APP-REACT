import { useEffect } from "react";
import "../ItemModal/ItemModal.css";

function ItemModal({ onClose, isOpen, card }) {
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

  return (
    <>
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
            src={card.link}
            alt={card.name}
            className="modal__image_type_preview"
          />
          <div className="modal__footer">
            <p className="modal__title_type_preview">{card.name}</p>
            <p className="modal__weather_type_preview">
              Weather: {card.weather}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemModal;

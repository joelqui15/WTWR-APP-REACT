import "../ModalWithForm/ModalWithForm.css";

function ModalWithForm({ children, isOpen }) {
  return (
    <>
      <div className={isOpen ? "modal" : "modal__hidden"}>
        <form name="form" className="modal__form">
          <h2 className="modal__title">title</h2>
          <button type="button" className="modal__close-btn">
            X
          </button>
          {children}
          <button type="submit" className="modal__submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}

export default ModalWithForm;

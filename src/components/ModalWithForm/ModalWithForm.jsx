function ModalWithForm(props) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">title</p>
        <button type="button" className="modal__close-btn">
          X
        </button>
        <form name="form" className="form">
          {props.children}
        </form>
        <button type="submit" className="modal__close-btn"></button>
      </div>
    </>
  );
}

export default ModalWithForm;

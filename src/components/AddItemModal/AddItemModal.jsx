import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

function AddItemModal({ isOpen, onClose, handleSubmit }) {
  const [values, handleChange] = useForm({
    name: "",
    image: "",
    type: "",
  });
  return (
    <>
      <ModalWithForm
        isOpen={isOpen}
        onClose={onClose}
        title="New garment"
        name="new-card"
        buttonText="add-garment"
        onSubmit={handleSubmit}
        handleChange={handleChange}
      >
        <fieldset className=" form__fieldset form__fieldset-info">
          <label htmlFor="name" className="form__label form__label-name">
            Name
            <br />
            <input
              id="name"
              type="text"
              name="name"
              className="form__input form__input-name"
              placeholder="Name"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="url" className="form__label form__label-image">
            Image
            <br />
            <input
              id="url"
              type="url"
              name="url"
              className="form__input form__input-name"
              placeholder="Image URL"
              onChange={handleChange}
            />
          </label>
        </fieldset>
        <fieldset className=" form__fieldset form__fieldset-radio">
          <legend className="form__radio-legend">
            Select the weather type:
          </legend>
          <label htmlFor="radio__hot" className=" form__label-radio">
            <input
              value="hot"
              id="radio__hot"
              type="radio"
              name="weather"
              className="form__input form__input-radio"
              onChange={handleChange}
            />
            <span className="radio__text">Hot</span>
          </label>
          <label htmlFor="radio__warm" className=" form__label-radio">
            <input
              value="warm"
              id="radio__warm"
              type="radio"
              name="weather"
              className="form__input form__input-radio"
              onChange={handleChange}
            />
            Warm
          </label>
          <label htmlFor="radio__cold" className=" form__label-radio">
            <input
              value="cold"
              id="radio__cold"
              type="radio"
              name="weather"
              className="form__input form__input-radio"
              onChange={handleChange}
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </>
  );
}

export default AddItemModal;

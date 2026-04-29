import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

function AddItemModal({ isOpen, onClose, onAddItem }) {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weather: "",
  };

  const { values, handleChange, setValues } = useForm(defaultValues);

  function handleReset() {
    setValues(defaultValues);
  }

  function handleAddSubmit(e) {
    e.preventDefault();
    onAddItem(values, handleReset());
  }
  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="New garment"
      name="new-card"
      buttonText="add-garment"
      onSubmit={handleAddSubmit}
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
            value={values.name}
            required
            minLength={2}
          />
        </label>
        <label htmlFor="url" className="form__label form__label-image">
          Image
          <br />
          <input
            id="url"
            type="url"
            name="imageUrl"
            className="form__input form__input-name"
            placeholder="Image URL"
            onChange={handleChange}
            value={values.imageUrl}
            required
          />
        </label>
      </fieldset>
      <fieldset className=" form__fieldset form__fieldset-radio">
        <legend className="form__radio-legend">Select the weather type:</legend>
        <label htmlFor="radio__hot" className=" form__label-radio">
          <input
            id="radio__hot"
            type="radio"
            name="weather"
            className="form__input form__input-radio"
            onChange={handleChange}
            value="hot"
            checked={values.weather === "hot"}
          />
          <span className="radio__text">Hot</span>
        </label>
        <label htmlFor="radio__warm" className=" form__label-radio">
          <input
            id="radio__warm"
            type="radio"
            name="weather"
            className="form__input form__input-radio"
            onChange={handleChange}
            value="warm"
            checked={values.weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="radio__cold" className=" form__label-radio">
          <input
            id="radio__cold"
            type="radio"
            name="weather"
            className="form__input form__input-radio"
            onChange={handleChange}
            value="cold"
            checked={values.weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;

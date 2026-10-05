import { useEffect, useContext } from "react";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onEdit }) {
  const { name, avatar } = useContext(CurrentUserContext);

  useEffect(() => {
    if (isOpen) {
      setValues({ name, avatar });
    } else {
      handleReset();
    }
  }, [isOpen, name, avatar]);

  const defaultValues = {
    name: "",
    avatar: "",
  };

  const errorData = {
    name: {
      required: true,
      minLength: 2,
      message: "Please enter 2 characters or more...",
    },

    avatar: {
      required: true,
      pattern: /^https?:\/\/.+/,
      message: "Enter a valid URL...",
    },
  };

  const { values, handleChange, setValues, errors, setErrors } = useForm(
    defaultValues,
    errorData,
  );

  function handleReset() {
    setValues(defaultValues);
    setErrors({});
  }

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Change profile data"
      buttonText="Save changes"
      onSubmit={handleSubmit}
    >
      <fieldset className=" form__fieldset form__fieldset-info">
        <label htmlFor="name" className="form__label form__label-name">
          Name*
          <br />
          <input
            id="name"
            type="text"
            name="name"
            minLength={2}
            className="form__input form__input-name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            required
          />
          {errors.name && (
            <span
              className={`form__error-msg ${errors.name ? "form__error-msg_visible" : "form__error-msg_hidden"}`}
            >
              {errors.name}
            </span>
          )}
        </label>
        <label htmlFor="avatar" className="form__label form__label-avatar">
          Avatar*
          <br />
          <input
            id="avatar"
            type="url"
            name="avatar"
            className="form__input form__input-avatar"
            placeholder="Avatar"
            onChange={handleChange}
            value={values.avatar}
            required
          />
          {errors.avatar && (
            <span
              className={`form__error-msg ${errors.avatar ? "form__error-msg_visible" : "form__error-msg_hidden"}`}
            >
              {errors.avatar}
            </span>
          )}
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default EditProfileModal;

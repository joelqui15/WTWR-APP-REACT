import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useForm from "../../hooks/useForm.js";

function RegistrationModal({
  isOpen,
  onClose,
  onSecondaryButtonClick,
  onRegistration,
}) {
  useEffect(() => {
    if (!isOpen) {
      handleReset();
    }
  }, [isOpen]);

  const defaultValues = {
    email: "",
    password: "",
    name: "",
    avatar: "",
  };

  const errorData = {
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },

    password: {
      required: true,
    },

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
    onRegistration(values);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      buttonText="Sign Up"
      secondaryButtonText="or Log in"
      onSecondaryButtonClick={onSecondaryButtonClick}
      onSubmit={handleSubmit}
    >
      <fieldset className=" form__fieldset form__fieldset-info">
        <label htmlFor="email" className="form__label form__label-email">
          Email*
          <br />
          <input
            id="email"
            type="email"
            name="email"
            className="form__input form__input-email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            required
          />
          {errors.email && (
            <span
              className={`form__error-msg ${errors.email ? "form__error-msg_visible" : "form__error-msg_hidden"}`}
            >
              {errors.email}
            </span>
          )}
        </label>
        <label htmlFor="password" className="form__label form__label-password">
          Password*
          <br />
          <input
            id="password"
            type="password"
            name="password"
            className="form__input form__input-password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password}
            required
          />
          {errors.password && (
            <span
              className={`form__error-msg ${errors.password ? "form__error-msg_visible" : "form__error-msg_hidden"}`}
            >
              {errors.password}
            </span>
          )}
        </label>
        <label htmlFor="name" className="form__label form__label-name">
          Name*
          <br />
          <input
            id="name"
            type="text"
            name="name"
            min-length={2}
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
          Avatar URL*
          <br />
          <input
            id="avatar"
            type="url"
            name="avatar"
            className="form__input form__input-avatar"
            placeholder="Avatar URL"
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

export default RegistrationModal;

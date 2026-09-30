import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      handleReset();
    }
  }, [isOpen]);

  const defaultValues = {
    email: "",
    password: "",
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
  };

  const { values, handleChange, setValues, errors, setErrors } = useForm(
    defaultValues,
    errorData,
  );

  function handleReset() {
    setValues(defaultValues);
    setErrors({});
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
      buttonText="Log In"
      secondaryButtonText="or Sign up"
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
      </fieldset>
    </ModalWithForm>
  );
}

export default LoginModal;

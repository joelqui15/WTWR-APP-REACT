import "../ToggleSwitch/ToggleSwitch.css";

const ToggleSwitch = ({ isChecked, onChange }) => {
  return (
    <>
      <label htmlFor="switch">
        <input
          name="switch"
          type="checkbox"
          id="switch"
          className="switch__input"
          onChange={onChange}
        />
        <span className="switch__button"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;

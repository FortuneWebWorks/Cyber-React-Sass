import '../styles/switch.scss';

const Switch = () => {
  return (
    <div className="switch__container">
      <input className="switch" type="checkbox" id="switch" />
      <label className="switch__label" for="switch">
        Toggle
      </label>
    </div>
  );
};

export default Switch;

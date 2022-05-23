import '../styles/switch.scss';

const Switch = () => {
  return (
    <div className="switch__container">
      <input className="switch" type="checkbox" id="switch" />
      <label className="switch__label" htmlFor="switch">
        Toggle
      </label>
    </div>
  );
};

export default Switch;

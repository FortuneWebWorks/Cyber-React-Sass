import '../styles/switch.scss';

const Switch = ({ title, mode }) => {
  return (
    <div className={`switch__main-container ${mode}`}>
      <span>{title}</span>
      <div className="switch__container">
        <input className="switch" type="checkbox" id="switch" />
        <label className="switch__label" htmlFor="switch">
          Toggle
        </label>
      </div>
    </div>
  );
};

export default Switch;

import '../styles/switch.scss';

const Switch = ({ title, mode, fontSize }) => {
  return (
    <div className={`switch__main-container ${mode}`}>
      <span style={{ fontSize: fontSize || '' }}>{title}</span>
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

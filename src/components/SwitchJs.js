import '../styles/SwitchJs.scss';

const SwitchJs = () => {
  return (
    <div className="switchjs__container">
      <label className="switch">
        <input type="checkbox" />
        <div className="slider"></div>
      </label>
    </div>
  );
};

export default SwitchJs;

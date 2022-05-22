import '../styles/input.scss';

const Input = ({ title, placeholder, callBack }) => {
  return (
    <div className="input__container">
      <span className="input__title">{title}</span>
      <input
        onChange={(e) => callBack && callBack(e.target.value)}
        className="input__input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

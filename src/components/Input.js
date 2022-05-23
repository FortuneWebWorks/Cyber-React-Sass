import '../styles/input.scss';

const Input = ({ title, placeholder, callBack }) => {
  return (
    <div className="input__container">
      <div
        className={`input__title-contianer ${title.length > 22 ? 'over' : ''}`}
      >
        <span className="">{title}</span>
      </div>
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

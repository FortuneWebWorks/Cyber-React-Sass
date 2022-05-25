import '../styles/input.scss';

const Input = ({ title, placeholder, callBack, fontSize, value }) => {
  return (
    <div className="input__container">
      <div
        className={`input__title-contianer ${title.length > 22 ? 'over' : ''}`}
      >
        <span style={{ fontSize: fontSize || '' }} className="">
          {title}
        </span>
      </div>
      <input
        onChange={(e) => callBack && callBack(e.target.value, title)}
        className="input__input"
        type="text"
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
};

export default Input;

import '../styles/input.scss';

const Input = ({
  title,
  type,
  placeholder,
  callBack,
  fontSize,
  value,
  require,
}) => {
  return (
    <div className="input__container">
      <div
        className={`input__title-contianer ${title.length > 22 ? 'over' : ''}`}
      >
        <span style={{ fontSize: fontSize || '' }} className="input__title">
          {title}
        </span>
      </div>
      <input
        onChange={(e) => callBack && callBack(e.target.value, title)}
        className="input__input"
        type={type || 'text'}
        placeholder={placeholder}
        defaultValue={value}
        required={require || false}
      />
    </div>
  );
};

export default Input;

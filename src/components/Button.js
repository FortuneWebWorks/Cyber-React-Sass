import '../styles/button.scss';

const Button = ({
  text,
  bgColor = '#1956e2',
  color = '#fff',
  borderRadius,
  padding,
  fontSize = '1.4rem',
  callBack,
}) => {
  return (
    <div className="button__container">
      <button
        className="button"
        style={{
          backgroundColor: bgColor || '',
          color: color || '',
          borderRadius: borderRadius || '',
          padding: padding,
          fontSize: fontSize,
        }}
        onClick={callBack}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

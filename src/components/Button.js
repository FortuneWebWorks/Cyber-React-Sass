import '../styles/button.scss';

const Button = ({ text, color = '#1956e2' }) => {
  return (
    <div className="button__container">
      <button className="button" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
};

export default Button;

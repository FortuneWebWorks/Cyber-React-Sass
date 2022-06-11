import '../styles/progress.scss';

const Proggress = ({ min = 0, max = 100, sign = '%' }) => {
  return (
    <div className="progress__container">
      <input className="progress__range" type="range" min={min} max={max} />
      <div className="progress__lables">
        {min && min !== '' && (
          <span>
            {min}
            {sign}
          </span>
        )}
        {max && max !== '' && (
          <span>
            {max}
            {sign}
          </span>
        )}
      </div>
    </div>
  );
};

export default Proggress;

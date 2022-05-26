import { useState } from 'react';
import '../styles/timer.scss';

const Timer = ({ items, defaultActive }) => {
  const [active, setActive] = useState(defaultActive || '');

  const onTimeChangeHandler = (item) => {
    setActive(item);
  };

  return (
    <div className="timer">
      <img
        src="https://picsum.photos/17"
        alt=""
        style={{ borderRaius: '50%' }}
      />

      {items &&
        items.map((item) => (
          <button
            key={item}
            className={active === item ? 'active' : ''}
            onClick={onTimeChangeHandler.bind(null, item)}
          >
            {item}
          </button>
        ))}
    </div>
  );
};

export default Timer;

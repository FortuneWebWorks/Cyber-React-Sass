import { useState } from 'react';
import '../styles/buttonGroup.scss';

const ButtonGroup = ({ items, activeDefault, callBack }) => {
  const [active, setActive] = useState(items[activeDefault]);

  const onClick = (item) => {
    setActive(item);
    callBack && callBack(item);
  };

  return (
    <div className="buttons__container">
      <div className="buttons__second-container">
        {items.map((item) => (
          <button
            key={item}
            className={item === active && 'active'}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;

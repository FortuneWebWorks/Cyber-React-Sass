import { useState } from 'react';
import '../styles/dropdown.scss';
import { ReactComponent as Arrow } from '../assets/icons/arrow_down.svg';

const DropDown = ({ title, placeholder, items, callBack, fontSize }) => {
  const [value, setValue] = useState('');
  const [placeHolder, setPlaceHolder] = useState(placeholder);
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    if (e.target.classList.contains('dropdown')) {
      setOpen((prev) => !prev);
    }

    if (e.target.tagName === 'LI') {
      setValue(e.target.getAttribute('data'));
      setPlaceHolder(e.target.textContent);
      setOpen((prev) => !prev);
      callBack &&
        callBack(
          e.target.textContent,
          JSON.parse(e.target.getAttribute('data'))
        );
    }
  };

  return (
    <div className="dropdown__container">
      <span className="title" style={{ fontSize: fontSize || '' }}>
        {title}
      </span>
      <ul className="dropdown" onClick={onClick}>
        <div className="dropdown__placeholder__icon">
          <span className="dropdown__placeholder">{placeHolder}</span>
          <Arrow />
        </div>
        <div className="dropdown__scroll">
          <ul className={`dropdown__items ${open ? 'open' : ''}`}>
            {items.map((item) => (
              <li key={item.name || item.title} data={JSON.stringify(item)}>
                {item.name || item.title}
              </li>
            ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default DropDown;

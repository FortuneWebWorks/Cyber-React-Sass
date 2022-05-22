import { useState } from 'react';
import '../styles/dropdown.scss';

const DropDown = ({ title, placeholder, items, callBack }) => {
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
      callBack && callBack(e.target.textContent, e.target.getAttribute('data'));
    }
  };

  return (
    <div className="dropdown__container">
      <span className="title">{title}</span>
      <ul className="dropdown" onClick={onClick}>
        <span className="dropdown__placeholder">{placeHolder}</span>
        <ul className={`dropdown__items ${open && 'open'}`}>
          {items.map((item) => (
            <li key={item.title} data={item.data}>
              {item.title}
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default DropDown;

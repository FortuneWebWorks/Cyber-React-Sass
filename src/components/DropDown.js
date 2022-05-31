import { useEffect, useState } from 'react';
import '../styles/dropdown.scss';
import { ReactComponent as Arrow } from '../assets/icons/arrow_down.svg';

const DropDown = ({
  title,
  placeholder,
  items,
  callBack,
  fontSize,
  value,
  innerColor,
}) => {
  // const [data, setData] = useState('');
  const [placeHolder, setPlaceHolder] = useState(value || placeholder);
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    if (e.target.classList.contains('dropdown')) {
      setOpen((prev) => !prev);
    }

    if (e.target.tagName === 'LI') {
      // setData(e.target.getAttribute('data'));
      setPlaceHolder(e.target.textContent);
      setOpen((prev) => !prev);
      callBack &&
        callBack(
          e.target.textContent,
          JSON.parse(e.target.getAttribute('data'))
        );
    }
  };

  useEffect(() => {
    window &&
      window.addEventListener('pointerdown', (e) => {
        if (!e.target.getAttribute('dropdown')) {
          setOpen(false);
        }
      });
  }, []);

  return (
    <div className="dropdown__container" dropdown="true">
      <span
        className="title"
        style={{ fontSize: fontSize || '' }}
        dropdown="true"
      >
        {title}
      </span>
      <ul className="dropdown" onClick={onClick} dropdown="true">
        <div className="dropdown__placeholder__icon" dropdown="true">
          <span className="dropdown__placeholder" dropdown="true">
            {placeHolder}
          </span>
          <Arrow />
        </div>
        <div className="dropdown__scroll" dropdown="true">
          <ul
            className={`dropdown__items ${open ? 'open' : ''}`}
            dropdown="true"
            style={{ backgroundColor: innerColor }}
          >
            {items.map((item) => (
              <li
                key={item.name || item.title}
                data={JSON.stringify(item)}
                dropdown="true"
              >
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

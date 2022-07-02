import { useEffect, useState } from 'react';
import 'styles/collections/floorVarDropdown.scss';
import { ReactComponent as Arrow } from 'assets/images/chevron-down.svg';
import Proggress from 'components/Proggress';
import MultiRangeSlider from 'components/MultiRangeSlider';

const DropDownFloorVar = ({
  title,
  placeholder,
  items,
  callBack,
  fontSize,
  value,
  innerColor,
  minWidth,
}) => {
  // const [data, setData] = useState('');
  const [placeHolder, setPlaceHolder] = useState(value || placeholder);
  const [open, setOpen] = useState(false);

  const onClick = (e) => {
    if (e.target.classList.contains('dropdown')) {
      setOpen((prev) => !prev);
    }

    // if (e.target.tagName === 'DIV') {
    //   // setData(e.target.getAttribute('data'));
    //   setPlaceHolder(e.target.textContent);
    //   setOpen((prev) => !prev);
    //   callBack &&
    //     callBack(
    //       e.target.textContent,
    //       JSON.parse(e.target.getAttribute('data'))
    //     );
    // }
  };

  useEffect(() => {
    // window &&
    //   window.addEventListener('pointerdown', (e) => {
    //     if (!e.target.getAttribute('dropdown')) {
    //       setOpen(false);
    //     }
    //   });
  }, []);

  return (
    <div className='floor-var__dropdown' dropdown='true'>
      <span
        className='title'
        style={{ fontSize: fontSize || '', minWidth: minWidth || '' }}
        dropdown='true'>
        {title}
      </span>
      <ul className='dropdown' onClick={onClick} dropdown='true'>
        <div className='dropdown__placeholder__icon' dropdown='true'>
          <span className='dropdown__placeholder' dropdown='true'>
            {placeHolder}
          </span>
          <Arrow />
        </div>
        <div className='dropdown__scroll' dropdown='true'>
          <ul
            className={`dropdown__items ${open ? 'open' : ''}`}
            dropdown='true'
            style={{ backgroundColor: innerColor }}>
            <div dropdown='true' className='dropdown_items'>
              <li>
                <div className='sign'>%</div>
                <MultiRangeSlider
                  min={-1000}
                  max={1000}
                  onChange={({ min, max }) =>
                    // console.log(`min = ${min}, max = ${max}`)
                    'hello'
                  }
                />
              </li>

              <li>
                <div className='sign'>X</div>
                <MultiRangeSlider
                  min={-1000}
                  max={1000}
                  onChange={({ min, max }) =>
                    // console.log(`min = ${min}, max = ${max}`)
                    'hello'
                  }
                />
              </li>
            </div>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default DropDownFloorVar;

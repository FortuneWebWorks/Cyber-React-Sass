import '../styles/navigator.scss';
import { useState, useRef } from 'react';

const Navigator = ({
  items = [
    { name: 'Bijan maa' },
    { name: 'fdadfsdf maa' },
    { name: 'sadf adfs' },
    { name: 'sdfad maa' },
    { name: 'Milad maa' },
    { name: 'Saman' },
    { name: 'cow' },
  ],
}) => {
  const [active, setActive] = useState(0);
  let navigator = useRef(null);
  const moveStep = -290.3;

  const navigateHandler = (e) => {
    if (e.target.id) {
      setActive(+e.target.id);

      if (e.target.id > 3) {
        navigator.style.transform = `translateX(${
          moveStep * (e.target.id - 3)
        }px)`;
      } else {
        navigator.style.transform = `translateX(0)`;
      }
    }
  };

  return (
    <div className="navigator">
      <h2>Today's Mint</h2>

      <div className="cards__navigator">
        <div className="navigator__cards" ref={(el) => (navigator = el)}>
          {items &&
            items.map((item, index) => (
              <div
                className={`navigator__card ${
                  active === index ? 'active' : ''
                }`}
                key={index}
              >
                <img
                  className="navigator__card_image"
                  src="https:picsum.photos/58"
                  alt=""
                />

                <div className="navigator__card_text">
                  <span className="navigator__card_text_name">{item.name}</span>
                  <span className="navigator__card_text_date">
                    December 3 , 12:45
                  </span>
                  <div className="navigator__card_text_time">
                    <span>0s</span>
                    <span>In Presale</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="navigator__buttons" onClick={navigateHandler}>
        {items.map((item, index) => (
          <button
            key={index}
            id={index}
            className={index === active ? 'active' : ''}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Navigator;

import '../styles/navigator.scss';
import { useEffect, useState, useRef } from 'react';

const Navigator = ({
  items = [
    { name: '1', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: '5', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: 'Bijan maa', image: 'https:picsum.photos/5' },
    { name: '9', image: 'https:picsum.photos/5' },
  ],
}) => {
  const [active, setActive] = useState(0);
  let navigator = useRef(null);
  const allSteps = items.slice(3, items.length);

  useEffect(() => {
    if (items.length === 1) {
      navigator.style.justifyContent = 'center';
    } else if (items.length === 2 || items.length === 3) {
      navigator.style.justifyContent = 'space-evenly';
    } else {
      navigator.style.justifyContent = 'flex-start';
    }
  }, [items]);

  const navigateHandler = (e) => {
    if (e.target.id) {
      setActive(+e.target.id);

      const card = navigator.querySelectorAll('.navigator__card');

      const gap = Math.abs(
        card[0].getBoundingClientRect().left +
          card[0].getBoundingClientRect().width -
          card[1].getBoundingClientRect().left
      );

      const moveStep = card[0].getBoundingClientRect().width + gap;

      console.log(gap);

      navigator.style.transform = `translateX(${-moveStep * e.target.id}px)`;
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
                key={index}
                className={`navigator__card ${
                  active === index ? 'active' : ''
                }`}
              >
                <img
                  className="navigator__card_image"
                  src={item.image + (8 + index).toString()}
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
        {allSteps.map((_, index) => (
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

import '../styles/navigator.scss';
import { useEffect, useState, useRef } from 'react';

const Navigator = ({
  items = [
    { name: '1', image: 'https:picsum.photos/5' },
    { name: '2', image: 'https:picsum.photos/5' },
    { name: '3', image: 'https:picsum.photos/5' },
    { name: '4', image: 'https:picsum.photos/5' },
    { name: '5', image: 'https:picsum.photos/5' },
    { name: '6', image: 'https:picsum.photos/5' },
    { name: '7', image: 'https:picsum.photos/5' },
    { name: '8', image: 'https:picsum.photos/5' },
    { name: '9', image: 'https:picsum.photos/5' },
  ],
}) => {
  const [rowCount, setRowCount] = useState(3);
  const [active, setActive] = useState(0);
  let navigator = useRef(null);
  const allSteps = items.slice(3, items.length);
  // const [start, setStart] = useState(0);
  // const [end, setEnd] = useState(rowCount);

  useEffect(() => {
    // if (items.length === 1) {
    //   navigator.current.style.justifyContent = 'center';
    // } else if (items.length === 2 || items.length === 3) {
    //   navigator.current.style.justifyContent = 'space-evenly';
    // } else {
    //   rowCount === 1
    //     ? (navigator.current.style.justifyContent = 'center')
    //     : (navigator.current.style.justifyContent = 'space-between');
    // }
    sizeHandler();

    window && window.addEventListener('resize', sizeHandler);

    return () => {
      window.removeEventListener('resize', sizeHandler);
    };
  }, [items]);

  const navigateHandler = (e) => {
    if (e.target.id) {
      setActive(+e.target.id);

      const card = navigator.current.querySelectorAll('.navigator__card');

      const gap = Math.abs(
        card[0].getBoundingClientRect().left +
          card[0].getBoundingClientRect().width -
          card[1].getBoundingClientRect().left
      );

      const moveStep = card[0].getBoundingClientRect().width + gap;

      card.forEach((item) => {
        item.style.transform = `translate(${-moveStep * e.target.id}px, -50%)`;
      });
    }
  };

  const sizeHandler = (e) => {
    const card = navigator.current.querySelectorAll('.navigator__card');
    const cardWidth = card[0].getBoundingClientRect().width;

    const row =
      Math.ceil(navigator.current.getBoundingClientRect().width / cardWidth) -
      1;

    console.log(row);

    if (rowCount !== row) {
      setRowCount(row);
      card.forEach((item) => {
        item.style.transform = `translate(0, -50%)`;
      });
    }

    setSizes();
  };

  const setSizes = () => {
    const card = navigator.current.querySelectorAll('.navigator__card');

    const cardWidth = card[0].getBoundingClientRect().width;
    let gap =
      navigator.current.getBoundingClientRect().width - cardWidth * rowCount;

    gap = rowCount > 1 ? gap / (rowCount - 1) : 1;

    card.forEach((item, index) => {
      if (gap !== 1) {
        item.style.left = (cardWidth + gap) * index + 'px';
      } else {
        item.style.left = 100 * index + 1 + '%';
      }
    });
  };

  return (
    <div className="navigator">
      <h2>Today's Mint</h2>

      <div className="cards__navigator">
        <div className="navigator__cards" ref={navigator}>
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

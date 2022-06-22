import { useState } from "react";
import "../styles/timer.scss";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";

const Timer = ({ items, defaultActive, callBack }) => {
  const [active, setActive] = useState(defaultActive || "");

  const onTimeChangeHandler = (item) => {
    setActive(item);
    callBack(item);
  };

  return (
    <div className="timer">
      <Clock />

      {items &&
        items.map((item) => (
          <button
            key={item}
            className={active === item ? "active" : ""}
            onClick={onTimeChangeHandler.bind(null, item)}
          >
            {item}
          </button>
        ))}
    </div>
  );
};

export default Timer;

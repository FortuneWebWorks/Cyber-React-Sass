import { useState } from 'react';
import '../styles/main.scss';
import Menu from './Menu';
import Board from './Board';

const menuItems = ['Dashboard', 'Snipe', 'Auto Mint', 'Bulk Bidder'];

const Main = () => {
  const [active, setActive] = useState('Auto Mint');

  const onClick = (manuName) => {
    setActive(manuName);
  };

  return (
    <div className="main">
      <div className="main__menu">
        {menuItems.map((item) => (
          <Menu
            active={item === active}
            key={item}
            title={item}
            callBack={onClick}
          />
        ))}
      </div>
      <div className="main__board">
        <Board />
      </div>
    </div>
  );
};

export default Main;

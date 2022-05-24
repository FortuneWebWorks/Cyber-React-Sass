import { useState } from 'react';
import '../styles/main.scss';
import Menu from './Menu';
import Board from './Board';
import MintContextProvider from '../contexts/autoMintContext';

const menuItems = ['Dashboard', 'Snipe', 'Auto Mint', 'Bulk Bidder'];

const Main = () => {
  const [active, setActive] = useState('Dashboard');

  const onClick = (menuName) => {
    setActive((prev) => (menuName === prev ? '' : menuName));
  };

  return (
    <div className="main">
      <MintContextProvider>
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
          <Board route={active} />
        </div>
      </MintContextProvider>
    </div>
  );
};

export default Main;

import { useNavigate } from 'react-router-dom';
import '../styles/headerMenu.scss';
import DropDown from './DropDown';

const header2Items = [{ name: 'Drops' }, { name: 'Trending' }, { name: 'FAQ' }];

// const header1Items = [
//   { name: 'Pricing' },
//   { name: 'Resources' },
//   { name: 'Cyberdash Alpha' },
//   { name: 'Institutions' },
//   { name: 'About us' },
// ];

const HeaderMenu = ({ second, items }) => {
  const navigate = useNavigate();

  const routeChange = (key) => {
    navigate(key.toLowerCase());
  };

  return (
    <div className="headermenu__container">
      <DropDown
        fontSize="3rem"
        innerColor="#244677"
        minWidth="10rem"
        placeholder={window.location.pathname.replace('/', '')}
        items={items || header2Items}
        callBack={routeChange}
      />
    </div>
  );
};

export default HeaderMenu;

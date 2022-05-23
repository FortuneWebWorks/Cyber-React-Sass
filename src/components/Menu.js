import '../styles/menu.scss';
// Icnos
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as SnipeIcon } from '../assets/icons/snipe.svg';
import { ReactComponent as AutoMintIcon } from '../assets/icons/auto-mint.svg';
import { ReactComponent as BulkIcon } from '../assets/icons/bulk.svg';
// Menus
import AutoMint from './AutoMint';

const renderIcon = (title) => {
  switch (title) {
    case 'Dashboard':
      return <DashboardIcon />;
    case 'Snipe':
      return <SnipeIcon />;
    case 'Auto Mint':
      return <AutoMintIcon />;
    case 'Bulk Bidder':
      return <BulkIcon />;
    default:
      break;
  }
};

const renderMenu = (title) => {
  switch (title) {
    // case 'Dashboard':
    //   return <DashboardIcon />;
    // case 'Snipe':
    //   return <SnipeIcon />;
    case 'Auto Mint':
      return <AutoMint />;
    // case 'Bulk Bidder':
    //   return <BulkIcon />;
    default:
      return;
  }
};

const Menu = ({ title, active, noMenu, callBack }) => {
  return (
    <div
      className={`menu ${active ? 'active' : ''}`}
      onClick={callBack && callBack.bind(null, title)}
    >
      {renderIcon(title)}
      <span>{title}</span>
      {/* {!noMenu && renderMenu(title)} */}
    </div>
  );
};

export default Menu;

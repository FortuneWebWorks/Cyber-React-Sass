import '../styles/menu.scss';
// icnos
import { ReactComponent as DashboardIcon } from '../assets/icons/dashboard.svg';
import { ReactComponent as SnipeIcon } from '../assets/icons/snipe.svg';
import { ReactComponent as AutoMintIcon } from '../assets/icons/auto-mint.svg';
import { ReactComponent as BulkIcon } from '../assets/icons/bulk.svg';

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

const Menu = ({ title, active }) => {
  return (
    <div className={`menu ${active && 'active'}`}>
      {renderIcon(title)}
      <span>{title}</span>
    </div>
  );
};

export default Menu;

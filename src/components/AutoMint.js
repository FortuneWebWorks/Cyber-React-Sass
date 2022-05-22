import '../styles/autoMint.scss';
import DropDown from './DropDown';

const dropdownData = [
  { title: 'item1', data: 'item1data' },
  { title: 'item2', data: 'item2data' },
  { title: 'item3', data: 'item3data' },
  { title: 'item4', data: 'item4data' },
];

const AutoMint = () => {
  return (
    <div className="container">
      <DropDown
        title="Select Wallet"
        placeholder={'Your Wallet'}
        items={dropdownData}
      />
    </div>
  );
};

export default AutoMint;

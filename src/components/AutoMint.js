import '../styles/autoMint.scss';
import DropDown from './DropDown';
import Input from './Input';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Proggress from './Proggress';
import Switch from './Switch';

const dropdownData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private', data: 'priveate' },
];

const AutoMint = () => {
  return (
    <div className="container">
      <DropDown
        title="Select Wallet"
        placeholder={'Your Wallet'}
        items={dropdownData}
      />
      <Input title="Collection Slug *" placeholder="bolderthanever" />
      <Button text="Get" />
      <ButtonGroup
        items={['sfdsdfadsa', 'asfd', 'button3']}
        activeDefault={2}
      />
      <Proggress min={0} max={100} sign="%" />
      <Switch />
    </div>
  );
};

export default AutoMint;

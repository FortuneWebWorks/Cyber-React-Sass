import '../styles/autoMint.scss';
import DropDown from './DropDown';
import Input from './Input';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Result from './Result';
import Switch from './Switch';

const dropdownData = [];

const Bulk = () => {
  return (
    <div className="container">
      <div className="container__scroll">
        <Input title="Contract Address" placeholder="1" />

        <Input title="Token" placeholder="1" />

        <div className="container__multi-input">
          <Input title="Price *" placeholder="200" />
          <Input title="Expiry Time *" placeholder="1" />
          <DropDown
            title="Type *"
            placeholder={'Minutes'}
            items={dropdownData}
          />
        </div>

        <div className="container__multi-input">
          <Switch title="Overbid?" mode="col" fontSize="1.3rem" />
          <Input title="Overbid Increase" placeholder="5" fontSize="1.3rem" />
          <DropDown
            title="Overbid Max Price"
            placeholder={'Minutes'}
            items={dropdownData}
            fontSize="1.3rem"
          />
        </div>

        <DropDown title="RPC" placeholder={'Akhemy'} items={dropdownData} />

        <Input title="RPC URL *" placeholder="https://google.com" />

        <Button text="Create Task" />
      </div>
    </div>
  );
};

export default Bulk;

import '../styles/autoMint.scss';
import DropDown from './DropDown';
import Input from './Input';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Result from './Result';

const dropdownData = [];

const Snipe = () => {
  return (
    <div className="container">
      <div className="container__scroll">
        <DropDown
          title="Select Wallet"
          placeholder={'Your Wallet'}
          items={dropdownData}
        />

        <div className="container__multi-input">
          <DropDown
            title="Marketplace"
            placeholder={'OpenSea'}
            items={dropdownData}
          />
          <Input title="Max Buy" placeholder="1" />
        </div>

        <div className="container__multi-input">
          <Input title="Collection Slug *" placeholder="boardssdfsgclub" />
          <Button text="Load Traits" />
        </div>

        <Input title="Snipe Below *" placeholder="10" />

        <div className="container__multi-input">
          <DropDown
            title="Snipe Trait"
            placeholder={'(1) Selected)'}
            items={dropdownData}
          />
          <DropDown
            title="Trait Value"
            placeholder={'(1) Selected)'}
            items={dropdownData}
          />
        </div>

        <Input title="Snipe Below Rank" placeholder="10" />

        <Input title="Ignore Tokens" placeholder="451254 or 544.414" />

        <DropDown title="RPC" placeholder={'Akhemy'} items={dropdownData} />

        <Input title="RPC URL *" placeholder="https://google.com" />

        <ButtonGroup
          items={['Auto', 'Multiplier', 'Custom']}
          activeDefault={2}
        />

        <div className="container__multi-input">
          <DropDown
            title="Max Fee Per Gas"
            placeholder={'8'}
            items={dropdownData}
            fontSize="1rem"
          />
          <DropDown
            title="Max Peiority Fee"
            placeholder={'8'}
            items={dropdownData}
            fontSize="1rem"
          />
          <DropDown
            title="Gas Limit"
            placeholder={'8'}
            items={dropdownData}
            fontSize="1rem"
          />
        </div>

        <Result />

        <Button text="Create Task" />
      </div>
    </div>
  );
};

export default Snipe;

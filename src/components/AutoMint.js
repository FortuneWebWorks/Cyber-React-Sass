import { useRef, useState, Fragment } from 'react';
import '../styles/autoMint.scss';
import DropDown from './DropDown';
import Input from './Input';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Proggress from './Proggress';
import Switch from './Switch';

import ApiHandler from '../apiHandler/node';
import Result from './Result';

const dropdownData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private', data: 'priveate' },
];

const AutoMint = () => {
  const node = new ApiHandler();
  const contractAddress = useRef('');
  const [flagAbi, setFlagAbi] = useState([]);
  const [mintAbi, setMintAbi] = useState([]);
  const [mintInputs, setMintInputs] = useState([]);
  const [flagOutputs, setFlagOutputs] = useState([]);

  const getFromContractAdress = async () => {
    try {
      let response = await node.checkContract(contractAddress.current);
      console.log(response);
      setFlagAbi(response.flagAbi.allFlagFunctions);
      setMintAbi(response.mintAbi.allMintFunctions);
    } catch (error) {
      console.log(error);
    }
  };

  const getContractAddress = (value) => {
    contractAddress.current = value;
  };

  const mintCallBack = (key, data) => {
    console.log(data.inputs);
    setMintInputs(data.inputs);
  };

  const flagCallBack = (key, data) => {
    console.log(data.outputs);
    setFlagOutputs(data.outputs);
  };

  return (
    <div className="container">
      <div className="container__scroll">
        <DropDown
          title="Select Wallet"
          placeholder={'Your Wallet'}
          items={dropdownData}
        />

        <DropDown
          title="RPC"
          placeholder={'Your Wallet'}
          items={dropdownData}
        />

        <Input title="RPC HTTPS URL *" placeholder="https://google.com" />

        <Input title="RPC WSS URL *" placeholder="https://google.com" />

        <Input
          title="Contract Address *"
          placeholder="dsf21135413541sdfa"
          callBack={getContractAddress}
        />

        <div className="container__multi-input">
          <Input title="ABI *" placeholder="Fetch" />
          <Button text="Get" callBack={getFromContractAdress} />
        </div>

        <DropDown title="Mode" placeholder={'Normal'} items={dropdownData} />

        <DropDown
          title="Mint Function"
          placeholder={'Mint -[1]'}
          items={mintAbi}
          callBack={mintCallBack}
        />

        {/* Mint function input generating */}
        {/* <div className="container__multi-input"> */}
        {mintInputs.map((item, index) => (
          <Fragment key={index}>
            <Input title={item.name} placeholder={item.name} />
          </Fragment>
        ))}
        {/* </div> */}

        <div className="container__multi-input">
          <Input title="Mint Price *" placeholder="[1]" />
          <Input title="Ton Count/Repeat" placeholder="3" />
        </div>

        <ButtonGroup
          items={['Auto', 'Multiplier', 'Custom']}
          activeDefault={2}
        />

        <Proggress min={0} max={100} sign="%" />

        <div className="container__multi-input">
          <DropDown
            title="Flip State Function"
            placeholder={'Mint -[1]'}
            items={flagAbi}
            callBack={flagCallBack}
          />
        </div>
        {/* Flag function input generating */}
        {flagOutputs.map((item, index) => (
          <div className="container__multi-input" key={index}>
            <Input title={item.type} placeholder={item.type} />
          </div>
        ))}

        <Input
          title="Custom Hex Data"
          placeholder="dsf21135413541sdfa"
          callBack={getContractAddress}
        />

        <div className="container__multi-input">
          <Input
            title="Custom Gas Limit"
            placeholder="50000"
            callBack={getContractAddress}
          />

          <Result />
        </div>

        <Switch title="Timer Enable?" mode="row" />

        <div className="container__multi-input">
          <DropDown
            title="Years"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
          <DropDown
            title="Mounth"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
          <DropDown
            title="Day"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
        </div>

        <div className="container__multi-input">
          <DropDown
            title="Hours"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
          <DropDown
            title="Minutes"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
          <DropDown
            title="Seconds"
            placeholder={'8'}
            items={flagAbi}
            callBack={flagCallBack}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoMint;

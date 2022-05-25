import { Fragment, useContext } from 'react';
import '../styles/autoMint.scss';
import DropDown from './DropDown';
import Input from './Input';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Proggress from './Proggress';
import Switch from './Switch';
import { AutoMintContext } from '../contexts/autoMintContext';
// import { VcheckValidateMintInputs } from '../apiHandler/inputChecking';

import ApiHandler from '../apiHandler/node';
import Result from './Result';

import { toast } from 'react-toastify';

const dropdownData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private', data: 'priveate' },
];

const selectWalletData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private Key', data: 'priveate' },
];

const signatureData = [
  { title: 'Signed', data: 'Signed' },
  { title: 'Pre Signed', data: 'Pre Signed' },
];

const modeData = [
  { title: 'Main Flag', data: 'Main Flag' },
  { title: 'Condition', data: 'Condition' },
];

const AutoMint = ({ callBack }) => {
  const {
    contractAddress,
    flagAbi,
    setFlagAbi,
    mintAbi,
    setMintAbi,
    mintInputs,
    setMintInputs,
    flagOutputs,
    setFlagOutputs,
    activeBtn,
    setActiveBtn,
    selectWallet,
    setSelectWallet,
    mode,
    setMode,
    tasks,
    setTasks,
    mintPrice,
    mintInputsRendered,
    edit,
  } = useContext(AutoMintContext);
  const node = new ApiHandler();

  const getFromContractAdress = async () => {
    try {
      let response = await node.checkContract(contractAddress.current);
      setFlagAbi(response.flagAbi.allFlagFunctions);
      setMintAbi(response.mintAbi.allMintFunctions);
      toast('Success', {
        type: 'success',
        style: { fontSize: '1.5rem' },
      });
    } catch (error) {
      toast('The contract isn’t correct, check the address again', {
        type: 'error',
        style: { fontSize: '1.5rem' },
      });
    }
  };

  const getContractAddress = (value) => {
    contractAddress.current = value;
  };

  const mintCallBack = (key, data) => {
    setMintInputs(data.inputs);

    mintInputsRendered.current = {};
  };

  const flagCallBack = (key, data) => {
    setFlagOutputs(data.outputs);
  };

  const onButtonGroupChange = (activeBtn) => {
    setActiveBtn(activeBtn);
  };

  const onSelectWalletChange = (key, data) => {
    setSelectWallet(key);
  };

  const onModeChange = (key, data) => {
    setMode(key);
  };

  const onSetMintPrice = (value) => {
    mintPrice.current = value;
  };

  const onMintInputsChange = (value, title) => {
    mintInputsRendered.current = {
      ...mintInputsRendered.current,
      [title]: value,
    };
  };

  // Create Task
  const onCreateTask = () => {
    const editTarget = tasks.filter((task) => task.id === edit.current.id)[0];

    if (editTarget) {
      editTarget.contractAddress = contractAddress.current;
      editTarget.mintPrice = mintPrice.current;
      editTarget.mode = mode;
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: tasks.length,
          contractAddress: contractAddress.current,
          mintPrice: mintPrice.current,
          fee: 12,
          mode: mode,
          status: 'idl',
        },
      ]);
    }

    edit.current = null;

    callBack();
  };

  return (
    <div className="container">
      <div className="container__scroll">
        <DropDown
          title="Select Wallet"
          placeholder={'Your Wallet'}
          items={selectWalletData}
          callBack={onSelectWalletChange}
        />

        {selectWallet === 'Private Key' && (
          <Input title="Your Private Key" placeholder="54132136463fdsa" />
        )}

        <DropDown
          title="RPC"
          placeholder={'Your Wallet'}
          items={dropdownData}
        />

        {/* <Input title="RPC HTTPS URL *" placeholder="https://google.com" />

        <Input title="RPC WSS URL *" placeholder="https://google.com" /> */}

        <Input
          title="Contract Address *"
          placeholder="dsf21135413541sdfa"
          callBack={getContractAddress}
          value={edit?.current?.contractAddress}
        />

        <div className="container__multi-input">
          <Input title="ABI *" placeholder="Fetch" />
          <Button text="Get" callBack={getFromContractAdress} />
        </div>

        {selectWallet !== 'Private Key' && (
          <DropDown
            title="Signature Type"
            placeholder={'Normal'}
            items={signatureData}
          />
        )}

        <DropDown
          title="Mode"
          placeholder={'Normal'}
          items={modeData}
          callBack={onModeChange}
          value={edit?.current?.mode}
        />

        <DropDown
          title="Mint Function"
          placeholder={'Mint -[1]'}
          items={mintAbi}
          callBack={mintCallBack}
        />

        {/* Mint function input generating */}
        <div className="container__2row-input">
          {mintInputs.map((item, index) => (
            <Fragment key={index}>
              <Input
                title={item.name}
                placeholder={item.name}
                callBack={onMintInputsChange}
              />
            </Fragment>
          ))}
        </div>

        <div className="container__multi-input">
          <Input
            title="Mint Price *"
            placeholder="[1]"
            callBack={onSetMintPrice}
            value={edit?.current?.mintPrice}
          />

          {selectWallet === 'Private Key' && (
            <Input title="Ton Count/Repeat" placeholder="3" />
          )}
        </div>

        <ButtonGroup
          items={['Auto', 'Multiplier', 'Custom']}
          activeDefault={0}
          callBack={onButtonGroupChange}
        />

        {activeBtn === 'Multiplier' && <Proggress min={0} max={100} sign="%" />}

        {activeBtn === 'Custom' && (
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
        )}

        {mode !== 'Main Flag' && (
          <div className="container__multi-input">
            <DropDown
              title="Flip State Function"
              placeholder={'Mint -[1]'}
              items={flagAbi}
              callBack={flagCallBack}
            />
          </div>
        )}
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

        {activeBtn !== 'Multiplier' && (
          <div className="container__multi-input">
            {activeBtn !== 'Custom' && (
              <Input
                title="Custom Gas Limit"
                placeholder="50000"
                callBack={getContractAddress}
              />
            )}

            <Result />
          </div>
        )}

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

        <Button
          text={edit?.current ? 'Update Task' : 'Create Task'}
          callBack={onCreateTask}
        />
      </div>
    </div>
  );
};

export default AutoMint;

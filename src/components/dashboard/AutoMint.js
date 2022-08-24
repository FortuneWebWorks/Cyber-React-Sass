import { Fragment, useContext, useEffect } from 'react';
import 'styles/dashboard/autoMint.scss';
import DropDown from 'components/DropDown';
import Input from 'components/Input';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Proggress from 'components/Proggress';
import Switch from 'components/Switch';
import { AutoMintContext } from 'contexts/autoMintContext';
import AutoMintLib from 'libs/bots/autoMint';
import WalletsHandler from 'libs/wallets/node';
import { VcheckValidateMintInputs } from 'apiHandler/inputChecking';

import ApiHandler from 'apiHandler/node';
import Result from 'components/Result';

import { toast } from 'react-toastify';

const dropdownData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private', data: 'priveate' }
];

const selectWalletData = [
  { title: 'MetaMask Wallet', data: 'MetaMask Wallet' },
  { title: 'Burner Wallet', data: 'Burner Wallet' }
];

const signatureData = [
  { title: 'Signed', data: 'Signed' },
  { title: 'Pre Signed', data: 'Pre Signed' }
];

const modeData = [
  { title: 'Flash Bot', data: 'Flash Bot' },
  { title: 'Normal', data: 'Normal' }
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
    setMintPrice,
    mintPrice,
    mintInputsRendered,
    edit,
    maxFeePerGas,
    setMaxFeePerGas,
    maxPriorityFeePerGas,
    setMaxPriorityFeePerGas,
    gasLimit,
    setGasLimit,
    estimatedTotal,
    setEstimatedTotal
  } = useContext(AutoMintContext);
  const node = new ApiHandler();
  const wallet = new WalletsHandler();
  const autoMintLib = new AutoMintLib();

  const getFromContractAdress = async () => {
    try {
      let response = await node.checkContract(contractAddress.current);
      setFlagAbi({
        items: response.flagAbi.allFlagFunctions,
        defaultValue:
          response.flagAbi.defaultFlagFunction ||
          response.flagAbi.allFlagFunctions[0]
      });
      setMintAbi({
        items: response.mintAbi.allMintFunctions,
        defaultValue:
          response.mintAbi.defaultMintFunction ||
          response.mintAbi.allMintFunctions[0]
      });

      toast('Success', {
        type: 'success',
        style: { fontSize: '1.5rem' }
      });
    } catch (error) {
      toast('The contract isn’t correct, check the address again', {
        type: 'error',
        style: { fontSize: '1.5rem' }
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

  const onMintInputsChange = (value, title) => {
    mintInputsRendered.current = {
      ...mintInputsRendered.current,
      [title]: value
    };
  };

  const maxPeiorityFeeHandler = (value, label, e) => {
    if (Number(value) >= Number(maxFeePerGas)) {
      console.log(maxFeePerGas);
      e.target.value = maxPriorityFeePerGas;
      toast.error('The input number must be grater than (Max Fee Per Gas)');
    } else {
      setMaxPriorityFeePerGas(value);
    }
  };

  // Create Task
  const onCreateTask = () => {
    // Placeholder for validate

    const editTarget = tasks.filter((task) => task.id === edit.current.id)[0];

    if (editTarget) {
      editTarget.contractAddress = contractAddress.current;
      editTarget.mintPrice = mintPrice;
      editTarget.mode = mode;
    } else {
      // console.log({
      //   ...tasks,
      //   id: tasks.length,
      //   contractAddress: contractAddress.current,
      //   mintPrice: mintPrice,
      //   fee: 12,
      //   mode: mode,
      //   status: 'idl'
      // });

      const calculateData = {
        value: mintPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasLimit,
        gasMultiplier: null,
        gasInHeader: null
      };

      console.log(calculateData);

      // Prev code **
      wallet
        .calculateEtherValue(
          mintPrice,
          maxFeePerGas,
          maxPriorityFeePerGas,
          gasLimit,
          null,
          null
        )
        .then((data) => console.log(data));

      // setTasks((prev) => [
      //   ...prev,
      // {
      //   id: tasks.length,
      //   contractAddress: contractAddress.current,
      //   mintPrice: mintPrice,
      //   fee: 12,
      //   mode: mode,
      //   status: 'idl'
      // }
      // ]);
    }

    // edit.current = null

    // callBack()
  };

  useEffect(() => {
    console.log('object');

    const calculateData = {
      value: mintPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      gasLimit,
      gasMultiplier: null,
      gasInHeader: null
    };

    // Prev code **
    wallet
      .calculateEtherValue(
        mintPrice,
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasLimit,
        null,
        null
      )
      .then((data) => {
        if (data && data !== NaN) {
          setEstimatedTotal(data);
        }
      });
  }, [mintPrice, maxFeePerGas, maxPriorityFeePerGas, gasLimit]);

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

        {/* <DropDown
          title="RPC"
          placeholder={'Your Wallet'}
          items={dropdownData}
        /> */}

        {/* <Input title="RPC HTTPS URL *" placeholder="https://google.com" />

        <Input title="RPC WSS URL *" placeholder="https://google.com" /> */}

        <Input
          title="Contract Address *"
          placeholder="dsf21135413541sdfa"
          callBack={getContractAddress}
          value={edit?.current?.contractAddress}
          require={true}
        />

        <div className="container__multi-input">
          <Input title="ABI *" placeholder="Fetch" />
          <Button
            text="Get"
            callBack={getFromContractAdress}
            padding="0.7rem 1rem"
          />
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
          items={mintAbi?.items || []}
          defaultValue={mintAbi?.defaultValue || []}
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
            type={'number'}
            callBack={(value) => setMintPrice(value)}
            value={mintPrice}
            require={true}
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
            <Input
              title="Max Fee Per Gas"
              type={'number'}
              placeholder={'8'}
              callBack={(value) => setMaxFeePerGas(value)}
              value={maxFeePerGas}
              fontSize="1rem"
            />
            <Input
              title="Max Peiority Fee"
              placeholder={'8'}
              type={'number'}
              callBack={maxPeiorityFeeHandler}
              value={maxPriorityFeePerGas}
              fontSize="1rem"
            />
            <Input
              title="Gas Limit"
              placeholder={'8'}
              type={'number'}
              callBack={(value) => setGasLimit(value)}
              value={gasLimit}
              fontSize="1rem"
            />
          </div>
        )}

        {mode !== 'Main Flag' && (
          <div className="container__multi-input">
            <DropDown
              title="Flip State Function"
              placeholder={'Mint -[1]'}
              items={flagAbi?.items || []}
              defaultValue={flagAbi?.defaultValue || []}
              callBack={flagCallBack}
            />
          </div>
        )}
        {/* Flag function input generating */}
        {flagOutputs.map((item, index) => (
          <div className="container__multi-input" key={index}>
            <Input title={`baseURI { ${item.type} }`} placeholder={item.type} />
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

            <Result value={estimatedTotal} />
          </div>
        )}

        <Switch title="Timer Enable?" mode="row" />

        <div className="container__multi-input">
          <DropDown
            title="Years"
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title="Mounth"
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title="Day"
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
        </div>

        <div className="container__multi-input">
          <DropDown
            title="Hours"
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title="Minutes"
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title="Seconds"
            placeholder={'8'}
            items={flagAbi?.items || []}
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

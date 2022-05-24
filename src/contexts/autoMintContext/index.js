import { createContext, useState, useRef } from 'react';

export const AutoMintContext = createContext();

const MintContextProvider = ({ children }) => {
  const contractAddress = useRef('');
  const mintPrice = useRef('');
  const mintInputsRendered = useRef([]);
  const [flagAbi, setFlagAbi] = useState([]);
  const [mintAbi, setMintAbi] = useState([]);
  const [mintInputs, setMintInputs] = useState([]);
  const [flagOutputs, setFlagOutputs] = useState([]);
  const [activeBtn, setActiveBtn] = useState('Auto');
  const [selectWallet, setSelectWallet] = useState('');
  const [mode, setMode] = useState('');

  // All tasks
  const [tasks, setTasks] = useState([]);

  const value = {
    contractAddress,
    mintPrice,
    mintInputsRendered,
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
  };

  return (
    <AutoMintContext.Provider value={value}>
      {children}
    </AutoMintContext.Provider>
  );
};

export default MintContextProvider;

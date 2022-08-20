import { createContext, useState, useRef } from 'react';

export const AutoMintContext = createContext();

const MintContextProvider = ({ children }) => {
  const contractAddress = useRef('');
  const mintPrice = useRef('');
  const mintInputsRendered = useRef([]);
  const edit = useRef(null);
  const [flagAbi, setFlagAbi] = useState([]);
  const [mintAbi, setMintAbi] = useState([]);
  const [mintInputs, setMintInputs] = useState([]);
  const [flagOutputs, setFlagOutputs] = useState([]);
  const [activeBtn, setActiveBtn] = useState('Auto');
  const [selectWallet, setSelectWallet] = useState('');
  const [maxFeePerGas, setMaxFeePerGas] = useState(0);
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] = useState(0);
  const [mode, setMode] = useState('');

  // All tasks
  const [tasks, setTasks] = useState([]);

  // Menu
  const [active, setActive] = useState('Dashboard');

  const value = {
    contractAddress,
    mintPrice,
    mintInputsRendered,
    edit,
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
    active,
    setActive,
    maxFeePerGas,
    setMaxFeePerGas,
    maxPriorityFeePerGas,
    setMaxPriorityFeePerGas
  };

  return (
    <AutoMintContext.Provider value={value}>
      {children}
    </AutoMintContext.Provider>
  );
};

export default MintContextProvider;

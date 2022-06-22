import { createContext, useState } from "react";

const ContractAdress = createContext();

export const ContractAdressContextProvider = ({ children }) => {
  const [swapData, setSwapData] = useState(null);

  const value = { swapData, setSwapData };

  return (
    <ContractAdress.Provider value={value}>{children}</ContractAdress.Provider>
  );
};

export default ContractAdress;

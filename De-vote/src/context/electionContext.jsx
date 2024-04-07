// ContractContext.js

import React, { createContext, useState } from 'react';

const ContractContext = createContext();

const ContractProvider = ({ children }) => {
  const [contract, updateContract] = useState(null);
  const [account, updateAccount] = useState(null);

  return (
    <ContractContext.Provider value={{ contract, updateContract, account, updateAccount }}>
      {children}
    </ContractContext.Provider>
  );
};

export { ContractContext, ContractProvider };

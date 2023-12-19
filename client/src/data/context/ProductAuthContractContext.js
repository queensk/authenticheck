import { createContext, useContext, useState, useEffect } from "react";
import abi from "../../contracts/ProductAuth.json";
import { ethers } from "ethers";

const ProductAuthContext = createContext(null);

export const useProductAuth = () =>
  useContext(ProductAuthContext);

export const ProductAuthProvider = ({ children }) => {
  const getContract = () => {
    const contractAbi = abi.abi;
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
    
    const contract = new ethers.Contract(
      process.env.REACT_APP_LENDER_BORROWER_CONTRACT || process.env.REACT_APP_AUTHENTICHECK_DEV,
      contractAbi,
      signer
    );

    return contract;
  };

  const [ProductAuth] = useState(getContract());

  return (
    <ProductAuthContext.Provider value={{ ProductAuth }}>
      {children}
    </ProductAuthContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import { ethers } from "ethers";
import { toast } from "sonner";

import HasherABI from "../contract/Hasher.json";

export const RpsContext = createContext({});

export const RpsProvider = ({ children }) => {
  const [moveNumber, setMoveNumber] = useState(0);
  const [player2Addr, setPlayer2Addr] = useState(null);

  // LOADERS
  const [hashLoad, setHashLoad] = useState(false);

  const hasherContractAddr = "0xb0846aBCB645EB49C51C697806c23181B4A093f9";

  const hash = async (c, salt) => {
    try {
      if (window.ethereum) {
        setHashLoad(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const hasherContract = new ethers.Contract(
          hasherContractAddr,
          HasherABI,
          signer
        );

        const hashedValue = await hasherContract.hash(c, salt, {
          gasLimit: 500000,
        });
        console.log(hashedValue);
        setHashLoad(false);
        toast.success("Hashing successful.");
      }
    } catch (error) {
      // const parsedEthersError = getParsedEthersError(error);
      // toast.error(
      //   `${parsedEthersError.errorCode} -> ${parsedEthersError.context}`
      // );
      console.log(error);
      setHashLoad(false);
    }
  };

  return (
    <RpsContext.Provider
      value={{
        hashLoad,
        setHashLoad,
        hash,
        moveNumber,
        setMoveNumber,
        player2Addr,
        setPlayer2Addr,
      }}
    >
      {children}
    </RpsContext.Provider>
  );
};

import SoulboundStorageABI from "../constants/abi/SoulboundStorage.json";
import Contracts from "../constants/contracts";
import { useContractRead, useAccount } from "wagmi";
import { ethers } from "ethers";

// Returns the collections YOU deployed
export function useGetFactories() {
  const factories = [
    {
      name: "Open Factory",
      id: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("default")),
    },
    {
      name: "Deal Factory",
      id: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("deal")),
    },
    {
      name: "Demerit Factory",
      id: ethers.utils.keccak256(ethers.utils.toUtf8Bytes("demerit")),
    },
  ];

  return { factories };
}

import DemeritSoulboundERC721ABI from "../constants/abi/DemeritSoulboundERC721.json";
import ISoulboundERC721ABI from "../constants/abi/ISoulboundERC721.json";
import chainId from "../constants/chainId";
import { ethers } from "ethers";
import Contracts from "../constants/contracts";
import { getMaxPriorityFeePerGas } from "./getMaxPriorityFeePerGas";

export async function assignSoulboundToken(
  provider,
  signer,
  collectionAddress,
  receiver,
  factoryIndex
) {
  let maxPriorityFee = await getMaxPriorityFeePerGas(provider);

  let artifact;
  let functionName;
  let args;

  switch (factoryIndex) {
    case 0:
    case 1:
      artifact = ISoulboundERC721ABI;
      functionName = "issue";
      args = [receiver];
      break;
    case 2:
      artifact = DemeritFactoryABI;
      functionName = "assign";
      args = [receiver, dealId];
      break;
  }
  args.push({
    gasLimit: 1000000000,
    maxPriorityFeePerGas: maxPriorityFee?.toString(),
  });

  const contract = new ethers.Contract(collectionAddress, artifact.abi, signer);
  await contract.functions[functionName](...args);
}

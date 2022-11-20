import useAxios from "axios-hooks";
import { useContractRead } from "wagmi";
import chainId from "../constants/chainId";
import DemeritSoulboundABI from "../constants/abi/DemeritSoulboundERC721.json";

export function useTokenURI(address) {
  const {
    data: tokenURI,
    isError,
    isLoading,
    error,
  } = useContractRead({
    addressOrName: address,
    contractInterface: DemeritSoulboundABI.abi,
    functionName: "tokenURI",
    args: [0],
    chainId,
    watch: true,
  });

  return { tokenURI, isLoading, isError, error };
}

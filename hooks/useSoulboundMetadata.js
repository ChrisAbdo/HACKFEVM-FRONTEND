import useAxios from "axios-hooks";
import { erc721ABI, useContractRead } from "wagmi";
import chainId from "../constants/chainId";

export function useSoulboundMetadata(address) {
  const {
    data: tokenURI,
    isError: isErrorMetadata,
    isLoading: isLoadingMetadata,
  } = useContractRead({
    addressOrName: address,
    contractInterface: erc721ABI,
    functionName: "tokenURI",
    args: 0,
    chainId,
  });

  const [{ data: metadata, loading, error }] = useAxios(tokenURI);

  const isLoading = isLoadingMetadata || loading;
  const isError = isErrorMetadata || error;

  return { metadata, isLoading, isError };
}

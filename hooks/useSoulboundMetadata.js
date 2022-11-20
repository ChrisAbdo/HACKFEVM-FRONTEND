import useAxios from "axios-hooks";
import { erc721ABI, useContractRead } from "wagmi";
import chainId from "../constants/chainId";
import DemeritSoulboundABI from "../constants/abi/DemeritSoulboundERC721.json";
import axios from "axios";

export function useSoulboundMetadata(address) {
  const {
    data: tokenURI,
    isError: isErrorMetadata,
    isLoading: isLoadingMetadata,
  } = useContractRead({
    address: address,
    abi: DemeritSoulboundABI.abi,
    functionName: "tokenURI",
    args: [0],
    chainId: 31415,
    watch: true,
  });

  let ipfsParts = (tokenURI ?? "a/b").replace("ipfs://", "").split("/");
  let ipfsHash = ipfsParts[0];
  let ipfsFile = ipfsParts[1] ?? "metadata.json";
  let uri = `https://${ipfsHash}.ipfs.nftstorage.link/${ipfsFile}`;

  const [{ data: metadata, loading, error }] = useAxios(uri);

  if (metadata != undefined) {
    let currentImageUri = metadata.image;
    let imageParts = currentImageUri.replace("ipfs://", "").split("/");
    let imageHash = imageParts[0];
    let imageFile = imageParts[1];
    let imageUri = `https://${imageHash}.ipfs.nftstorage.link/${imageFile}`;

    metadata.image = imageUri
  }

  const isLoading = isLoadingMetadata || loading;
  const isError = isErrorMetadata || error;

  return { metadata, isLoading, isError };
}

import SoulboundStorageABI from "../constants/abi/SoulboundStorage.json";
import Contracts from "../constants/contracts";
import { useContractRead, useAccount } from "wagmi";

// Returns the collections YOU deployed
export function useGetDeployedAddresses() {
  const { address, isConnected } = useAccount();

  const {
    data: addresses,
    isError,
    isLoading,
  } = useContractRead({
    abi: SoulboundStorageABI.abi,
    address: Contracts.SoulboundStorage,
    functionName: "getDeployedCollections",
    args: [address],
    chainId: 31415,
    watch: true,
  });

  const hasData = !isError && !isLoading && isConnected;

  return { addresses, hasData };
}

// Returns the mints YOU assigned
export function useGetMintsByIssuer() {
  const { address, isConnected } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    abi: SoulboundStorageABI.abi,
    address: Contracts.SoulboundStorage,
    functionName: "getMintsByIssuer",
    args: [address],
    chainId: 31415,
    watch: true,
  });

  const hasData = !isError && !isLoading && isConnected;

  return { data, hasData };
}

// Returns whether or not a mint you assigned has been claimed
export function useWasMintConfirmed(receiver, collection) {
  const { data, isError, isLoading } = useContractRead({
    abi: SoulboundStorageABI.abi,
    address: Contracts.SoulboundStorage,
    functionName: "wasMintConfirm",
    args: [receiver, collection],
    chainId: 31415,
    watch: true,
  });

  const hasData = !isError && !isLoading;

  return { data, hasData };
}

// Returns the mints you've been assigned (claimed & unclaimed)
export function useGetMintsByReceiver() {
  const { address, isConnected } = useAccount();

  const { data, isError, isLoading } = useContractRead({
    abi: SoulboundStorageABI.abi,
    address: Contracts.SoulboundStorage,
    functionName: "getMintsByReceiver",
    args: [address],
    chainId: 31415,
    watch: true,
  });

  const hasData = !isError && !isLoading && isConnected;

  return { data, hasData };
}

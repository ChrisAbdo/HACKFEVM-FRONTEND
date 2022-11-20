import { useAccount, useProvider, useSigner } from "wagmi";
import { useGetFactories } from "../hooks/useEngineHooks";
import { useSoulboundMetadata } from "../hooks/useSoulboundMetadata";
import { useGetMintsByReceiver } from "../hooks/useStorageHooks";

const ClaimDialogExample = ({ contractAddress, setSelectedCollection }) => {
  const { data: signer } = useSigner(chainId);
  const provider = useProvider(chainId);

  const factories = useGetFactories();
  const { data: receiverMints } = useGetMintsByReceiver();

  const { metadata, isLoading, isError } =
    useSoulboundMetadata(selectedAddress);

  return (
    <div>
      <h1>Name</h1>
      <h1>{metadata?.name}</h1>
      <h1>Description</h1>
      <h1>{metadata?.description}</h1>
      <h1>Image</h1>
      <img
        src={metadata?.image ?? "https://placeimg.com/400/225/grayscale"}
        alt="SBT"
        className="object-cover rounded-md w-300 h-300"
      />
      <h1>Issuer Name</h1>
      <h1>{metadata?.properties?.issuerName}</h1>
      <h1>Date</h1>
      <h1>{metadata?.properties?.date}</h1>
      <h1>Factory</h1>
      <h1>
        {metadata.properties?.factory != null
          ? factories.find((x) => x.id == metadata.properties.factory).name ??
            ""
          : ""}
      </h1>
      <h1>All Mints</h1>
      {receiverMints?.length ?? 0 > 0
        ? receiverMints.map((mint) => (
            <div>
              <h1>Collection</h1>
              <h3>{mint.collection}</h3>
              <h1>Token Id</h1>
              <h3>{mint.tokenId}</h3>
              <h1>Was claimed</h1>
              <h3>{mint.completed}</h3>
            </div>
          ))
        : null}
      <button
        type="button"
        className="ml-5 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={async () => {
          toast("Claiming token...");
          try {
            await claimSoulboundToken(provider, signer, contractAddress);
            toast("Token claimed");
          } catch (e) {
            toast.error("Failed to claim token");
          }
          setSelectedCollection(null);
        }}
      >
        Claim
      </button>
    </div>
  );
};

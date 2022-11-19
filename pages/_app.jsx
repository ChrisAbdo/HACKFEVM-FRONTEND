import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const fvmChain = {
  id: 31415,
  name: 'Filecoin — Wallaby testnet',
  network: 'wallaby',
  nativeCurrency: {
    decimals: 18,
    name: 'Testnet Filecoin',
    symbol: 'tFil',
  },
  rpcUrls: {
    default: 'https://wallaby.node.glif.io/rpc/v0',
  },
  blockExplorers: {
    default: { name: 'Glif', url: 'https://explorer.glif.io/wallaby' },
  },
  testnet: true,
};
const { chains, provider, webSocketProvider } = configureChains(
  [fvmChain],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id !== fvmChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
  ]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <WagmiConfig client={client}>
        <div className="bg-gradient-to-r from-[#fdeab1] to-white h-screen">
          <Navbar />
          <Component {...pageProps} />
          <Toaster />
        </div>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;

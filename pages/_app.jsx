import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Web3 from "web3";

function MyApp({ Component, pageProps }) {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    loadWeb3();
  }, []);

  const loadWeb3 = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const Web3Handler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x7ab7",
            chainName: "Wallaby Testnet",
            nativeCurrency: {
              name: "FIL",
              symbol: "FIL",
              decimals: 18,
            },
            rpcUrls: ["https://wallaby.node.glif.io/rpc/v0"],
            blockExplorerUrls: ["https://filscout.com/"],
          },
        ],
      });
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const web3 = new Web3(window.ethereum);
      setAccount(account[0]);
      setWeb3(web3);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#fdeab1] to-white min-h-screen">
        <Navbar Web3Handler={Web3Handler} account={account} />
        <Component {...pageProps} Web3Handler={Web3Handler} account={account} />
      </div>
    </>
  );
}

export default MyApp;

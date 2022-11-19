import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Web3 from "web3";
import toast, { Toaster } from "react-hot-toast";

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
    const notification = toast.loading("Connecting account...", {
      style: {
        border: "2px solid #000",
      },
    });
    const chainNotification = toast.loading(
      "Connecting to Wallaby Testnet...",
      {
        style: {
          border: "2px solid #000",
        },
      }
    );
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
      toast.success("Network changed to Wallaby Testnet!", {
        id: chainNotification,
        style: {
          border: "2px solid #000",
        },
      });
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const web3 = new Web3(window.ethereum);
      setAccount(account[0]);
      setWeb3(web3);
      toast.success("Account connected!", {
        id: notification,
        style: {
          border: "2px solid #000",
        },
      });
    } catch (err) {
      console.log(err);
      toast.error("Error connecting account!", {
        id: notification,
        style: {
          border: "2px solid #000",
        },
      });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-[#fdeab1] to-white">
        <Navbar Web3Handler={Web3Handler} account={account} />
        <Component {...pageProps} Web3Handler={Web3Handler} account={account} />
        <Toaster />
      </div>
    </>
  );
}

export default MyApp;

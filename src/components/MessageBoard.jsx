import React, { useState } from "react";
import { ethers } from "ethers";

// Ganti dengan alamat smart contract kamu setelah deploy di Remix atau Hardhat
const CONTRACT_ADDRESS = "0x44C37d2F0a60dFE7b3e1bb8C2176ce815307BF74"; // <-- Ganti!
const ABI = [
  {
    inputs: [{ internalType: "string", name: "newMessage", type: "string" }],
    name: "setMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessage",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

const MessageBoard = () => {
  const [message, setMessage] = useState("");
  const [fetchedMessage, setFetchedMessage] = useState("");

  const connectAndSend = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask tidak ditemukan");
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      const tx = await contract.setMessage(message);
      await tx.wait();

      alert("Pesan berhasil dikirim ke blockchain!");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan!");
    }
  };

  const getMessage = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask tidak ditemukan");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const msg = await contract.getMessage();
      setFetchedMessage(msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
        Kirim Pesan ke Blockchain
      </h2>
      <input
        type="text"
        placeholder="Tulis pesanmu"
        className="w-full px-3 py-2 border border-gray-300 rounded mb-3"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={connectAndSend}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-3"
      >
        Kirim ke Smart Contract
      </button>
      <button
        onClick={getMessage}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300"
      >
        Ambil Pesan Terkini
      </button>

      {fetchedMessage && (
        <p className="mt-4 text-center text-gray-700">
          📝 Pesan Tersimpan: <span className="font-semibold">{fetchedMessage}</span>
        </p>
      )}
    </div>
  );
};

export default MessageBoard;

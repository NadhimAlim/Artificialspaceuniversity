import React, { useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x44C37d2F0a60dFE7b3e1bb8C2176ce815307BF74";
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
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);

  const connectAndSend = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask tidak ditemukan");
      setLoadingSend(true);

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

      const tx = await contract.setMessage(message);
      await tx.wait();

      alert("✅ Pesan berhasil dikirim ke blockchain!");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("❌ Terjadi kesalahan saat mengirim pesan.");
    } finally {
      setLoadingSend(false);
    }
  };

  const getMessage = async () => {
    try {
      if (!window.ethereum) throw new Error("MetaMask tidak ditemukan");
      setLoadingFetch(true);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
      const msg = await contract.getMessage();
      setFetchedMessage(msg);
    } catch (error) {
      console.error(error);
      alert("❌ Gagal mengambil pesan.");
    } finally {
      setLoadingFetch(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-700">
        📩 Kirim Pesan ke Blockchain
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
        disabled={loadingSend || message.trim() === ""}
        className={`w-full py-2 rounded mb-3 ${
          loadingSend || message.trim() === ""
            ? "bg-blue-300 cursor-not-allowed text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {loadingSend ? "Mengirim..." : "Kirim ke Smart Contract"}
      </button>
      <button
        onClick={getMessage}
        disabled={loadingFetch}
        className={`w-full py-2 rounded ${
          loadingFetch
            ? "bg-gray-300 cursor-wait text-gray-700"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        {loadingFetch ? "Mengambil Pesan..." : "Ambil Pesan Terkini"}
      </button>

      {fetchedMessage && (
        <p className="mt-4 text-center text-gray-700">
          📝 Pesan Tersimpan:{" "}
          <span className="font-semibold">{fetchedMessage}</span>
        </p>
      )}

      {/* CARD CARA MENGGUNAKAN */}
      <div className="mt-6 p-4 border border-blue-200 rounded bg-blue-50">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">📘 Cara Menggunakan</h3>
        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
          <li>Pastikan kamu sudah menginstall dan login ke <strong>MetaMask</strong>.</li>
          <li>Pilih jaringan testnet seperti <strong>Sepolia</strong> (bukan Ethereum Mainnet).</li>
          <li>Isi kolom pesan dengan teks atau angka apa pun.</li>
          <li>Klik tombol <strong>Kirim ke Smart Contract</strong> dan konfirmasi di MetaMask.</li>
          <li>Untuk melihat pesan yang tersimpan, klik <strong>Ambil Pesan Terkini</strong>.</li>
        </ol>
        <p className="mt-3 text-xs text-blue-600 italic">
          Catatan: Gunakan jaringan testnet agar tidak membayar gas fee asli.
        </p>
      </div>
    </div>
  );
};

export default MessageBoard;



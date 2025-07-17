import { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // ← GANTI ini
const ABI = [
  "function message() view returns (string)",
  "function setMessage(string _newMessage)"
];

export default function SmartContractInterface() {
  const [message, setMessage] = useState("");
  const [newMsg, setNewMsg] = useState("");

  const getMessage = async () => {
    if (!window.ethereum) return alert("Install MetaMask!");
    const provider = new BrowserProvider(window.ethereum);
    const contract = new Contract(CONTRACT_ADDRESS, ABI, provider);
    const msg = await contract.message();
    setMessage(msg);
  };

  const updateMessage = async () => {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
    const tx = await contract.setMessage(newMsg);
    await tx.wait();
    getMessage();
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <h2>Pesan dari Smart Contract:</h2>
      <p>{message}</p>
      <input
        type="text"
        value={newMsg}
        onChange={(e) => setNewMsg(e.target.value)}
      />
      <button onClick={updateMessage}>Ubah Pesan</button>
    </div>
  );
}

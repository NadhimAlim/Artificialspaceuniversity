import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

sessionStorage.setItem("registrationData", JSON.stringify({
  username: "nadhim",
  email: "nadhim@gmail.com",
  password: "123456"
}));

const Login = () => {
  const navigate = useNavigate();
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedData = sessionStorage.getItem("registrationData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (
        (usernameEmail === userData.username || usernameEmail === userData.email) &&
        password === userData.password
      ) {
        alert("Login berhasil!");
        sessionStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        alert("Username atau password salah.");
      }
    } else {
      alert("Akun tidak ditemukan. Silakan hubungi admin via WhatsApp untuk pendaftaran.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-white mb-4">Login Member</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm text-white block mb-1">Username / Email</label>
            <input
              type="text"
              value={usernameEmail}
              onChange={(e) => setUsernameEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              required
            />
          </div>
          <div>
            <label className="text-sm text-white block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              required
            />
          </div>
          <div className="text-sm text-gray-400">
            Akun dibuat oleh admin. Hubungi via <span className="text-green-400">WhatsApp</span> untuk pendaftaran.
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulasi login menggunakan sessionStorage
    const storedData = sessionStorage.getItem("registrationData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (
        (usernameEmail === userData.username || usernameEmail === userData.email) &&
        password === userData.password
      ) {
        alert("Login berhasil!");
        navigate("/pembayaran");
      } else {
        alert("Username atau password salah.");
      }
    } else {
      alert("Belum ada akun terdaftar. Silakan daftar terlebih dahulu.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-white mb-4">Login Akun</h2>
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
          <div className="flex justify-between text-sm">
            <button
              type="button"
              onClick={() => alert("Fitur lupa password belum tersedia")}
              className="text-blue-400 hover:underline"
            >
              Lupa Password?
            </button>
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="text-blue-400 hover:underline"
            >
              Daftar Akun
            </button>
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

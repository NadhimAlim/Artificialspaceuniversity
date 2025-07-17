import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const OtpForm = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [inputOtp, setInputOtp] = useState("");
  const [step, setStep] = useState("input-email");

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit
  };

  const handleSendOtp = async () => {
    const newOtp = generateOTP();
    setOtp(newOtp);

    try {
      await emailjs.send(
        "your_service_id", // ✅ ganti
        "your_template_id", // ✅ ganti
        {
          user_email: email,
          otp: newOtp,
        },
        "your_public_key" // ✅ ganti
      );
      alert("✅ OTP telah dikirim ke email kamu!");
      setStep("verify-otp");
    } catch (error) {
      alert("❌ Gagal kirim OTP");
      console.error(error);
    }
  };

  const handleVerify = () => {
    if (inputOtp === otp) {
      alert("✅ OTP Cocok!");
    } else {
      alert("❌ OTP Salah!");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      {step === "input-email" && (
        <>
          <h2 className="text-xl font-bold mb-4">Kirim OTP ke Email</h2>
          <input
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <button
            onClick={handleSendOtp}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Kirim OTP
          </button>
        </>
      )}

      {step === "verify-otp" && (
        <>
          <h2 className="text-xl font-bold mb-4">Verifikasi OTP</h2>
          <input
            type="text"
            placeholder="Masukkan OTP"
            value={inputOtp}
            onChange={(e) => setInputOtp(e.target.value)}
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <button
            onClick={handleVerify}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Verifikasi
          </button>
        </>
      )}
    </div>
  );
};

export default OtpForm;

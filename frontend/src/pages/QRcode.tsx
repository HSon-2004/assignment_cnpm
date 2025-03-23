import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QRCodePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Lấy dữ liệu từ trang confirm

  if (!state) {
    navigate("/home"); // Nếu không có dữ liệu, quay về trang home
    return null;
  }

  const { timeFrom, timeTo, date, slot, demands } = state;
  const [qrValue, setQrValue] = useState("");

  useEffect(() => {
    // Tạo nội dung QR từ thông tin đặt chỗ
    const qrData = `Booking Details:\nTime: ${timeFrom} - ${timeTo}\nDate: ${date}\nSlot: ${slot}\nDemands: ${demands.length > 0 ? demands.join(", ") : "None"}`;
    setQrValue(qrData);
  }, [timeFrom, timeTo, date, slot, demands]);

  const handleSaveQR = () => {
    const canvas = document.getElementById("qrCode") as HTMLCanvasElement;
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "reservation_qr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen min-w-full bg-gray-100">
      {/* Header */}
      <header className="bg-cyan-500 text-white flex justify-between items-center px-6 py-3 shadow-md">
        {/* Logo + Tiêu đề */}
        <div className="flex items-center space-x-4">
          <img src="/public/images/logohcmut.png" alt="Logo" className="h-10 w-10" />
          <h1 className="text-lg font-bold">
            Smart Study Space Management and Reservation System at HCMUT
          </h1>
        </div>

        {/* Username Dropdown */}
        <button className="bg-white text-cyan-600 px-4 py-2 rounded-md">
          Username ▼
        </button>
      </header>

      {/* Nội dung chính */}
      <div className="flex flex-col items-center justify-center mt-10">
        <h2 className="text-2xl font-bold text-gray-900">You have successfully made a reservation</h2>
        <p className="text-lg text-gray-700 mt-2">
          This is the QR for you to check in. Please check in to activate your study space.
        </p>
        <p className="text-sm text-red-500 mt-1">
          Note: If you check in more than 15 minutes late, your spot will be forfeited.
        </p>

        {/* QR Code */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <QRCode id="qrCode" value={qrValue} size={200} />
        </div>

        {/* Nút Save QR và Back to Homepage */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handleSaveQR}
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
          >
            Save QR
          </button>

          <button
            onClick={() => navigate("/home")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;

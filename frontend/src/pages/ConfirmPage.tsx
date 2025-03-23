import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ConfirmPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Lấy dữ liệu từ trang booking
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // Trạng thái hiển thị hộp thoại

  if (!state) {
    navigate("/booking"); // Nếu không có dữ liệu, quay về trang booking
    return null;
  }

  const { timeFrom, timeTo, date, slot, demands } = state;

  const handleFinalConfirm = () => {
    console.log("Booking Confirmed:", state);
    navigate("/qr-code", { state }); // Chuyển sang trang QR
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

      {/* Main Content */}
      <div className="p-6">
        <a href="/home" className="text-blue-600 underline">Home</a>

        {/* Danh sách đặt phòng */}
        <div className="mt-6 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-bold bg-blue-400 text-white px-4 py-2 rounded-md">
            Booking Details
          </h2>
          <div className="mt-4 text-black">
            <p><strong>Time:</strong> {timeFrom} - {timeTo}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Slot:</strong> {slot}</p>
            <p><strong>Demands:</strong> {demands.length > 0 ? demands.join(", ") : "None"}</p>
          </div>
        </div>

        {/* Nút xác nhận */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setShowConfirmDialog(true)}
            className="bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>

      {/* Hộp thoại xác nhận */}
      {showConfirmDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold">Confirm</h2>
            <p className="text-gray-700 mt-2">Book now</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="text-blue-600 hover:underline px-4"
              >
                No
              </button>
              <button
                onClick={handleFinalConfirm}
                className="text-blue-600 hover:underline px-4"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa"; // Icon lịch

const BookingPage = () => {
  const navigate = useNavigate();
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [demands, setDemands] = useState<string[]>([]);

  const handleDemandChange = (demand: string) => {
    setDemands((prev) =>
      prev.includes(demand) ? prev.filter((d) => d !== demand) : [...prev, demand]
    );
  };

  const handleConfirmClick = () => {
    // Chuyển sang trang xác nhận và truyền dữ liệu đặt phòng
    navigate("/confirm", {
      state: { timeFrom, timeTo, date, slot, demands },
    });
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
      <div className="flex justify-center mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
          <a href="/home" className="text-blue-600 underline">Home</a>

          <div className="mt-6 space-y-6">
            {/* Chọn thời gian */}
            <div>
              <p className="font-semibold text-gray-900">Choose time</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-gray-900">From</span>
                <input
                  type="time"
                  value={timeFrom}
                  onChange={(e) => setTimeFrom(e.target.value)}
                  className="border px-3 py-2 rounded-md"
                />
                <span className="text-gray-900">To</span>
                <input
                  type="time"
                  value={timeTo}
                  onChange={(e) => setTimeTo(e.target.value)}
                  className="border px-3 py-2 rounded-md"
                />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border px-3 py-2 rounded-md"
                />
                <FaCalendarAlt className="text-gray-600 text-xl ml-2" />
              </div>
            </div>

            {/* Chọn slot */}
            <div>
              <p className="font-semibold text-gray-900">Choose slot</p>
              <input
                type="text"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="border px-3 py-2 rounded-md w-full mt-2"
                placeholder="Enter slot number"
              />
            </div>

            {/* Chọn nhu cầu */}
            <div>
              <p className="font-semibold text-gray-900">Choose demand</p>
              <div className="grid grid-cols-2 gap-3 mt-2">
                {["Fan", "Socket", "Television", "Whiteboards", "Air-conditioner"].map((item) => (
                  <label key={item} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={demands.includes(item)}
                      onChange={() => handleDemandChange(item)}
                      className="accent-blue-500"
                    />
                    <span className="text-gray-900">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nút Confirm */}
            <button
              onClick={handleConfirmClick}
              className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition w-full"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa"; // Import icon mũi tên

const Welcome = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to Reservation System at HCMUT
        </h1>

        <div className="relative inline-block">
          {/* Button với icon mũi tên */}
          <button
            onClick={() => setShowOptions(!showOptions)}
            className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Log in
            <FaChevronDown className="ml-2" />
          </button>

          {/* Dropdown Menu (kế bên phải) */}
          {showOptions && (
            <div className="absolute top-0 left-full ml-3 w-32 bg-blue-100 border border-blue-300 rounded-lg shadow-lg">
              <button
                onClick={() => navigate("/login")}
                className="w-full px-4 py-2 text-blue-600 hover:bg-blue-300 hover:text-white text-left rounded-t-lg"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="w-full px-4 py-2 text-blue-600 hover:bg-blue-300 hover:text-white text-left rounded-b-lg"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
